import React, { useState } from 'react';
import { Youtube, Instagram, Share2, Facebook, Check, ArrowUpRight } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const socials = [
    {
      name: 'YouTube',
      handle: '@cybersecnepal',
      url: 'https://youtube.com',
      followers: '32.4K Subscribers',
      format: 'Deep Dives & Visual Explanations',
      color: 'hover:border-red-500/60 hover:bg-red-950/20 text-red-400',
      icon: <Youtube className="w-6 h-6 text-red-400" />,
    },
    {
      name: 'Instagram',
      handle: '@cybersecnepal',
      url: 'https://instagram.com',
      followers: '48.1K Followers',
      format: 'Carousels, Daily Tips & Scam Alerts',
      color: 'hover:border-pink-500/60 hover:bg-pink-950/20 text-pink-400',
      icon: <Instagram className="w-6 h-6 text-pink-400" />,
    },
    {
      name: 'TikTok',
      handle: '@cybersecnepal',
      url: 'https://tiktok.com',
      followers: '85.2K Followers',
      format: '60-Sec Quick Hacks & Myth Busters',
      color: 'hover:border-cyan-500/60 hover:bg-cyan-950/20 text-cyan-400',
      icon: (
        <svg className="w-6 h-6 text-cyan-400 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.09 1.05 1.98 2.07 2.37.76.29 1.6.27 2.36-.05.88-.35 1.57-1.08 1.83-2 .14-.49.18-1.01.18-1.52V.02h.73z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      handle: 'CyberSec Nepal',
      url: 'https://facebook.com',
      followers: '56.9K Community',
      format: 'Advisories, Community Q&A & News',
      color: 'hover:border-blue-500/60 hover:bg-blue-950/20 text-blue-400',
      icon: <Facebook className="w-6 h-6 text-blue-400" />,
    },
  ];

  const handleCopyOrVisit = (handle: string, url: string) => {
    navigator.clipboard?.writeText(handle);
    setCopiedHandle(handle);
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  return (
    <section id="social" className="py-20 bg-[#06080d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>COMMUNITY CHANNELS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Stay One Step Ahead.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Cyber threats evolve every day. Follow CyberSec Nepal for cybersecurity news, practical security tips, ethical hacking concepts, and technology explained simply.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((platform) => (
            <div
              key={platform.name}
              className={`rounded-xl p-6 bg-slate-900/60 border border-slate-800/90 transition-all duration-300 flex flex-col justify-between group shadow-lg ${platform.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {platform.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {platform.followers}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {platform.name}
                </h3>
                <div className="font-mono text-xs text-blue-400 mb-3">
                  {platform.handle}
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {platform.format}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Visit Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyOrVisit(platform.handle, platform.url)}
                  className="py-2 px-3 rounded bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                  title="Copy Handle"
                >
                  {copiedHandle === platform.handle ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    'Copy'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
