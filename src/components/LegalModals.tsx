import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto text-slate-300 text-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Service'}
              {type === 'refund' && 'Refund Policy'}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content switch */}
        {type === 'privacy' && (
          <div className="space-y-4 leading-relaxed">
            <p>At <strong>{siteConfig.company.fullName}</strong>, we respect your privacy and are committed to protecting any client information submitted through our website or quote forms.</p>
            <h4 className="font-bold text-white">1. Information Collection</h4>
            <p>We collect names, emails, phone numbers, and project requirement specifications exclusively for project quote evaluation and communication.</p>
            <h4 className="font-bold text-white">2. Data Security</h4>
            <p>We do not sell or share client project details, source code, or contact information with third-party advertisers. All data is processed securely.</p>
            <h4 className="font-bold text-white">3. Contact</h4>
            <p>For privacy inquiries, contact us at {siteConfig.contact.email}.</p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4 leading-relaxed">
            <p>By engaging <strong>{siteConfig.company.fullName}</strong> for web development or AI solutions, you agree to the following terms:</p>
            <h4 className="font-bold text-white">1. Project Deliverables</h4>
            <p>Deliverables, tech stacks, and delivery timelines are defined in your approved project quote agreement.</p>
            <h4 className="font-bold text-white">2. Intellectual Property</h4>
            <p>Upon final project payment clearance, full ownership of client custom source code and assets is transferred to the client.</p>
            <h4 className="font-bold text-white">3. Post-Launch Warranty</h4>
            <p>Bug fixes and technical support are provided according to your package maintenance agreement (7 to 60 days post-launch).</p>
          </div>
        )}

        {type === 'refund' && (
          <div className="space-y-4 leading-relaxed">
            <p>Transparent refund policies for <strong>{siteConfig.company.fullName}</strong> development services:</p>
            <h4 className="font-bold text-white">1. Pre-Development Cancellation</h4>
            <p>If a project is cancelled prior to code initiation, a full refund of deposit funds minus administrative processing fees will be issued within 5-7 business days.</p>
            <h4 className="font-bold text-white">2. Milestone Delivery</h4>
            <p>For projects in active development, refunds are evaluated based on completed technical milestones and delivered code repositories.</p>
            <h4 className="font-bold text-white">3. UPI & Gateway Refunds</h4>
            <p>Refunds processed via UPI or Razorpay will be credited back to the original source account.</p>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
