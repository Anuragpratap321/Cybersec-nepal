import React, { useState } from 'react';
import { ATTACK_DEFEND_PAIRS } from '../data/cybersecData';
import { AttackDefendItem } from '../types';
import { Shield, ShieldAlert, ArrowRight, CheckCircle2, AlertOctagon, HelpCircle, Sparkles } from 'lucide-react';

export const AttackDefendSection: React.FC = () => {
  const [selectedPairId, setSelectedPairId] = useState<string>(ATTACK_DEFEND_PAIRS[0].id);

  const activePair = ATTACK_DEFEND_PAIRS.find((p) => p.id === selectedPairId) || ATTACK_DEFEND_PAIRS[0];

  return (
    <section id="attack-defend" className="py-20 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>HOW HACKERS THINK // DUAL-PERSPECTIVE EDUCATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Think Like an Attacker.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Defend Like a Professional.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            True defense requires understanding the mechanics of offense. See how adversaries exploit human and technical weaknesses—and the exact countermeasures that neutralize them.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* LEFT: ATTACK (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-rose-900/60 mb-4">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span className="font-mono text-xs tracking-widest text-rose-400 font-bold uppercase">
                  ATTACK // VECTORS &amp; TACTICS
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Select an exploit</span>
            </div>

            <div className="space-y-3">
              {ATTACK_DEFEND_PAIRS.map((pair) => {
                const isSelected = selectedPairId === pair.id;
                return (
                  <div
                    key={pair.id}
                    onClick={() => setSelectedPairId(pair.id)}
                    className={`rounded-xl p-4 transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-rose-950/30 border-rose-500/80 shadow-lg shadow-rose-950/30 -translate-x-0.5'
                        : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-rose-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wide">
                        {pair.attackCategory}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      )}
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {pair.attackTitle}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {pair.attackDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CENTER: Visual Connecting Axis (2 Cols) */}
          <div className="hidden lg:col-span-2 lg:flex flex-col items-center justify-center relative">
            {/* Animated Connector Line */}
            <div className="h-full w-px bg-gradient-to-b from-rose-500/30 via-blue-500/50 to-emerald-500/30 relative flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500/60 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
            </div>
            <div className="mt-3 font-mono text-[10px] text-slate-400 text-center tracking-wider">
              MAPS TO
            </div>
          </div>

          {/* RIGHT: DEFEND (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-900/60 mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs tracking-widest text-emerald-400 font-bold uppercase">
                  DEFEND // COUNTERMEASURES
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Zero Trust Shield</span>
            </div>

            <div className="space-y-3">
              {ATTACK_DEFEND_PAIRS.map((pair) => {
                const isSelected = selectedPairId === pair.id;
                return (
                  <div
                    key={pair.id}
                    onClick={() => setSelectedPairId(pair.id)}
                    className={`rounded-xl p-4 transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-950/30 border-emerald-500/80 shadow-lg shadow-emerald-950/30 translate-x-0.5'
                        : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-emerald-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wide">
                        {pair.defendCategory}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {pair.defendTitle}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {pair.defendDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Paired Analysis Card */}
        {activePair && (
          <div className="rounded-xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  TACTICAL CORRELATION STUDY
                </span>
                <h4 className="font-display text-2xl font-bold text-white">
                  {activePair.attackTitle}{' '}
                  <span className="text-slate-400 font-normal text-lg">vs</span>{' '}
                  <span className="text-emerald-400">{activePair.defendTitle}</span>
                </h4>
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-300">
                Level: Educational Defensive Analysis
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mb-6">
              {/* Attack Vector Detail */}
              <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-900/40">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold mb-2">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>HOW THE ATTACK UNFOLDS:</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePair.attackVectorDetail}
                </p>
              </div>

              {/* Defend Protocol Detail */}
              <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold mb-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>HOW THE DEFENSE NEUTRALIZES IT:</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePair.defendProtocolDetail}
                </p>
              </div>
            </div>

            {/* Real World Scenario in Nepal */}
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs text-blue-400 font-semibold uppercase block mb-0.5">
                  REAL-WORLD SCENARIO IN NEPAL:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activePair.realScenarioNepal}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
