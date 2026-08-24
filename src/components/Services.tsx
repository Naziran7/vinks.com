import React, { useState } from 'react';
import { 
  Globe, Bot, Rocket, GraduationCap, ShoppingCart, 
  LayoutDashboard, Cpu, Palette, ArrowRight, Check, X, Sparkles
} from 'lucide-react';
import { siteConfig, ServiceItem } from '../config/siteConfig';

interface ServicesProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-7 h-7 text-slate-100" />;
      case 'Bot': return <Bot className="w-7 h-7 text-slate-200" />;
      case 'Rocket': return <Rocket className="w-7 h-7 text-slate-300" />;
      case 'GraduationCap': return <GraduationCap className="w-7 h-7 text-slate-200" />;
      case 'ShoppingCart': return <ShoppingCart className="w-7 h-7 text-slate-100" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-7 h-7 text-slate-300" />;
      case 'Cpu': return <Cpu className="w-7 h-7 text-slate-200" />;
      case 'Palette': return <Palette className="w-7 h-7 text-slate-100" />;
      default: return <Sparkles className="w-7 h-7 text-slate-200" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Build</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            High-quality software development, AI solutions, and digital tools created with modern engineering practices.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Header Icon + Popular For Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-slate-600 transition-all">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {service.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Read Details Link */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors">
                <span>View Details & Tech</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                {getServiceIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <span className="text-xs font-semibold text-cyan-400">Popular for: {selectedService.popularFor}</span>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features & Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(title);
                }}
                className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                <span>Request Quote for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-6 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
