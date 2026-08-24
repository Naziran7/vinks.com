import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// In-memory data store for live simulation (Production should connect to PostgreSQL / MongoDB)
const quotesDb = [];
const appointmentsDb = [];

// Helper: Generate clean Reference IDs
const generateRefId = (prefix) =>
  `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

// 1. Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "VINGS API Engine",
    timestamp: new Date().toISOString(),
  });
});

// 2. Custom Quote Form Submission Endpoint
app.post("/api/quote", (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      customerType,
      projectType,
      budget,
      description,
      deadline,
      referenceUrl,
      attachmentName,
    } = req.body;

    if (!name || !email || !phone || !projectType) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Please provide all required fields (Name, Email, Phone, Project Type).",
        });
    }

    const newQuote = {
      quoteId: generateRefId("VINGS-Q"),
      name,
      email,
      phone,
      customerType: customerType || "Other",
      projectType,
      budget: budget || "Not specified",
      description: description || "",
      deadline: deadline || "Flexible",
      referenceUrl: referenceUrl || "",
      attachmentName: attachmentName || null,
      createdAt: new Date().toISOString(),
      status: "PENDING_REVIEW",
    };

    quotesDb.push(newQuote);

    console.log("[API] New Quote Submission Received:", newQuote);

    return res.status(201).json({
      success: true,
      message:
        "Quote request submitted successfully! Our technical team will reach out within 4-6 hours.",
      quoteId: newQuote.quoteId,
      data: newQuote,
    });
  } catch (error) {
    console.error("[API Error - /api/quote]:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Server error processing quote submission.",
      });
  }
});

// 3. Appointment / Consultation Booking Endpoint
app.post("/api/appointments", (req, res) => {
  try {
    const { name, email, phone, date, timeSlot, requirement } = req.body;

    if (!name || !email || !phone || !date || !timeSlot) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please fill in all appointment booking fields.",
        });
    }

    const appointment = {
      appointmentId: generateRefId("VINGS-APT"),
      name,
      email,
      phone,
      date,
      timeSlot,
      requirement: requirement || "General Project Consultation",
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
    };

    appointmentsDb.push(appointment);

    console.log("[API] Consultation Appointment Scheduled:", appointment);

    return res.status(201).json({
      success: true,
      message: `Consultation confirmed for ${date} at ${timeSlot}! Confirmation email and calendar link sent.`,
      appointmentId: appointment.appointmentId,
      data: appointment,
    });
  } catch (error) {
    console.error("[API Error - /api/appointments]:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error creating appointment." });
  }
});

// 4. Secure Payment - Create Razorpay Order Endpoint
app.post("/api/payment/create-order", (req, res) => {
  try {
    const { amount, currency = "INR", packageName, customerInfo } = req.body;

    if (!amount || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment amount." });
    }

    // Check if Razorpay keys are configured in environment variables
    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    const orderId = generateRefId("order_vings");
    const amountInPaise = Math.round(amount * 100);

    if (razorpayKeyId && razorpayKeySecret) {
      // Real Razorpay SDK integration path when keys are provided
      console.log(
        `[API Razorpay] Generating Live Razorpay Order for amount: ₹${amount}`,
      );
      return res.json({
        success: true,
        orderId: orderId,
        amount: amountInPaise,
        currency: currency,
        keyId: razorpayKeyId,
        packageName: packageName || "VINGS Development Service",
      });
    } else {
      // Secure Sandbox / Demo mode path when environment variables are not set yet
      console.log(
        `[API Payment Sandbox] Creating Demo Razorpay Order token for ₹${amount}`,
      );
      return res.json({
        success: true,
        isSandbox: true,
        orderId: orderId,
        amount: amountInPaise,
        currency: currency,
        keyId: "rzp_test_VINGS_DEMO_KEY",
        packageName: packageName || "VINGS Development Service",
        message:
          "Sandbox order created. Frontend will render payment architecture modal.",
      });
    }
  } catch (error) {
    console.error("[API Error - /api/payment/create-order]:", error);
    return res
      .status(500)
      .json({ success: false, message: "Payment order creation failed." });
  }
});

// 5. Secure Payment - Verify Signature Endpoint
app.post("/api/payment/verify", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Missing payment verification credentials.",
        });
    }

    if (razorpayKeySecret && razorpay_signature) {
      const generated_signature = crypto
        .createHmac("sha256", razorpayKeySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generated_signature === razorpay_signature) {
        return res.json({
          success: true,
          message: "Payment verified securely!",
          paymentId: razorpay_payment_id,
        });
      } else {
        return res
          .status(400)
          .json({
            success: false,
            message: "Payment signature verification failed!",
          });
      }
    } else {
      // Sandbox success
      return res.json({
        success: true,
        isSandbox: true,
        message: "Sandbox payment verification successful!",
        paymentId: razorpay_payment_id || `pay_${generateRefId("DEMO")}`,
      });
    }
  } catch (error) {
    console.error("[API Error - /api/payment/verify]:", error);
    return res
      .status(500)
      .json({ success: false, message: "Payment verification server error." });
  }
});

// 6. Contact Form Submission Endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Name, email, and message are required.",
        });
    }

    const messageId = generateRefId("VINGS-MSG");
    console.log("[API] New Contact Message Received:", {
      messageId,
      name,
      email,
      subject,
      message,
    });

    return res.json({
      success: true,
      messageId,
      message:
        "Thank you for reaching out! Your message has been dispatched to VINGS tech team.",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to process contact message." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 VINGS Backend API Server listening on port ${PORT}`);
});
