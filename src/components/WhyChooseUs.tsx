import React from 'react';
import { Wallet, Zap, Sliders, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wallet': return <Wallet className="w-7 h-7 text-emerald-400" />;
      case 'Zap': return <Zap className="w-7 h-7 text-yellow-400" />;
      case 'Sliders': return <Sliders className="w-7 h-7 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-7 h-7 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-cyan-300" />;
      default: return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative bg-tech-grid border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Why Choose VINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Value & Quality</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Why students, startup founders, and businesses choose VINGS for their digital solution needs.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all shadow-md">
                {getPillarIcon(pillar.icon)}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
