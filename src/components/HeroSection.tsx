import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Play, ShieldAlert, Lock, CheckCircle2, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onExploreCybersecurity: () => void;
  onWatchVideos: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCybersecurity,
  onWatchVideos,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080b11] border-b border-slate-800/80"
    >
      {/* Background Animated Canvas */}
      <HeroCanvas />

      {/* Cyber Grid & Subtle Radial Ambient Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Subtle vignette border to frame editorial focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-[#080b11]/80 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Element */}
        <div
          id="hero-status-pill"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono tracking-wider shadow-lg shadow-black/40 mb-8 backdrop-blur-md hover:border-blue-500/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-white tracking-widest">
            CYBERSEC NEPAL
          </span>
          <span className="text-slate-500">//</span>
          <span className="text-blue-400 font-bold">ONLINE</span>
        </div>

        {/* Massive Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
          The Internet Is Changing.{' '}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
            Are You Ready?
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
          CyberSec Nepal makes cybersecurity, ethical hacking, technology, and digital safety easier to understand—one story at a time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreCybersecurity}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-base tracking-wide transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 group focus:outline-none"
            id="cta-explore"
          >
            <span>Explore Cybersecurity</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onWatchVideos}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-slate-900/90 hover:bg-slate-800 active:bg-slate-950 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-base tracking-wide transition-all shadow-md group focus:outline-none backdrop-blur-sm"
            id="cta-watch-videos"
          >
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Play className="w-3 h-3 text-blue-400 fill-blue-400 ml-0.5" />
            </div>
            <span>Watch Latest Videos</span>
          </button>
        </div>

        {/* Technical Credibility Strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl text-left font-mono">
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
              <span>THREAT POSTURE</span>
            </div>
            <div className="text-sm font-semibold text-white">Guarded / Normal</div>
            <div className="text-[10px] text-slate-400 mt-0.5">NPI-CERT Sync Active</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>COMMUNITY REACH</span>
            </div>
            <div className="text-sm font-semibold text-white">45,000+ Readers</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Students &amp; Devs in Nepal</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>ETHICAL CODE</span>
            </div>
            <div className="text-sm font-semibold text-white">Defensive &bull; Lawful</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Strict Responsible Disclosure</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>ACCESS</span>
            </div>
            <div className="text-sm font-semibold text-white">100% Free &amp; Open</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Public Security Literacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};
