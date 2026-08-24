import React from 'react';
import { Check, Sparkles, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PricingProps {
  onOpenQuote: (projectType?: string, budgetTier?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenQuote }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Professional Solutions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Student-Friendly Pricing.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            High-quality development accessible to students, freelancers, startups, and growing businesses.
          </p>

          {/* Mandatory Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-medium mt-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{siteConfig.pricing.disclaimer}</span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`glass-panel p-6 sm:p-7 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'border-slate-400 bg-slate-900 shadow-2xl shadow-white/10 scale-[1.02]'
                  : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
              }`}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-md ${
                    tier.popular
                      ? 'bg-cyan-400 text-black border-cyan-300 font-extrabold'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Package Name */}
                <div className="pt-2 mb-4">
                  <h3 className="text-xl font-extrabold text-white tracking-wider">
                    {tier.name}
                  </h3>
                </div>

                {/* Pricing Box */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">Starting From</div>
                  <div className="text-3xl font-display font-extrabold text-cyan-400 mt-1">
                    {tier.startingPrice}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Based on scope scope & features</div>
                </div>

                {/* Suitable For List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Suitable For:</div>
                  <div className="flex flex-wrap gap-1">
                    {tier.suitableFor.map((item, i) => (
                      <span key={i} className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 border-t border-slate-800/80 pt-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What's Included:</div>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenQuote(tier.name, tier.startingPrice)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02]'
                    : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700'
                }`}
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
