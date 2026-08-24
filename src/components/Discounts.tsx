import React from 'react';
import { GraduationCap, Rocket, PackageCheck, ArrowRight, Tag, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface DiscountsProps {
  onOpenQuote: (projectType?: string, discountCode?: string) => void;
}

export const Discounts: React.FC<DiscountsProps> = ({ onOpenQuote }) => {
  const getOfferIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-cyan-400" />;
      case 'Rocket': return <Rocket className="w-8 h-8 text-blue-400" />;
      case 'PackageCheck': return <PackageCheck className="w-8 h-8 text-emerald-400" />;
      default: return <Tag className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-tech-grid border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Special Launch Savings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Launch Your Idea <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">For Less 🚀</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Take advantage of our exclusive discount programs designed for college students, bootstrapped founders, and growing businesses.
          </p>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.discounts.offers.map((offer) => (
            <div
              key={offer.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Promo Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getOfferIcon(offer.icon)}
                </div>
                <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  CODE: {offer.code}
                </span>
              </div>

              {/* Title & Discount Highlight */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {offer.title}
                </h3>
                <div className="text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {offer.discount}
                </div>
                <p className="text-xs font-medium text-cyan-300/90">
                  {offer.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                {offer.description}
              </p>

              {/* Claim CTA */}
              <button
                onClick={() => onOpenQuote(offer.title, offer.code)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Claim Your Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Small Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-slate-300 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>{siteConfig.discounts.disclaimer}</span>
        </div>

      </div>
    </section>
  );
};
