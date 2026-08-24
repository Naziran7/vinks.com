import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Code2, Bot, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenQuote: (projectType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle background particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? '#FFFFFF' : '#94A3B8',
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#94A3B8';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-slate-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-slate-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-white/5 animate-float-slow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>{siteConfig.company.trustBadge}</span>
            </div>

            {/* Hero Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15]">
                {siteConfig.company.heroTitle.split("Digital Solutions")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Digital Solutions.
                </span>
              </h1>

              {/* Supporting Subhead */}
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-wide">
                {siteConfig.company.heroSubhead}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {siteConfig.company.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-black bg-gradient-to-r from-slate-100 via-white to-slate-300 hover:from-white hover:to-slate-200 shadow-xl shadow-white/15 hover:shadow-white/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-400 transition-all duration-300 shadow-lg"
              >
                <span>View Our Work</span>
                <Layers className="w-4 h-4 text-slate-300" />
              </a>
            </div>

            {/* Key Benefits Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-slate-400 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-200 shrink-0" />
                <span>100% Custom Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-200 shrink-0" />
                <span>Transparent Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-200 shrink-0" />
                <span>Fast Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Interactive Showcase Card */}
            <div className="relative w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl shadow-black/80 space-y-6">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  vinks_engine_v1.0.ts
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs text-slate-300 space-y-2 bg-[#0A0E17] p-4 rounded-xl border border-slate-800/90 leading-relaxed overflow-hidden">
                <div className="text-slate-500">// VINGS Custom Solution Pipeline</div>
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">project</span> = <span className="text-cyan-400">await</span> VINGS.<span className="text-emerald-400">buildIdea</span>(&#123;</div>
                <div className="pl-4 text-slate-400">client: <span className="text-yellow-300">"Student / Startup"</span>,</div>
                <div className="pl-4 text-slate-400">budget: <span className="text-emerald-400">"Affordable"</span>,</div>
                <div className="pl-4 text-slate-400">stack: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"AI/ML"</span>, <span className="text-cyan-300">"Python"</span>],</div>
                <div className="pl-4 text-slate-400">quality: <span className="text-purple-300">"Production Ready"</span></div>
                <div>&#125;);</div>
                <div className="text-emerald-400 font-semibold pt-1">✔ Deploy: Success [99.9% Speed]</div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-bold text-white">AI Ready</div>
                    <div className="text-[10px] text-slate-400">LLM & ML Integration</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Full Stack</div>
                    <div className="text-[10px] text-slate-400">Web & Cloud API</div>
                  </div>
                </div>
              </div>

              {/* Floating Status Pill 1 */}
              <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-cyan-500/40 text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>⚡ Student Special Rates</span>
              </div>

              {/* Floating Status Pill 2 */}
              <div className="absolute -bottom-5 -left-4 bg-slate-900/95 border border-blue-500/40 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-semibold">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                <div>
                  <div className="text-white font-bold">100% Quality Code</div>
                  <div className="text-[10px] text-slate-400">Clean Architecture</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
