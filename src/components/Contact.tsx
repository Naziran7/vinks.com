import React from 'react';
import { ArrowRight, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  onOpenQuote: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box */}
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-slate-700/80 shadow-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Ideas Into Reality</span>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Let's Build It.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              Whether you're a student with a project idea, a startup building its first product, or a business ready to go digital — tell us what you need.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-black bg-gradient-to-r from-slate-100 via-white to-slate-300 shadow-xl shadow-white/15 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Links */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="break-all sm:break-normal">{siteConfig.contact.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
