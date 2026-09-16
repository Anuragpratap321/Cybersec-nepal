import React from 'react';
import { ShieldCheck, HeartHandshake, BookOpen, Users, Compass, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Narrative (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>WHO WE ARE &amp; OUR PURPOSE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Making Cybersecurity Understandable for Nepal.
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                CyberSec Nepal is a cybersecurity and technology media platform focused on making complex digital security concepts simple, practical, and accessible.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                As Nepal rapidly transitions toward ubiquitous mobile banking, QR payments, e-governance, and digital entrepreneurship, the cyber threat landscape has grown dramatically. Yet, the information available to everyday citizens has remained either buried in dense technical academic jargon or sensationally distorted by fear.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                We bridge that gap. We do not sell hacking services, promote illegal exploitation, or glorify sensationalized myths. Instead, we equip students, creators, developers, and families with the factual knowledge needed to protect their digital lives.
              </p>
            </div>

            {/* Mission Statement Callout */}
            <div className="p-6 rounded-xl bg-slate-900/90 border-l-4 border-blue-500 border-y border-r border-slate-800/80 mb-8">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                OUR CORE MISSION
              </span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                Educate. Create Awareness. Build a Safer Digital Nepal.
              </div>
            </div>
          </div>

          {/* Right Structured Values Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Strictly Ethical &amp; Defensive
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We adhere to strict responsible vulnerability disclosure and international white-hat standards. Offense is studied solely to construct resilient, impenetrable defenses.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Rooted in Nepal’s Realities
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                From telecom carrier voicemail vulnerabilities to regional mobile wallet phishing, our case studies and research reflect what Nepali internet users face every day.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Accessible to Everyone
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                You do not need a computer science degree to navigate our guides. We use plain language, interactive simulations, and actionable mental models.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-400">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Youth &amp; Student Mentorship
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fostering the next generation of Nepali security analysts, pen-testers, and engineers through open curricula and community learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
