import React, { useState } from 'react';
import { MessageSquare, FileText, Palette, Code, CheckCircle, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 1: return <FileText className="w-5 h-5 text-blue-400" />;
      case 2: return <Palette className="w-5 h-5 text-pink-400" />;
      case 3: return <Code className="w-5 h-5 text-purple-400" />;
      case 4: return <CheckCircle className="w-5 h-5 text-yellow-400" />;
      case 5: return <Rocket className="w-5 h-5 text-emerald-400" />;
      case 6: return <ShieldCheck className="w-5 h-5 text-cyan-300" />;
      default: return <MessageSquare className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Streamlined Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            From initial idea submission to live cloud deployment, our transparent 7-step process ensures high quality and fast delivery.
          </p>
        </div>

        {/* Desktop Interactive Timeline Step Grid */}
        <div className="relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-slate-800 z-0">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${(activeStep / (siteConfig.processSteps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {siteConfig.processSteps.map((item, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`glass-panel p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'border-cyan-400/80 bg-slate-900 shadow-lg shadow-cyan-500/20 scale-[1.03]'
                      : isPassed
                      ? 'border-blue-500/40 bg-slate-900/60'
                      : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                  }`}
                >
                  <div className="space-y-3">
                    
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {getStepIcon(index)}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-base font-bold transition-colors ${
                      isActive ? 'text-cyan-300' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                  {/* Bottom Indicator Pill */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Step {index + 1} of 7</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 border border-cyan-500/40 hover:bg-cyan-950/40 transition-colors shadow-lg"
          >
            <span>Ready to start step 01? Share your idea now</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
