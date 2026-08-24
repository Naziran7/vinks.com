import React from 'react';
import { 
  Globe, 
  Bot, 
  GraduationCap, 
  Rocket, 
  ShoppingCart, 
  LayoutDashboard, 
  Cpu, 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';

export const About: React.FC = () => {
  const offers = [
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "Website & Full-Stack Development",
      desc: "Custom-coded, responsive websites and scalable full-stack web applications."
    },
    {
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      title: "AI & Machine Learning Solutions",
      desc: "LLM API integrations, ChatGPT bots, Python ML models, and document analyzers."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Student & Final-Year Projects",
      desc: "Academic capstone projects with full source code, viva docs, and cloud deployment."
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: "Startup MVP Development",
      desc: "Fast-turnaround Minimum Viable Products built for early-stage founders."
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-pink-400" />,
      title: "E-Commerce Websites",
      desc: "Modern online store platforms with product management and Indian UPI payments."
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-amber-400" />,
      title: "Dashboards & Business Apps",
      desc: "Custom admin panels, real-time analytics portals, and internal tools."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Automation & Custom Software",
      desc: "Workflow alert bots, web scrapers, API webhooks, and process automation."
    },
    {
      icon: <Palette className="w-5 h-5 text-teal-400" />,
      title: "UI/UX & Responsive Design",
      desc: "Modern, high-converting digital interfaces designed around user experience."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#07090E] border-t border-slate-800/80">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Technology Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Your Requirements</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            VINKS is a technology startup focused on building affordable, modern, and customized digital solutions for college students, startups, freelancers, and small businesses.
          </p>
        </div>

        {/* Core Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Main Overview Box */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Who We Are & What Drives Us</h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We specialize in website development, full-stack applications, AI/ML solutions, e-commerce platforms, startup MVPs, portfolios, final-year projects, dashboards, automation, and custom software solutions.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Our goal is simple: make professional technology accessible without the high development costs. We understand that every client has different requirements and budgets, so we build solutions around their specific needs.
              </p>
            </div>

            {/* Pipeline Step Ribbon */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                End-to-End Project Execution:
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-semibold text-white flex flex-wrap items-center justify-center sm:justify-between gap-2">
                <span className="text-slate-300">Idea</span>
                <span className="text-cyan-400">→</span>
                <span className="text-slate-300">Design</span>
                <span className="text-cyan-400">→</span>
                <span className="text-slate-300">Development</span>
                <span className="text-cyan-400">→</span>
                <span className="text-slate-300">AI Integration</span>
                <span className="text-cyan-400">→</span>
                <span className="text-emerald-400 font-bold">Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Our Promise
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                VINKS — Web • AI • Innovation
              </h3>
              <blockquote className="text-slate-300 italic text-base border-l-2 border-cyan-400 pl-4 py-1">
                "Your idea. Our technology. Built around your requirements."
              </blockquote>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Affordable Rates for Students & Early-Stage Startups</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Custom Code tailored to your business logic</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Source Code Ownership & Post-Launch Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* What We Offer Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">What We Offer</h3>
            <p className="text-slate-400 text-sm">Comprehensive digital services engineered for performance and growth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offers.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
