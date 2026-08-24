import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig, ProjectItem } from '../config/siteConfig';
import { LiveDemoModal } from './LiveDemoModal';

interface ProjectsProps {
  onOpenQuote: (projectType?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuote }) => {
  const [activeDemoProject, setActiveDemoProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Portfolio Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Some Things We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Built</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Explore live demo applications created by VINGS spanning AI/ML systems, e-commerce web applications, and student management tools.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                
                {/* Project Visual Image Preview Container */}
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-52 sm:h-60 overflow-hidden bg-slate-900 group/img cursor-pointer"
                  title={`Open Live Demo: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-950/90 text-slate-300 border border-slate-700 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </a>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions: Live Demo & GitHub */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-slate-100 via-white to-slate-300 hover:from-white hover:to-slate-200 shadow-lg shadow-white/10 transition-all flex items-center justify-center gap-2"
                  title="Open Live Website"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:text-white hover:border-slate-400 transition-colors flex items-center justify-center gap-2"
                  title="View Source Code on GitHub"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Have a unique custom project in mind?</h3>
            <p className="text-sm text-slate-300">We build custom full-stack web applications, AI models, and student final-year capstones from scratch.</p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl flex items-center gap-2 shrink-0"
          >
            <span>Request Custom Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Live Interactive Demo Viewer Modal */}
      <LiveDemoModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
      />

    </section>
  );
};
