import React, { useState, useEffect } from 'react';
import { Send, Paperclip, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface CustomQuoteFormProps {
  initialProjectType?: string;
  initialDiscountCode?: string;
}

export const CustomQuoteForm: React.FC<CustomQuoteFormProps> = ({
  initialProjectType,
  initialDiscountCode,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    customerType: 'Student',
    projectType: initialProjectType || 'Business Website',
    budget: '₹1,999 – ₹4,999 (Project Tier)',
    description: '',
    deadline: '2 Weeks',
    referenceUrl: '',
    discountCode: initialDiscountCode || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<{ quoteId: string; message: string; whatsappUrl: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialProjectType || initialDiscountCode) {
      let defaultBudget = '₹1,999 – ₹3,999 (Project)';
      if (initialProjectType === 'STARTER') defaultBudget = '₹1,499 – ₹2,499 (Starter)';
      else if (initialProjectType === 'PROJECT') defaultBudget = '₹1,999 – ₹3,999 (Project)';
      else if (initialProjectType === 'BUSINESS') defaultBudget = '₹3,999 – ₹5,999 (Business)';
      else if (initialProjectType === 'AI / CUSTOM') defaultBudget = '₹5,999 – ₹7,999 (AI / Custom / MVP)';

      setFormData(prev => ({
        ...prev,
        projectType: initialProjectType || prev.projectType,
        budget: defaultBudget,
        discountCode: initialDiscountCode || prev.discountCode,
      }));
    }
  }, [initialProjectType, initialDiscountCode]);

  const customerTypes = ['Student', 'Startup', 'Small Business', 'Freelancer', 'Other'];
  
  const projectTypes = [
    'Portfolio',
    'Final-Year Project',
    'Business Website',
    'E-Commerce',
    'AI/ML Project',
    'Web Application',
    'Startup MVP',
    'Custom Software'
  ];

  const budgetRanges = [
    '₹1,499 – ₹2,499 (Starter)',
    '₹1,999 – ₹3,999 (Project)',
    '₹3,999 – ₹5,999 (Business)',
    '₹4,999 – ₹6,999 (E-Commerce / Web App)',
    '₹5,999 – ₹7,999 (AI / Custom / MVP)'
  ];

  // Dynamic estimated range calculation for user feedback
  const getEstimatedPrice = () => {
switch (formData.projectType) {
  // 🎨 STARTER
  case 'STARTER':
  case 'Portfolio':
  case 'Student Bio Link':
  case 'Basic Landing Page':
  case 'Single Service Site':
    return '₹1,499 - ₹2,499';

  // 🎓 STUDENT PROJECT
  case 'PROJECT':
  case 'Final-Year Project':
  case 'College Capstone App':
  case 'Freelancer Portfolio':
    return '₹1,999 - ₹3,999';

  // 💼 BUSINESS
  case 'BUSINESS':
  case 'Business Website':
  case 'Admin Dashboard':
  case 'Service Company Portal':
    return '₹3,999 - ₹5,999';

  // 🛒 E-COMMERCE
  case 'E-Commerce':
  case 'E-Commerce Website':
  case 'Online Store':
    return '₹4,999 - ₹6,999';

  // 🌐 WEB APPLICATION
  case 'Web Application':
  case 'Full Stack Web Application':
    return '₹4,999 - ₹6,999';

  // 🤖 AI / ML
  case 'AI / CUSTOM':
  case 'AI/ML Project':
  case 'AI/ML Application':
  case 'Custom ChatGPT Bot':
  case 'Workflow Automation':
    return '₹5,999 - ₹7,499';

  // 🚀 STARTUP MVP
  case 'Startup MVP':
  case 'Startup MVP SaaS Product':
    return '₹5,999 - ₹7,999';

  // 🧩 CUSTOM SOFTWARE
  case 'Custom Software':
    return '₹6,999 - ₹7,999';

  // DEFAULT
  default:
    return '₹1,499 - ₹2,999';
}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const quoteId = `VINGS-Q-${Math.floor(100000 + Math.random() * 900000)}`;

    const text = `Hello VINKS! I'd like to request a quote for my project:

📌 *Project & Budget Details*
• *Ref ID:* ${quoteId}
• *Name:* ${formData.name}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}
• *Category:* ${formData.customerType}
• *Project Type:* ${formData.projectType}
• *Budget Range:* ${formData.budget}
• *Estimated Pricing:* ${getEstimatedPrice()}
• *Preferred Deadline:* ${formData.deadline}
${formData.discountCode ? `• *Applied Package / Code:* ${formData.discountCode}\n` : ''}${formData.description ? `• *Description:* ${formData.description}\n` : ''}${formData.referenceUrl ? `• *Reference Link:* ${formData.referenceUrl}\n` : ''}`;

    const whatsappUrl = `https://wa.me/919845820117?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setSubmittedQuote({
      quoteId,
      message: 'Quote request registered! Redirecting to WhatsApp to send your requirements directly to +91 98458 20117.',
      whatsappUrl,
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Instant Quote Generator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Tell Us What You Want To <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Build</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Fill in your project requirements below to receive a transparent price estimate and custom development roadmap.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Main Interactive Form Column */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            
            {submittedQuote ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Quote Request Ready!</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-sm font-mono font-bold">
                    Reference ID: {submittedQuote.quoteId}
                  </div>
                  <p className="text-slate-300 text-sm max-w-md mx-auto pt-2">
                    {submittedQuote.message}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={submittedQuote.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                  >
                    <span>Open in WhatsApp (+91 98458 20117)</span>
                  </a>

                  <button
                    onClick={() => setSubmittedQuote(null)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid Row 1: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98458 20117"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Customer Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Customer Category *</label>
                  <div className="flex flex-wrap gap-2">
                    {customerTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, customerType: type })}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          formData.customerType === type
                            ? 'bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-600/30'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Project Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((pt) => (
                      <button
                        type="button"
                        key={pt}
                        onClick={() => setFormData({ ...formData, projectType: pt })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                          formData.projectType === pt
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/60 font-bold'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Budget Range Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Target Budget Range *</label>
                    <span className="text-xs font-semibold text-cyan-400">Est: {getEstimatedPrice()}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {budgetRanges.map((bRange) => (
                      <button
                        type="button"
                        key={bRange}
                        onClick={() => setFormData({ ...formData, budget: bRange })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                          formData.budget === bRange
                            ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/60 font-bold shadow-lg shadow-blue-500/20'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {bRange}
                      </button>
                    ))}
                  </div>
                </div>


                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Project Description & Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your idea, required features, pages, or AI capabilities..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Grid Row 2: Deadline & Reference Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Preferred Deadline</label>
                    <select
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="1 Week (Urgent)">1 Week (Urgent)</option>
                      <option value="2 Weeks">2 Weeks</option>
                      <option value="1 Month">1 Month</option>
                      <option value="Flexible">Flexible Timeline</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Reference Website / Link</label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={formData.referenceUrl}
                      onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Promo Code Input */}
                {initialDiscountCode && (
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-2">
                    <Paperclip className="w-4 h-4" />
                    <span>Applied Discount Code: <strong>{initialDiscountCode}</strong></span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Quote Request...</span>
                  ) : (
                    <>
                      <span>Send Quote Request via WhatsApp (+91 98458 20117)</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
