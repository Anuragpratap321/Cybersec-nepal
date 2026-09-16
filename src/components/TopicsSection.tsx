import React, { useState } from 'react';
import { TOPIC_TRACKS } from '../data/cybersecData';
import { TopicTrack } from '../types';
import { ShieldCheck, Terminal, EyeOff, Cpu, AlertTriangle, Sparkles, ChevronRight, CheckCircle2, Layers } from 'lucide-react';

interface TopicsSectionProps {
  onSelectTopic: (topic: TopicTrack) => void;
}

export const TopicsSection: React.FC<TopicsSectionProps> = ({ onSelectTopic }) => {
  const [activeTopicId, setActiveTopicId] = useState<string>(TOPIC_TRACKS[0].id);

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Terminal':
        return <Terminal className={className} />;
      case 'EyeOff':
        return <EyeOff className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'AlertTriangle':
        return <AlertTriangle className={className} />;
      case 'Sparkles':
      default:
        return <Sparkles className={className} />;
    }
  };

  const activeTopic = TOPIC_TRACKS.find((t) => t.id === activeTopicId) || TOPIC_TRACKS[0];

  return (
    <section id="topics" className="py-20 bg-[#06080d] border-b border-slate-800/80 relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>LEARNING PATHWAYS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Learn Cybersecurity.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Structured, interactive topic tracks designed to take you from foundational digital literacy to practical defensive mastery.
          </p>
        </div>

        {/* Six Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TOPIC_TRACKS.map((track) => {
            const isSelected = activeTopicId === track.id;
            return (
              <div
                key={track.id}
                onClick={() => {
                  setActiveTopicId(track.id);
                  onSelectTopic(track);
                }}
                className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-2 border-blue-500 shadow-xl shadow-blue-950/40 -translate-y-1'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 hover:-translate-y-0.5'
                }`}
                id={`card-${track.id}`}
              >
                {/* Card Top Strip */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/60">
                      {track.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-blue-400 group-hover:text-cyan-300 transition-colors">
                      {renderIcon(track.icon, 'w-5 h-5')}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                    {track.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                {/* Card Bottom Strip */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-mono text-xs text-slate-400">{track.modulesCount} Modules</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-cyan-300 transition-colors">
                    Explore Track <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Topic Deep-Dive Preview */}
        {activeTopic && (
          <div className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-blue-500/30 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-blue-400 uppercase tracking-widest hidden sm:block">
              ACTIVE TRACK // {activeTopic.num}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-blue-400 font-bold">{activeTopic.num} — {activeTopic.tagline}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                    {activeTopic.level}
                  </span>
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-2">
                  Curriculum Track: {activeTopic.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {activeTopic.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeTopic.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <button
                  onClick={() => onSelectTopic(activeTopic)}
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Start Learning Track</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
