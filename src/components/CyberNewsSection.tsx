import React, { useState } from 'react';
import { NewsItem, Category } from '../types';
import { Newspaper, Radio, Clock, ExternalLink, ArrowRight, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';

interface CyberNewsSectionProps {
  newsItems: NewsItem[];
  onSelectNews: (item: NewsItem) => void;
}

export const CyberNewsSection: React.FC<CyberNewsSectionProps> = ({
  newsItems,
  onSelectNews,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'BREAKING' | 'CRITICAL'>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredNews = newsItems.filter((item) => {
    if (filter === 'BREAKING') return item.isBreaking;
    if (filter === 'CRITICAL') return item.impactLevel === 'CRITICAL';
    return true;
  });

  const getImpactBadge = (level: NewsItem['impactLevel']) => {
    switch (level) {
      case 'CRITICAL':
        return 'text-rose-400 bg-rose-950/60 border-rose-800/80';
      case 'HIGH':
        return 'text-amber-400 bg-amber-950/60 border-amber-800/80';
      case 'ADVISORY':
        return 'text-sky-400 bg-sky-950/60 border-sky-800/80';
      default:
        return 'text-slate-400 bg-slate-900 border-slate-800';
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="cyber-news" className="py-20 bg-[#06080d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span>LIVE ADVISORY DISPATCHES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Cyber News
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {(['ALL', 'BREAKING', 'CRITICAL'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  filter === f
                    ? 'bg-blue-600 text-white font-medium border border-blue-500'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / News-Grid Layout */}
        <div className="space-y-4">
          {filteredNews.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectNews(item)}
                className={`group rounded-xl p-5 sm:p-6 transition-all duration-200 border cursor-pointer ${
                  item.isBreaking
                    ? 'bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/40 border-rose-900/50 hover:border-rose-500/50'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
                }`}
                id={`news-item-${item.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  {/* Left Column: Badges & Headline */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      {item.isBreaking && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider text-rose-300 bg-rose-950 border border-rose-700 animate-pulse">
                          <Radio className="w-3 h-3 text-rose-400" />
                          BREAKING ADVISORY
                        </span>
                      )}

                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${getImpactBadge(
                          item.impactLevel
                        )}`}
                      >
                        {item.impactLevel}
                      </span>

                      <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
                        {item.category}
                      </span>

                      <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-2">
                      {item.headline}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-3 max-w-4xl">
                      {item.summary}
                    </p>

                    {/* Inline Story Expansion */}
                    {isExpanded && item.fullStory && (
                      <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-sm text-slate-300 bg-slate-950/60 p-4 rounded-lg">
                        {item.fullStory.map((para, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Source & Actions */}
                  <div className="shrink-0 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800/60 font-mono text-xs">
                    <div className="text-left lg:text-right">
                      <span className="text-[10px] text-slate-400 block uppercase">VERIFIED SOURCE</span>
                      <span className="text-slate-300 font-medium">{item.source}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleExpand(item.id, e)}
                        className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                        title={isExpanded ? 'Collapse' : 'Expand full story preview'}
                      >
                        <span>{isExpanded ? 'Less' : 'Preview'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => onSelectNews(item)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-blue-600/90 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-8 p-4 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0" />
            <span>CyberSec Nepal independently verifies advisories with national (NPI-CERT) and global incident reporting registries.</span>
          </div>
          <span className="hidden sm:inline-block text-blue-400">RSS / API Ready</span>
        </div>
      </div>
    </section>
  );
};
