export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: string[];
  popularFor: string;
}

export interface PricingTier {
  id: string;
  name: string;
  startingPrice: string;
  rawPrice: number;
  period: string;
  suitableFor: string[];
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface DiscountOffer {
  id: string;
  title: string;
  discount: string;
  tagline: string;
  targetAudience: string;
  description: string;
  code: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveDemoUrl: string;
  caseStudyUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  projectType: string;
  testimonialText: string;
  avatarPlaceholder?: string;
}

export const siteConfig = {
  company: {
    name: "VINKS",
    fullName: "VINKS Technology & AI Solutions",
    tagline: "Web • AI • Innovation",
    positioning: "Affordable technology. Professional execution. Intelligent solutions.",
    brandMessage: "From Idea to Digital Product.",
    supportingMessage: "Building modern websites, AI-powered solutions and digital products for students, startups and businesses.",
    heroTitle: "We Build Ideas Into Digital Solutions.",
    heroSubhead: "Modern Websites, AI Solutions & Digital Products — Built for Less.",
    heroDescription: "VINKS helps students, startups, freelancers and businesses turn ideas into professional digital products without the high development cost.",
    trustBadge: " Affordable • Professional • Custom-Built",
    logoPath: "/Logo.png",
    yearFounded: 2026,
  },

  contact: {
    email: "connect.vinks@gmail.com",
    phone: "+91 98458 20117",
    whatsapp: "+91 98458 20117",
    whatsappLink: "https://wa.me/919845820117",
    address: "VINKS Tech Hub, Innovation Corridor, Bangalore, KA, India",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/vinksbusiness",
    instagram: "https://instagram.com/vinks",
    twitter: "https://x.com/vinks",
    github: "https://github.com/naziran7",
    whatsapp: "https://wa.me/919845820117",
  },

  targetCustomers: [
    {
      id: "students",
      icon: "GraduationCap",
      title: "Students",
      subtitle: "Academic & Career Growth",
      description: "Portfolio websites, final-year projects, AI/ML project development, documentation, and live deployment assistance.",
      cta: "Explore Student Solutions",
      highlights: ["Final-Year Projects", "AI/ML Integration", "Portfolio Builds", "Code Explanation & Docs"]
    },
    {
      id: "startups",
      icon: "Rocket",
      title: "Startups",
      subtitle: "Fast Launch & Scaling",
      description: "High-converting landing pages, MVP product development, SaaS web applications, and scalable backend infrastructure.",
      cta: "Build Your MVP",
      highlights: ["Fast MVP Turnaround", "Landing Pages", "Full-Stack Web Apps", "Investor Ready UI"]
    },
    {
      id: "small-businesses",
      icon: "Briefcase",
      title: "Small Businesses",
      subtitle: "Digital Presence & Sales",
      description: "Modern business websites, custom admin dashboards, e-commerce stores, and digital automation tools.",
      cta: "Grow Your Business",
      highlights: ["Modern Business Sites", "E-Commerce Stores", "Admin Dashboards", "Local SEO Setup"]
    },
    {
      id: "freelancers",
      icon: "Laptop",
      title: "Freelancers",
      subtitle: "Personal Brand Excellence",
      description: "Professional portfolio websites, personal branding showcases, service catalog pages, and client lead forms.",
      cta: "Get Portfolio Ready",
      highlights: ["Personal Brand Sites", "Service Catalogs", "Lead Capture", "High Speed Performance"]
    }
  ],

  services: [
    {
      id: "web-dev",
      icon: "Globe",
      title: "Web Development",
      shortDesc: "Modern responsive websites and full-stack web applications tailored to your exact budget.",
      fullDesc: "We design and develop high-performance, modern websites tailored to your brand and business goals. From landing pages to full-scale web applications, we build responsive, secure, and scalable digital experiences that work seamlessly across every device.",
      features: ["Custom UI/UX Design", "Responsive Across Mobile & Desktop", "SEO & Speed Optimization", "CMS or Custom Admin Panel"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      popularFor: "Startups, Businesses & Personal Brands"
    },
    {
      id: "ai-ml",
      icon: "Bot",
      title: "AI & ML Solutions",
      shortDesc: "AI-powered applications, custom chatbots, automated workflows, and intelligent machine learning models.",
      fullDesc: "Integrate cutting-edge AI capabilities into your product. From LLM API integrations, fine-tuned AI bots to intelligent computer vision or NLP systems.",
      features: ["Custom ChatGPT / LLM Bots", "Resume & Document AI Analyzers", "Automated AI Workflows", "FastAPI / Python AI Backend"],
      techStack: ["Python", "FastAPI", "OpenAI / Claude API", "PyTorch / Scikit-Learn", "LangChain"],
      popularFor: "AI Startups & Final Year College Projects"
    },
    {
      id: "startup-mvp",
      icon: "Rocket",
      title: "Startup MVPs",
      shortDesc: "Fast and affordable MVP development built specifically for early-stage business launches.",
      fullDesc: "Turn your business idea into a market-ready Minimum Viable Product (MVP) in record time without overspending your initial budget.",
      features: ["Rapid 2-4 Week Delivery", "Core User Authentication & DB", "Payment Gateway Integration", "Scalable Modular Architecture"],
      techStack: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Vercel / Render"],
      popularFor: "Early-Stage Entrepreneurs & Founders"
    },
    {
      id: "student-projects",
      icon: "GraduationCap",
      title: "Student Projects",
      shortDesc: "Portfolio websites, final-year capstone projects, AI/ML prototypes, and live cloud deployment.",
      fullDesc: "Empowering students with industry-grade project code, clean modular design, complete technical documentation, and project defense preparation guidance.",
      features: ["Final-Year Web & AI Projects", "Complete Project Source Code", "Architecture Diagram & Docs", "Live Cloud Deployment"],
      techStack: ["React", "Python / Node.js", "MySQL / Postgres", "GitHub"],
      popularFor: "CS, IT & Engineering Students"
    },
    {
      id: "e-commerce",
      icon: "ShoppingCart",
      title: "E-Commerce",
      shortDesc: "Affordable and fast online store websites built for small businesses and independent brands.",
      fullDesc: "Sell products online effortlessly with custom product catalogs, quick shopping carts, order management dashboards, and Indian UPI payment gateways.",
      features: ["Product Management System", "Shopping Cart & Checkout", "UPI / Razorpay Payment Integration", "Mobile Responsive Store"],
      techStack: ["React / Next.js", "Node.js", "Razorpay", "Tailwind CSS"],
      popularFor: "Retailers, D2C Brands & Local Shops"
    },
    {
      id: "dashboards",
      icon: "LayoutDashboard",
      title: "Dashboards & Applications",
      shortDesc: "Admin panels, real-time analytics dashboards, and custom internal business applications.",
      fullDesc: "Streamline operational decision-making with custom analytics dashboards, user management portals, inventory logs, and role-based access control.",
      features: ["Real-time Data Visualization", "User Management & RBAC", "Exportable PDF/Excel Reports", "Dark Mode UI Layout"],
      techStack: ["React", "Chart.js / Recharts", "Tailwind CSS", "Express API"],
      popularFor: "Operations, SaaS & Enterprise Tooling"
    },
    {
      id: "automation",
      icon: "Cpu",
      title: "Automation",
      shortDesc: "Automate repetitive manual business workflows, notifications, scraping, and lead processing.",
      fullDesc: "Save hundreds of hours by automating repetitive data tasks, email notifications, WhatsApp alerts, form routing, and CRM updates.",
      features: ["WhatsApp & Email Alert Bots", "Web Scraping & Data Extraction", "API Integrations & Webhooks", "Cron Job Automation"],
      techStack: ["Node.js", "Python", "Puppeteer", "Twilio / WhatsApp API"],
      popularFor: "Freelancers, Agencies & Operations"
    },
    {
      id: "ui-ux",
      icon: "Palette",
      title: "UI/UX & Product Design",
      shortDesc: "Modern, high-converting digital interfaces designed around user needs and brand identity.",
      fullDesc: "Create user-centric wireframes, modern design systems, glassmorphic UI components, and intuitive user experiences before writing a line of code.",
      features: ["Interactive Prototypes", "Design System & Color Palettes", "Mobile First Component Design", "Figma to React Conversion"],
      techStack: ["Figma", "Tailwind CSS", "Framer Motion", "CSS3"],
      popularFor: "Product Teams & Brand Refresh"
    }
  ] as ServiceItem[],

  processSteps: [
    { step: "01", title: "Tell Us Your Idea", desc: "Share your requirements, wireframes, or rough vision through our simple custom quote form or call." },
    { step: "02", title: "Get Your Plan", desc: "We review your scope and provide a transparent project roadmap, milestone breakdown, and affordable pricing quote." },
    { step: "03", title: "Design", desc: "Our product design team creates wireframes, color systems, and modern interactive UI concepts for your approval." },
    { step: "04", title: "Build", desc: "Our full-stack engineering team builds your project using clean, scalable React, Node.js, and Python codebases." },
    { step: "05", title: "Test", desc: "We perform rigorous quality testing across desktop and mobile screens, security audits, and speed optimizations." },
    { step: "06", title: "Deploy", desc: "We launch your application live on high-speed cloud infrastructure with custom domain routing and SSL setup." },
    { step: "07", title: "Support", desc: "Enjoy post-launch bug fixes, maintenance support, code explanation docs, and future feature upgrades." }
  ],

  projects: [
      {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer & Job Matcher",
        category: "AI / Machine Learning / Web Application",
        description:
          "An AI-powered platform that parses resumes, analyzes skill gaps against job descriptions, and provides intelligent improvement recommendations using NLP.",
        image: "/ai-resume-analyzer.jpg",
        tags: ["AI/ML", "React", "Python FastAPI", "NLP", "Tailwind"],
        liveDemoUrl: "https://naziran-resume-gpt.vercel.app/",
        caseStudyUrl: "https://github.com/Naziran7/Naziran-Resume-GPT",
        featured: !0,
        highlights: [
          "Instant ATS Score Check",
          "Skill Gap Matrix",
          "PDF Parsing",
          "Custom AI Feedback",
        ],
      },
    {
      id: "ai-medical-scan",
      title: "AI Medical Scan Diagnosis",
      category: "AI / Healthcare / Web Application",
      description: "AI-powered clinical intelligence platform for medical image analysis and diagnostic assistance. The system enables healthcare professionals to securely upload and analyze medical scans, identify potential abnormalities, and receive AI-generated insights to support faster and more informed clinical decision-making.",
      image: "/ai-medical-scan.jpg",
      tags: ["AI/ML", "TensorFlow", "Python", "Computer Vision", "Tailwind"],
        liveDemoUrl: "https://ai-medical-diagnosis-system-at5v.onrender.com/",
        caseStudyUrl:
          "https://github.com/reegangladis/AI_Medical_Diagnosis_System",
      featured: true,
      highlights: ["92% AI Confidence Score", "X-Ray Scan Analysis", "Automated AI Reports", "Doctor Dashboard"]
    },
      {
        id: "student-project-mgmt",
        title: "Portofolio Webpages",
        category: "Student Solution",
        description:
          "I’m showcasing this project as part of my portfolio to demonstrate my development skills, creativity, and ability to build a complete, functional, and user-friendly application. This demo highlights the key features, design, functionality, and technologies used to bring the project to life.",
        image: "/portfolio-webpages.jpg",
        tags: ["TypeScript", "Express API", "Tailwind CSS", "Professional UI"],
        liveDemoUrl: "https://anish-naziran07.web.app/",
        caseStudyUrl: "https://github.com/Naziran7/kinetic-canvas",
        featured: !0,
        highlights: [
          "Responsive Portfolio Design",
          "Project Showcase",
          "Interactive Skills Section",
          "Contact & Social Links",
        ],
      },
  ] as ProjectItem[],

    pricing: {
      disclaimer:
        "Final pricing depends on project requirements and scope complexity.",
      tiers: [
        {
          id: "starter",
          name: "STARTER",
          startingPrice: "₹1,499+",
          rawPrice: 1499,
          period: "one-time",
          badge: "Budget Friendly",
          suitableFor: [
            "Personal Portfolios",
            "Student Bio Links",
            "Basic Landing Pages",
            "Single Service Sites",
          ],
          features: [
            "Responsive 1-3 Page Website",
            "Mobile & Desktop Optimized",
            "Contact Form & WhatsApp Chat Link",
            "Fast Load Times & Basic SEO",
            "Free Source Code Delivery",
            "7 Days Post-Launch Support",
          ],
          popular: !1,
        },
        {
          id: "project",
          name: "PROJECT",
          startingPrice: "₹1,999+",
          rawPrice: 1999,
          period: "one-time",
          badge: "Most Popular",
          suitableFor: [
            "Student Final-Year Projects",
            "College Capstone Apps",
            "Business Websites",
            "Freelancer Portfolios",
          ],
          features: [
            "Full 3-6 Page Custom Web App",
            "Database / API Integration",
            "Student Project Code + Explanation",
            "Complete System Architecture Docs",
            "Live Cloud Hosting Deployment",
            "15 Days Post-Launch Support",
          ],
          popular: !0,
        },
        {
          id: "business",
          name: "BUSINESS",
          startingPrice: "₹4,999+",
          rawPrice: 4999,
          period: "one-time",
          badge: "Growth Choice",
          suitableFor: [
            "Business Websites",
            "E-Commerce Online Stores",
            "Admin Dashboards",
            "Service Company Portals",
          ],
          features: [
            "Multi-Page Dynamic Web System",
            "Product / Catalog Management",
            "Indian UPI & Razorpay Gateway Setup",
            "Admin Dashboard & User Auth",
            "Advanced SEO & Analytics Setup",
            "30 Days Maintenance & Support",
          ],
          popular: !1,
        },
        {
          id: "ai-custom",
          name: "AI / CUSTOM",
          startingPrice: "₹7,999+",
          rawPrice: 7999,
          period: "one-time",
          badge: "Enterprise & AI",
          suitableFor: [
            "AI / ML Applications",
            "Custom ChatGPT Bots",
            "Startup MVP SaaS Products",
            "Workflow Automation",
          ],
          features: [
            "Custom AI/ML Model or LLM Integration",
            "FastAPI / Python Dedicated AI Backend",
            "Scalable SaaS Database Architecture",
            "Custom Workflow Automation Scripts",
            "Full Investor Demo / Source Code",
            "Dedicated 60 Days Priority Support",
          ],
          popular: !1,
        },
      ],
    },

  discounts: {
    disclaimer: "Offers may vary depending on project scope and availability.",
    offers: [
      {
        id: "student-discount",
        title: "Student Discount",
        discount: "Up to 15% OFF",
        tagline: "For eligible student final-year & academic projects.",
        targetAudience: "CS, IT & Engineering Students",
        description: "Verify student status with college ID card to unlock instant package discounts on final-year web or AI project development.",
        code: "STUDENT15",
        icon: "GraduationCap"
      },
      {
        id: "startup-launch",
        title: "Startup Launch Offer",
        discount: "Up to 20% OFF",
        tagline: "For selected early-stage startup MVP builds.",
        targetAudience: "Early-Stage Founders & Startups",
        description: "Special startup pricing bundle designed to help early-stage bootstrapped founders launch market-ready digital MVPs.",
        code: "STARTUP20",
        icon: "Rocket"
      },
      {
        id: "bundle-offer",
        title: "All-In-One Bundle",
        discount: "Special Package Pricing",
        tagline: "Website + Hosting + 1 Year Maintenance Bundle.",
        targetAudience: "Businesses & Companies",
        description: "Save big by combining custom website design, cloud domain/hosting setup, and dedicated quarterly technical support.",
        code: "VINGSPACKAGE",
        icon: "PackageCheck"
      }
    ] as DiscountOffer[]
  },

  whyChooseUs: [
    { id: "affordable", icon: "Wallet", title: "Affordable", description: "High-end development tailored specifically around realistic student and small business budgets without compromising quality." },
    { id: "fast", icon: "Zap", title: "Fast Delivery", description: "Efficient development sprints, active milestone updates, and prompt project delivery." },
    { id: "custom", icon: "Sliders", title: "100% Custom Built", description: "Every line of code and UI component is tailored specifically to your unique business logic and design requirements." },
    { id: "ai-ready", icon: "Sparkles", title: "AI Ready", description: "Seamlessly integrate cutting-edge OpenAI, Claude, LLM APIs, and Python machine learning capabilities whenever your app needs them." },
    { id: "responsive", icon: "Smartphone", title: "Fully Responsive", description: "Flawless user experience across mobile phones, tablets, laptops, and ultra-wide desktop monitors." },
    { id: "support", icon: "ShieldCheck", title: "Post-Launch Support", description: "Dedicated post-launch technical assistance, bug fixes, maintenance packages, and code explanation guidance." }
  ],

  faq: [
    {
      question: "How much does a website cost?",
      answer: "Pricing depends on your specific requirements and scope. VINGS offers student-friendly, affordable package tiers starting from ₹1,999+ for basic starter websites, ₹4,999+ for student/business projects, up to custom AI applications."
    },
    {
      question: "Do you build student final-year projects?",
      answer: "Yes! We specialize in student project development including full-stack web applications, AI/ML solutions, detailed technical documentation, code explanation walkthroughs, and live cloud deployment to ensure you excel in your project viva."
    },
    {
      question: "Do you build AI projects?",
      answer: "Yes! We develop modern AI/ML applications, custom LLM integrations, ChatGPT chatbots, document analyzers, web scrapers, and intelligent web automation systems using Python, FastAPI, and OpenAI/Claude APIs."
    },
    {
      question: "Can I request a custom website?",
      answer: "Absolutely! Every project we build is 100% tailored to your specific requirements. You can submit your exact features through our Custom Quote Form or schedule a call with our technical team."
    },
    {
      question: "Do you provide hosting?",
      answer: "Yes. Cloud hosting setup, domain routing, and SSL security configuration can be included in our project packages (e.g. Vercel, Render, Railway, AWS, or your preferred host)."
    },
    {
      question: "Do you provide maintenance?",
      answer: "Yes. Every package includes a post-launch warranty period (from 7 to 60 days). We also offer extended monthly and annual maintenance packages to keep your website updated, secure, and running smoothly."
    },
    {
      question: "Can I pay using UPI?",
      answer: "Yes! We support all Indian payment options including instant UPI (Google Pay, PhonePe, Paytm, BHIM), direct QR Code payment, net banking, debit/credit cards, and secure Razorpay payment processing."
    },
    {
      question: "Can I schedule a meeting?",
      answer: "Yes! You can pick a convenient date and time slot using our interactive Appointment Booking calendar on this website to discuss your project requirements for free."
    }
  ] as FAQItem[],

  testimonials: [
    {
      id: "test-1",
      clientName: "Client Name Placeholder",
      clientRole: "Final-Year CS Student",
      projectType: "AI Machine Learning Project",
      testimonialText: "Genuine client testimonial will be placed here. VINGS built our AI project cleanly with detailed code documentation and live cloud hosting."
    },
    {
      id: "test-2",
      clientName: "Client Name Placeholder",
      clientRole: "Startup Founder",
      projectType: "Full-Stack MVP Web App",
      testimonialText: "Genuine client testimonial will be placed here. Fast turnaround, impressive modern design aesthetic, and affordable pricing."
    },
    {
      id: "test-3",
      clientName: "Client Name Placeholder",
      clientRole: "Small Business Owner",
      projectType: "E-Commerce Business Website",
      testimonialText: "Genuine client testimonial will be placed here. VINGS helped set up our online store with UPI payment integration and mobile responsive views."
    }
  ] as TestimonialItem[]
};
