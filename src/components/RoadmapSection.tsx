import React, { useState } from 'react';
import { ROADMAP_LEVELS } from '../data/cybersecData';
import { RoadmapLevel } from '../types';
import { Compass, ChevronDown, ChevronRight, Award, Shield, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RoadmapSectionProps {
  onStartJourney: (level: RoadmapLevel) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onStartJourney }) => {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);

  const activeLevel = ROADMAP_LEVELS[activeLevelIdx] || ROADMAP_LEVELS[0];

  return (
    <section id="roadmap" className="py-20 bg-[#06080d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>PROGRESSIVE SYLLABUS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Cybersecurity Learning Roadmap
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A battle-tested 4-stage progression engineered to transform curious learners into competent, ethically grounded cybersecurity practitioners.
          </p>
        </div>

        {/* Visual Level Navigation Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {ROADMAP_LEVELS.map((lvl, index) => {
            const isCurrent = activeLevelIdx === index;
            return (
              <div
                key={lvl.level}
                onClick={() => setActiveLevelIdx(index)}
                className={`relative rounded-xl p-5 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900/95 border-blue-500 shadow-xl shadow-blue-950/40 -translate-y-1'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
                id={`roadmap-step-${index}`}
              >
                {/* Connector Arrow for desktop */}
                {index < ROADMAP_LEVELS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">
                      {lvl.level}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {lvl.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {lvl.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {lvl.tagline}
                  </p>
                </div>

                {/* Topics Flow preview */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {lvl.topics.length} Core Modules
                  </span>
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-blue-400' : 'text-slate-400'}`}>
                    {isCurrent ? 'Active View' : 'Inspect'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Level Detailed Deep-Dive Container */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-blue-400 uppercase font-bold">
                  {activeLevel.level} &bull; {activeLevel.badge}
                </span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeLevel.title}
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Target Outcome: {activeLevel.learningOutcome}</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            {activeLevel.description}
          </p>

          {/* Topics Sequence Flow */}
          <div className="mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-4">
              STAGE TOPIC PROGRESSION (LEFT TO RIGHT):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeLevel.topics.map((t, idx) => (
                <div
                  key={t.name}
                  className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 relative group hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {idx < activeLevel.topics.length - 1 && (
                      <span className="hidden sm:inline-block text-slate-400 font-mono text-xs">→</span>
                    )}
                  </div>
                  <h5 className="font-display text-sm font-bold text-white mb-1">
                    {t.name}
                  </h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block mb-2">
                HANDS-ON RECOMMENDED LAB TOOLS:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeLevel.recommendedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-200 font-mono text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block mb-2">
                INDUSTRY CREDENTIALS ALIGNED:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeLevel.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/60 text-blue-300 font-mono text-xs font-semibold"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <button
            onClick={() => onStartJourney(activeLevel)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-base transition-all shadow-xl shadow-blue-600/30 group"
            id="btn-start-journey"
          >
            <span>Start Your Cybersecurity Journey</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
