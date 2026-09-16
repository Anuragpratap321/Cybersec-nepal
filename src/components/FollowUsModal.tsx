import React from 'react';
import { X, Youtube, Instagram, Facebook, ShieldCheck, Check, ExternalLink } from 'lucide-react';

interface FollowUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FollowUsModal: React.FC<FollowUsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const channels = [
    {
      name: 'YouTube',
      handle: '@cybersecnepal',
      url: 'https://youtube.com',
      stats: '32.4K Subscribers',
      desc: 'In-depth video tutorials, myth busters, and hands-on demonstrations.',
      color: 'text-red-400 bg-red-950/40 border-red-800/60',
      icon: <Youtube className="w-5 h-5 text-red-400" />,
    },
    {
      name: 'Instagram',
      handle: '@cybersecnepal',
      url: 'https://instagram.com',
      stats: '48.1K Followers',
      desc: 'Daily visual security cards, scam warnings, and urgent alerts.',
      color: 'text-pink-400 bg-pink-950/40 border-pink-800/60',
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
    },
    {
      name: 'TikTok',
      handle: '@cybersecnepal',
      url: 'https://tiktok.com',
      stats: '85.2K Followers',
      desc: 'Fast 60-second practical tips for students and digital creators.',
      color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/60',
      icon: (
        <svg className="w-5 h-5 text-cyan-400 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.09 1.05 1.98 2.07 2.37.76.29 1.6.27 2.36-.05.88-.35 1.57-1.08 1.83-2 .14-.49.18-1.01.18-1.52V.02h.73z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      handle: 'CyberSec Nepal',
      url: 'https://facebook.com',
      stats: '56.9K Community',
      desc: 'Community discussions, Q&A sessions, and breaking national news.',
      color: 'text-blue-400 bg-blue-950/40 border-blue-800/60',
      icon: <Facebook className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0a0e17] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h3 className="font-display font-bold text-lg text-white">
              Connect with CyberSec Nepal
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            Follow our verified media channels for weekly cybersecurity journalism, practical privacy tips, and defensive ethical hacking tutorials.
          </p>

          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shrink-0">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-white group-hover:text-blue-300">
                        {c.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {c.handle}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 block truncate">
                      {c.stats}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-blue-400 font-mono group-hover:translate-x-0.5 transition-transform shrink-0">
                  <span>Open</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/40 flex items-center gap-2.5 text-xs text-blue-300 font-mono">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Official handle across all platforms: @cybersecnepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
