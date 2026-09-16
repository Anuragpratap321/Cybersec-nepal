import React from 'react';
import { TOOLKIT_RESOURCES } from '../data/cybersecData';
import { ResourceToolkitItem } from '../types';
import { Download, ExternalLink, KeyRound, ShieldAlert, FileCheck, Wrench, ArrowRight, CheckSquare } from 'lucide-react';

interface ResourcesSectionProps {
  onOpenPrivacyChecklist: () => void;
  onSelectResource: (res: ResourceToolkitItem) => void;
  onNavigateToRoadmap: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onOpenPrivacyChecklist,
  onSelectResource,
  onNavigateToRoadmap,
}) => {
  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-blue-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="resources" className="py-20 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>DEFENSIVE ASSETS &amp; CHECKLISTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Your Security Toolkit.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Actionable blueprints, interactive checklists, and curated software tools vetted for non-technical users and IT professionals alike.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TOOLKIT_RESOURCES.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-6 sm:p-7 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              id={`resource-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getResourceIcon(item.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-blue-300">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.format}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details bullet points */}
                <div className="space-y-2 mb-6">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <span className="text-blue-400 shrink-0 mt-0.5">&gt;</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {item.id === 'res-privacy-checklist' ? (
                  <button
                    onClick={onOpenPrivacyChecklist}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckSquare className="w-3.5 h-3.5" />
                    <span>Launch Interactive Audit Tool</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectResource(item)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600"
                  >
                    <span>View &amp; Download Guide</span>
                    <Download className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Toolkit Banner */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-900/40 border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Looking for the Official Learning Roadmap?
              </h4>
              <p className="text-xs text-slate-400">
                Explore our 4-level progressive syllabus from Digital Safety to Offensive Security.
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateToRoadmap}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <span>Jump to Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
