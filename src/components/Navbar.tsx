import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Search, ExternalLink, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenFollowUs: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenFollowUs,
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Cybersecurity', href: '#topics', id: 'topics' },
    { label: 'Ethical Hacking', href: '#attack-defend', id: 'attack-defend' },
    { label: 'Tech', href: '#featured', id: 'featured' },
    { label: 'AI & Security', href: '#topics', id: 'topics-ai' },
    { label: 'Cyber News', href: '#cyber-news', id: 'cyber-news' },
    { label: 'Resources', href: '#resources', id: 'resources' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-[#080b11]/60 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick('home', e)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="CyberSec Nepal Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-blue-500/40 group-hover:border-blue-400 transition-colors shadow-sm shadow-blue-500/10">
              <Shield className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-blue-500/10 blur-sm group-hover:bg-blue-500/20 transition-all" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-blue-200 transition-colors">
                  CYBERSEC<span className="text-blue-400 font-extrabold ml-1">NEPAL</span>
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                Security &bull; Ethics &bull; Safety
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all rounded-md ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Search & Follow Us */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-all hover:border-slate-600 focus:outline-none"
              title="Search articles, terms, tools"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px] text-slate-400">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Follow Us Button */}
            <button
              onClick={onOpenFollowUs}
              className="relative group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-all shadow-sm shadow-blue-600/30 overflow-hidden"
              id="btn-follow-us"
            >
              <span>Follow Us</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-lg border border-slate-800"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-lg border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          {/* Status Badge in mobile */}
          <div className="flex items-center gap-2 py-1.5 px-3 mb-2 rounded bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CYBERSEC NEPAL // ONLINE</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(link.id, e)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFollowUs();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-md"
            >
              Follow CyberSec Nepal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
