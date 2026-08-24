# VINKS API & Microservices Documentation

> **Base URL (Node Backend)**: `http://localhost:5000/api`  
> **Base URL (Python ML Microservice)**: `http://localhost:8000/api/v1/ml`  

---

## 📋 Overview

This document specifies all RESTful API endpoints, request/response payload schemas, payment webhook contracts, and future Machine Learning endpoints for the VINKS platform.

---

## 🟢 Existing Express API Endpoints (`server/server.js`)

### 1. Health Check
Checks if backend API service is running.

- **Method**: `GET`
- **Path**: `/api/health`
- **Response**:
```json
{
  "status": "online",
  "company": "VINKS Technology Solutions",
  "timestamp": "2026-08-24T22:00:00.000Z"
}
```

---

### 2. Create Razorpay Payment Order
Generates an official Razorpay order ID for UPI / Credit Card checkout.

- **Method**: `POST`
- **Path**: `/api/payment/create-order`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "amount": 1999,
  "currency": "INR",
  "receipt": "VINGS-REC-102948"
}
```
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "orderId": "order_P19xKj28sLk9zX",
  "amount": 199900,
  "currency": "INR"
}
```

---

### 3. Verify Payment Signature
Verifies Razorpay HMAC SHA256 payment signature to confirm transaction authenticity.

- **Method**: `POST`
- **Path**: `/api/payment/verify`
- **Request Body**:
```json
{
  "razorpay_order_id": "order_P19xKj28sLk9zX",
  "razorpay_payment_id": "pay_P19yL39sMk0aYw",
  "razorpay_signature": "b1a2c3d4e5f6..."
}
```
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "message": "Payment verified successfully!"
}
```

---

## 🤖 Future Machine Learning (ML) Microservice Endpoints

### 1. Document OCR & Requirement Parser
Extracts project requirements from uploaded PDF or Word documents.

- **Method**: `POST`
- **Path**: `/api/v1/ml/parse-document`
- **Headers**: `Content-Type: multipart/form-data`
- **Request Parameters**:
  - `file`: Binary file (PDF / DOCX / JPG)
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "filename": "final_year_project_proposal.pdf",
  "extracted_features": [
    "User Authentication",
    "Razorpay UPI Payment Gateway",
    "Admin Analytics Dashboard",
    "Real-time Chatbot"
  ],
  "detected_tech_stack": ["React", "Node.js", "Python", "MongoDB"],
  "recommended_tier": "PROJECT",
  "estimated_price": "₹1,999 – ₹4,999"
}
```

---

### 2. Predictive Cost & Timeline Estimator
Predicts exact project quote using trained machine learning models.

- **Method**: `POST`
- **Path**: `/api/v1/ml/predict-price`
- **Request Body**:
```json
{
  "num_pages": 4,
  "has_database": true,
  "has_auth": true,
  "has_ai": false,
  "client_type": "Student"
}
```
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "estimated_price_inr": 1999,
  "estimated_days": 10,
  "confidence_level": "95%",
  "package_suggestion": "PROJECT"
}
```

---

### 3. RAG Knowledge Assistant Query
Queries ChromaDB vector database and streams context-aware AI answers.

- **Method**: `POST`
- **Path**: `/api/v1/ml/rag-chat`
- **Request Body**:
```json
{
  "query": "How much does a student final-year project with AI cost at VINKS?",
  "session_id": "sess_89234"
}
```
- **Success Response (200 OK)**:
```json
{
  "success": true,
  "answer": "At VINKS, student final-year projects start from ₹1,999+ under our PROJECT package. This includes 100% custom code, database integration, viva documentation, and cloud hosting.",
  "sources": ["siteConfig.ts -> pricing.tiers[1]"]
}
```

---

*API Documentation maintained by VINKS Engineering Team.*
