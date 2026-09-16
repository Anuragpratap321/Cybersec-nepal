import React from 'react';
import { Shield, Radio, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070b] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (2 Cols on desktop) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-blue-500/40">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                CYBERSEC<span className="text-blue-400 ml-1">NEPAL</span>
              </span>
            </div>

            <p className="font-display text-base font-semibold text-slate-300 italic mb-4">
              “Understand. Protect. Stay Ahead.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Empowering Nepali students, creators, professionals, and developers with clear, actionable cybersecurity education and timely digital threat analysis.
            </p>

            {/* System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS NORMAL // ADVISORY FEED LIVE</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('topics')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attack-defend')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Ethical Hacking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cyber-news')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Cyber News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('topics')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI &amp; Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('topics')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Tech Tips
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glossary')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Cyber Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Security Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Disclaimer */}
        <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80 mb-8 text-[11px] text-slate-400 leading-relaxed font-mono">
          <span className="text-slate-300 font-bold">ETHICAL DISCLOSURE:</span> CyberSec Nepal is an independent educational publication dedicated strictly to defensive security and digital literacy. We do not offer hacking-for-hire, offensive exploitation tools, or unauthorized network penetration. All research follows coordinated, responsible disclosure.
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 CyberSec Nepal. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
