# VINGS — Professional Web & AI Solutions Company Website

> **Affordable technology. Professional execution. Intelligent solutions.**  
> *From Idea to Digital Product.*

VINGS is a high-end, modern, dynamic, and responsive business website and full-stack backend architecture built for **VINGS Technology & AI Solutions**. 

VINGS provides affordable web development, full-stack applications, AI/ML solutions, startup MVPs, e-commerce platforms, portfolio websites, final-year student projects, custom dashboards, and workflow automation.

---

## 🚀 Key Features & Architectural Highlights

### 🎨 Brand Identity & Premium UI Aesthetics
- **Dark Tech Theme**: Sleek deep black/charcoal backgrounds (`#07090E`), electric blue accents (`#3B82F6`), cyan highlights (`#06B6D4`), and subtle glassmorphic panels.
- **Interactive Particle Background**: Custom HTML5 Canvas particle network animation in the Hero section.
- **Typography System**: Space Grotesk display headings with Inter body fonts.
- **Micro-Interactions**: Hover glow cards, magnetic buttons, smooth section transitions, and responsive mobile drawer menu.

### 🎓 Target Customer Solutions
- **Students 🎓**: Portfolio websites, final-year capstone projects, AI/ML integration, viva defense documentation, and cloud deployment.
- **Startups 🚀**: High-converting landing pages, rapid MVP builds, product websites, and investor-ready UI.
- **Small Businesses 💼**: Modern business sites, e-commerce stores, admin dashboards, and local SEO setup.
- **Freelancers 👨‍💻**: Personal branding showcases, service catalogs, and lead capture forms.

### 🛠️ 8 Core Services
1. 🌐 **Web Development**: Responsive websites & full-stack web applications.
2. 🤖 **AI & ML Solutions**: Custom ChatGPT/LLM bots, resume analyzers, & machine learning backend.
3. 🚀 **Startup MVPs**: Fast 2-4 week MVP turnaround for early-stage founders.
4. 🎓 **Student Projects**: Final-year CS/IT projects with source code & explanation.
5. 🛒 **E-Commerce**: Online stores with UPI & Razorpay payment integration.
6. 📊 **Dashboards & Applications**: Real-time analytics & admin panels.
7. ⚙️ **Automation**: Workflow scripts, scraping, & notification alert bots.
8. 🎨 **UI/UX & Product Design**: Modern Figma-to-React component design systems.

### 💼 Interactive Features & Systems
- **Interactive 7-Step Process Timeline**: 01 Tell Us -> 07 Support with visual progress indicators.
- **Portfolio Showcase & Live Demo Viewer**: Interactive preview modal with desktop/mobile viewport switching for AI Resume Analyzer, Startup E-Commerce, and Student Project Tracker.
- **Transparent Pricing Packages**: STARTER (₹1,999+), PROJECT (₹4,999+), BUSINESS (₹9,999+), and AI/CUSTOM (₹14,999+).
- **Custom Quote Generator & Live Price Estimator**: Instant estimation widget calculating budget ranges based on customer type and project selection, with requirement document upload simulation.
- **Appointment Booking Calendar**: Date picker & time slot selector for booking free 1-on-1 consultation sessions.
- **Payment Architecture**: Indian UPI QR code modal generator, GST tax invoice requester, and backend HMAC Razorpay order creation.
- **FAQ Accordion**: 8 expandable Q&A items answering common client inquiries.
- **Legal Modals**: Built-in modal viewers for Privacy Policy, Terms of Service, and Refund Policy.

---

## 📁 Centralized Configuration (`src/config/siteConfig.ts`)

All company information, contact details, social links, pricing tiers, promotional discounts, services, and project items are centralized in a single configuration file:

```text
src/config/siteConfig.ts
```

You can update:
- Company name, tagline, and positioning
- Phone numbers, WhatsApp link, and email address
- Social profile links (LinkedIn, Instagram, X/Twitter, GitHub, WhatsApp)
- Pricing tiers & discount offers
- Portfolio projects & live demo links
- Services & FAQ items

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Space Grotesk & Inter (Google Fonts)

### Backend
- **Server**: Node.js + Express
- **Payments**: Razorpay Node SDK (Server-Side Key Encrypted)
- **Security**: CORS & HMAC SHA256 Signature Verification

---

## 📦 Installation & Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup Instructions

1. **Clone or Open Project Directory**:
   ```bash
   cd "c:\Users\ANISH NAZIRAN\Music\V I N K S"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration** (Optional):
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run Dev Environment**:

   - **Frontend Only** (Vite Dev Server on `http://localhost:3000`):
     ```bash
     npm run dev
     ```

   - **Backend API Only** (Express Server on `http://localhost:5000`):
     ```bash
     npm run server
     ```

   - **Fullstack Concurrently** (Both Frontend + Backend API):
     ```bash
     npm run fullstack
     ```

5. **Build for Production**:
   ```bash
   npm run build
   ```
   Outputs optimized production assets into the `dist/` directory.

---

## 🔒 Security & Payment Guidelines

- **Zero Secret Exposure**: Secret API keys (such as `RAZORPAY_KEY_SECRET`) are only accessed on the backend server (`server/server.js`).
- **Payment Verification Workflow**:
  ```text
  Frontend UI  ──►  POST /api/payment/create-order  ──►  Backend Order ID
       │                                                         │
  Payment Callback ──►  POST /api/payment/verify  ──► HMAC Verified Success
  ```

---

## 📜 License & Copyright

© 2026 VINGS. All rights reserved.  
*VINGS Technology & AI Solutions*
