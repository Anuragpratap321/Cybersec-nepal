import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';
import { X, Clock, Calendar, Bookmark, Share2, Check, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const total = scrollHeight - clientHeight;
    if (total > 0) {
      setReadingProgress(Math.min(100, Math.max(0, (scrollTop / total) * 100)));
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0a0e17] border border-slate-700/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Reading Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-30">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">
              {article.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="px-2 py-1 rounded text-xs font-mono text-slate-300 hover:bg-slate-800 border border-slate-700"
              title="Toggle Font Size"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                  : 'text-slate-400 hover:text-white border-slate-700/60 hover:bg-slate-800'
              }`}
              title="Save to reading list"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-400 hover:text-white border border-slate-700/60 hover:bg-slate-800 transition-colors"
              title="Copy Article Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8"
        >
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {article.readingTime}
              </span>
              {article.source && (
                <>
                  <span>&bull;</span>
                  <span className="text-slate-300">Source: {article.source}</span>
                </>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 py-4 border-y border-slate-800">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <div className="text-sm font-semibold text-white">
                  {article.author.name}
                </div>
                <div className="text-xs text-slate-400">
                  {article.author.role} &bull; CyberSec Nepal
                </div>
              </div>
            </div>
          </div>

          {/* Article Hero Image */}
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-5 rounded-xl bg-blue-950/30 border border-blue-800/60">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>EXECUTIVE TAKEAWAYS:</span>
              </div>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="text-blue-400 font-bold shrink-0">&bull;</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content Paragraphs */}
          <div className={`space-y-5 text-slate-300 ${fontSize === 'large' ? 'text-lg sm:text-xl leading-relaxed' : 'text-base sm:text-lg leading-relaxed'}`}>
            {article.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>CyberSec Nepal Educational Editorial</span>
          <button
            onClick={onClose}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
