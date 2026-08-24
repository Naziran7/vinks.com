import React from 'react';
import { Quote, UserCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Client Feedback Structure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Testimonials</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Structured for genuine customer reviews. Replace with your verified client testimonials.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />

              <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                "{t.testimonialText}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.clientName}</div>
                  <div className="text-xs text-cyan-400 font-medium">{t.clientRole} • <span className="text-slate-400">{t.projectType}</span></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
