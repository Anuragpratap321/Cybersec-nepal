import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Film, Newspaper, FileText, ArrowRight } from 'lucide-react';
import { Article, VideoItem, NewsItem, GlossaryTerm } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  videos: VideoItem[];
  news: NewsItem[];
  glossary: GlossaryTerm[];
  onSelectArticle: (article: Article) => void;
  onSelectVideo: (video: VideoItem) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  videos,
  news,
  glossary,
  onSelectArticle,
  onSelectVideo,
  onSelectNews,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedArticles = trimmed
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.excerpt.toLowerCase().includes(trimmed) ||
          a.tags.some((t) => t.toLowerCase().includes(trimmed))
      )
    : articles.slice(0, 2);

  const matchedVideos = trimmed
    ? videos.filter(
        (v) =>
          v.title.toLowerCase().includes(trimmed) ||
          v.summary.toLowerCase().includes(trimmed)
      )
    : videos.slice(0, 2);

  const matchedNews = trimmed
    ? news.filter(
        (n) =>
          n.headline.toLowerCase().includes(trimmed) ||
          n.summary.toLowerCase().includes(trimmed)
      )
    : news.slice(0, 2);

  const matchedGlossary = trimmed
    ? glossary.filter(
        (g) =>
          g.term.toLowerCase().includes(trimmed) ||
          g.simpleDefinition.toLowerCase().includes(trimmed)
      )
    : glossary.slice(0, 3);

  const totalResults =
    matchedArticles.length +
    matchedVideos.length +
    matchedNews.length +
    matchedGlossary.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-[#0a0e17] border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90 gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cybersecurity guides, videos, news, terms..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-6">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No results found for &ldquo;{query}&rdquo;. Try searching for &ldquo;phishing&rdquo;, &ldquo;passwords&rdquo;, &ldquo;SIM swap&rdquo;, or &ldquo;VPN&rdquo;.
            </div>
          ) : (
            <>
              {/* Articles Group */}
              {matchedArticles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase font-semibold mb-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Articles &amp; Editorial</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedArticles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onClose();
                          onSelectArticle(art);
                        }}
                        className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div className="min-w-0 pr-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block mb-0.5">
                            {art.category}
                          </span>
                          <h5 className="text-sm font-semibold text-white group-hover:text-blue-300 truncate">
                            {art.title}
                          </h5>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos Group */}
              {matchedVideos.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-semibold mb-2">
                    <Film className="w-3.5 h-3.5" />
                    <span>Video Explanations</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedVideos.map((vid) => (
                      <div
                        key={vid.id}
                        onClick={() => {
                          onClose();
                          onSelectVideo(vid);
                        }}
                        className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div className="min-w-0 pr-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block mb-0.5">
                            {vid.duration} &bull; {vid.category}
                          </span>
                          <h5 className="text-sm font-semibold text-white group-hover:text-cyan-300 truncate">
                            {vid.title}
                          </h5>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Group */}
              {matchedNews.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-semibold mb-2">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>News &amp; Advisories</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedNews.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => {
                          onClose();
                          onSelectNews(n);
                        }}
                        className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div className="min-w-0 pr-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block mb-0.5">
                            {n.source}
                          </span>
                          <h5 className="text-sm font-semibold text-white group-hover:text-amber-300 truncate">
                            {n.headline}
                          </h5>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary Group */}
              {matchedGlossary.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-semibold mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Glossary Definitions</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedGlossary.map((g) => (
                      <div
                        key={g.id}
                        className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-bold text-sm text-white">
                            {g.term}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {g.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-2">
                          {g.simpleDefinition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Press ESC to close</span>
          <span className="text-blue-400">CyberSec Nepal Search Index</span>
        </div>
      </div>
    </div>
  );
};
