import React, { useState } from 'react';
import { X, ExternalLink, Smartphone, Monitor, RefreshCw, CheckCircle, Code } from 'lucide-react';
import { ProjectItem } from '../config/siteConfig';

interface LiveDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(false);

  if (!project) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl h-[92vh] bg-[#07090E] border border-slate-700 rounded-3xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-bold text-white ml-2">{project.title}</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          {/* Viewport Toggles & Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 mr-2">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  deviceMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  deviceMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={handleRefresh}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
              title="Refresh Demo Frame"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            </button>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <span>Open Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Frame Body */}
        <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-hidden flex items-center justify-center relative">
          
          <div
            className={`transition-all duration-300 h-full bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
              deviceMode === 'mobile' ? 'w-full max-w-[375px] h-full max-h-[680px] rounded-[36px] border-4 sm:border-8 border-slate-800' : 'w-full h-full'
            }`}
          >
            {/* Embedded Live Simulation Frame */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-900/90 text-slate-200">
              
              {/* Simulated Demo Header Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest mb-1">
                    VINGS Interactive Demo Viewer
                  </div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">{project.description}</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Live Interactive Preview</span>
                </div>
              </div>

              {/* Highlights & Architecture Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Key Features Built</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span>Tech Stack Implementation</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/60 text-cyan-300 border border-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-2 leading-relaxed">
                    This project highlights VINGS full-stack architecture, clean code structure, responsive UI components, and API integration.
                  </p>
                </div>
              </div>

              {/* Visual Project Preview Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-xl flex items-center gap-2"
                  >
                    <span>Launch External Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
