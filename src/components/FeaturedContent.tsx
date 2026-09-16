import React, { useState } from 'react';
import { Article, Category } from '../types';
import { Clock, Calendar, ArrowRight, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

interface FeaturedContentProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const FeaturedContent: React.FC<FeaturedContentProps> = ({
  articles,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');

  const categories: (Category | 'ALL')[] = [
    'ALL',
    'CYBER NEWS',
    'PRIVACY',
    'ETHICAL HACKING',
    'AI SECURITY',
    'SCAMS',
    'TECH',
  ];

  const filteredArticles = selectedCategory === 'ALL'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  // Primary featured story (fallback to first item)
  const primaryArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0] || articles[0];
  // Secondary stories (all other items)
  const secondaryArticles = filteredArticles.filter((a) => a.id !== primaryArticle.id);

  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case 'CYBER NEWS':
        return 'text-sky-400 bg-sky-950/60 border-sky-800/80';
      case 'PRIVACY':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-800/80';
      case 'ETHICAL HACKING':
        return 'text-amber-400 bg-amber-950/60 border-amber-800/80';
      case 'AI SECURITY':
        return 'text-purple-400 bg-purple-950/60 border-purple-800/80';
      case 'SCAMS':
        return 'text-rose-400 bg-rose-950/60 border-rose-800/80';
      case 'TECH':
      default:
        return 'text-blue-400 bg-blue-950/60 border-blue-800/80';
    }
  };

  return (
    <section id="featured" className="py-20 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Spotlight</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              What’s Happening in Cybersecurity?
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Rigorous, jargon-free investigations into recent attack vectors, regional vulnerabilities, and modern defensive paradigms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-medium border border-blue-500 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Layout: Large Left + Smaller Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Primary Story (7 Cols on desktop) */}
          {primaryArticle && (
            <div className="lg:col-span-7 flex">
              <article
                onClick={() => onSelectArticle(primaryArticle)}
                className="w-full flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-950/20"
                id={`article-${primaryArticle.id}`}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={primaryArticle.thumbnail}
                    alt={primaryArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-semibold border backdrop-blur-md ${getCategoryColor(
                        primaryArticle.category
                      )}`}
                    >
                      {primaryArticle.category}
                    </span>
                  </div>

                  {/* Reading Time & Date Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {primaryArticle.readingTime}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {primaryArticle.date}
                      </span>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1 text-blue-400 font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                      Read Analysis <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3">
                      {primaryArticle.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                      {primaryArticle.excerpt}
                    </p>
                  </div>

                  {/* Author Strip & Read More indicator */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={primaryArticle.author.avatar}
                        alt={primaryArticle.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {primaryArticle.author.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {primaryArticle.author.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:text-blue-300">
                      <span>Full Story</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Supporting Stories (5 Cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondaryArticles.slice(0, 4).map((story) => (
              <article
                key={story.id}
                onClick={() => onSelectArticle(story)}
                className="group rounded-xl p-4 sm:p-5 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row gap-4 items-start shadow-sm"
                id={`article-card-${story.id}`}
              >
                {/* Small Thumbnail */}
                <div className="w-full sm:w-28 h-36 sm:h-24 rounded-lg overflow-hidden shrink-0 relative bg-slate-950">
                  <img
                    src={story.thumbnail}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="sm:hidden absolute top-2 left-2">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getCategoryColor(
                        story.category
                      )}`}
                    >
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <div className="hidden sm:flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getCategoryColor(
                          story.category
                        )}`}
                      >
                        {story.category}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">&bull;</span>
                      <span className="text-slate-400 text-xs font-mono">{story.readingTime}</span>
                    </div>

                    <h4 className="font-display text-base font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug mb-1">
                      {story.title}
                    </h4>

                    <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">{story.date}</span>
                    <span className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-300 font-medium">
                      Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
