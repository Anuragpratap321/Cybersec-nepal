import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/cybersecData';
import { GlossaryTerm } from '../types';
import { BookOpen, Search, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GlossarySectionProps {
  onSelectTermModal?: (term: GlossaryTerm) => void;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({ onSelectTermModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTermId, setSelectedTermId] = useState<string>(GLOSSARY_TERMS[0].id);

  const filteredTerms = GLOSSARY_TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.simpleDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeTerm = GLOSSARY_TERMS.find((t) => t.id === selectedTermId) || GLOSSARY_TERMS[0];

  return (
    <section id="glossary" className="py-20 bg-[#06080d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE INDEX</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Cybersecurity, Without the Jargon.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Complex terms translated into plain, intuitive human language with real-world examples and immediate protective actions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms (e.g. Phishing, Zero Trust, 2FA, VPN)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Two-Column Interactive Layout: Term Chips on Left, Detailed Translation Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Term List Chips (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1">
            {filteredTerms.map((item) => {
              const isSelected = selectedTermId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTermId(item.id)}
                  className={`w-full text-left p-3.5 rounded-lg transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500 text-white shadow-md'
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isSelected ? 'bg-blue-400' : 'bg-slate-600 group-hover:bg-slate-400'
                      }`}
                    />
                    <div className="truncate">
                      <span className="font-display font-bold text-sm block truncate group-hover:text-blue-300">
                        {item.term}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-400 group-hover:text-blue-400 shrink-0">
                    {item.pronunciation || 'term'}
                  </span>
                </button>
              );
            })}

            {filteredTerms.length === 0 && (
              <div className="p-8 text-center bg-slate-900/40 rounded-lg border border-slate-800 text-slate-400 text-sm">
                No matching terms found. Try &ldquo;Phishing&rdquo;, &ldquo;VPN&rdquo;, or &ldquo;Malware&rdquo;.
              </div>
            )}
          </div>

          {/* Detailed Term Translation Card (7 Cols) */}
          {activeTerm && (
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                    {activeTerm.category}
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white">
                    {activeTerm.term}
                  </h3>
                </div>
                {activeTerm.pronunciation && (
                  <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-300">
                    /{activeTerm.pronunciation}/
                  </div>
                )}
              </div>

              {/* Simple Non-Jargon Definition */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase block mb-2">
                  PLAIN HUMAN EXPLANATION:
                </span>
                <p className="text-lg text-slate-100 font-medium leading-relaxed bg-slate-950/60 p-4 rounded-lg border border-blue-500/20 text-blue-100">
                  &ldquo;{activeTerm.simpleDefinition}&rdquo;
                </p>
              </div>

              {/* Real World Example in Nepal */}
              <div className="mb-6 p-4 rounded-lg bg-slate-950/40 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>IN REAL LIFE (NEPALI CONTEXT):</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeTerm.realWorldExample}
                </p>
              </div>

              {/* How to Protect */}
              <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>ACTIONABLE PROTECTION HABIT:</span>
                </div>
                <p className="text-sm text-emerald-200 leading-relaxed">
                  {activeTerm.howToProtect}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              if (onSelectTermModal && activeTerm) {
                onSelectTermModal(activeTerm);
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>Explore the Cyber Glossary (All Terms)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
