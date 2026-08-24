import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenQuote: (projectType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label={`${siteConfig.company.name} Homepage`}
          >
            <div className="relative w-10 h-10 rounded-xl bg-black border border-cyan-500/50 group-hover:border-cyan-400 shadow-lg shadow-cyan-500/20 overflow-hidden flex items-center justify-center">
              <img
                src={siteConfig.company.logoPath}
                alt={`${siteConfig.company.name} Logo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/Logo.png";
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-slate-200 transition-colors">
                {siteConfig.company.name}
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase -mt-1 opacity-90">
                WEB • AI • INNOVATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-black bg-gradient-to-r from-slate-100 via-white to-slate-300 shadow-md shadow-white/15 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl border border-slate-800 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => onOpenQuote()}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-black bg-gradient-to-r from-slate-100 via-white to-slate-300 hover:from-white hover:to-slate-200 transition-all duration-300 shadow-lg shadow-white/15 hover:shadow-white/30 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-white to-slate-200"
            >
              Get Started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] max-h-[calc(100vh-70px)] overflow-y-auto bg-[#07090E]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-center text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-slate-300 bg-slate-900 border border-slate-800 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Us: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
