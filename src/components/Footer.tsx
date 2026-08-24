import React, { useState } from 'react';
import { Linkedin, Github, MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { LegalModals } from './LegalModals';

interface FooterProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-slate-800 text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-slate-700/80 shadow-lg shadow-white/5 overflow-hidden flex items-center justify-center">
                <img
                  src={siteConfig.company.logoPath}
                  alt={`${siteConfig.company.name} Logo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/Logo.png";
                  }}
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-white tracking-wider">
                  {siteConfig.company.name}
                </span>
                <div className="text-[9px] font-semibold text-slate-400 tracking-widest uppercase">
                  {siteConfig.company.tagline}
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              {siteConfig.company.supportingMessage}
            </p>

            <div className="pt-2 text-xs font-mono text-slate-300">
              {siteConfig.company.positioning}
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects Showcase</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Packages</a></li>

              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Connect & Social Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Bangalore • Innovation Corridor • KA, India
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div>
            © {siteConfig.company.yearFounded} <strong>{siteConfig.company.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => setLegalModalType('privacy')} className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setLegalModalType('terms')} className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => setLegalModalType('refund')} className="hover:text-cyan-400 transition-colors">
              Refund Policy
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors flex items-center gap-1 text-[11px]"
            title="Scroll to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      {/* Legal Policy Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
};
