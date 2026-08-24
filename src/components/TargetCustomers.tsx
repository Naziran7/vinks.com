import React from 'react';
import { GraduationCap, Rocket, Briefcase, Laptop, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface TargetCustomersProps {
  onOpenQuote: (customerType?: string) => void;
}

export const TargetCustomers: React.FC<TargetCustomersProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-cyan-400" />;
      case 'Rocket': return <Rocket className="w-8 h-8 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-indigo-400" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-emerald-400" />;
      default: return <Sparkles className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Tailored Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Built For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Next Big Idea</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need a final-year project, a high-converting startup MVP, or a business web platform, VINGS engineers tailored digital solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.targetCustomers.map((customer) => (
            <div
              key={customer.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all shadow-md">
                  {getIcon(customer.icon)}
                </div>

                {/* Card Title & Subtitle */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {customer.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 tracking-wide uppercase">
                    {customer.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {customer.description}
                </p>

                {/* Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {customer.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:border-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Arrow Button */}
              <button
                onClick={() => onOpenQuote(customer.title)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 flex items-center justify-between"
              >
                <span>{customer.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
