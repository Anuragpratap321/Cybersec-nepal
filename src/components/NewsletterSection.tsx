import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>(['Personal Safety', 'Tech Trends']);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleInterest = (topic: string) => {
    if (interests.includes(topic)) {
      setInterests(interests.filter((i) => i !== topic));
    } else {
      setInterests([...interests, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-20 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-mono mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>THE WEEKLY BRIEFING</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Get Smarter About Security.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Weekly cybersecurity stories, useful security tips, and important digital safety updates—without the technical jargon.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  You’re Subscribed!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  We’ve sent a confirmation dispatch to <span className="text-blue-400 font-mono">{email}</span>. You can customize your preferences or unsubscribe anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic tags for tailored dispatches */}
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    'Personal Safety',
                    'Scam Alerts',
                    'Ethical Hacking',
                    'AI Security',
                    'Tech Trends',
                  ].map((topic) => {
                    const isSelected = interests.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => toggleInterest(topic)}
                        className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-blue-600/30 text-blue-300 border border-blue-500'
                            : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '} {topic}
                      </button>
                    );
                  })}
                </div>

                {/* Input & Subscribe CTA */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 font-mono shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/30 shrink-0 flex items-center justify-center gap-2 group"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-rose-400 font-mono">{error}</p>
                )}

                {/* Privacy Guarantee */}
                <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Zero Spam
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    No Data Monetization
                  </span>
                  <span>&bull;</span>
                  <span>Unsubscribe with 1-click</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
