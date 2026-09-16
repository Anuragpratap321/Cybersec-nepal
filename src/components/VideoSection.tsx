import React from 'react';
import { VideoItem } from '../types';
import { Play, Film, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface VideoSectionProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onWatchMore: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videos,
  onSelectVideo,
  onWatchMore,
}) => {
  return (
    <section id="videos" className="py-20 bg-[#080b11] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>Short-Form Visual Explanations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Cybersecurity, Explained.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Fast, high-retention video breakdowns debunking digital myths, exposing scam techniques, and explaining complex concepts in under five minutes.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => onSelectVideo(vid)}
              className="group rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-blue-950/20"
              id={`video-${vid.id}`}
            >
              {/* Video Thumbnail with Hover Zoom and Play Overlay */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-white font-mono text-[11px] font-semibold border border-white/10">
                  {vid.duration}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 backdrop-blur-md text-blue-300 font-mono text-[10px] font-semibold border border-blue-500/30">
                  {vid.category}
                </div>

                {/* Center Play Button with hover ripple */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/60 border border-blue-400/40">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug mb-2">
                    {vid.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {vid.summary}
                  </p>
                </div>

                {/* Stats & Watch trigger */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>{vid.views}</span>
                  </div>

                  <span className="text-blue-400 font-sans font-medium flex items-center gap-1 group-hover:text-blue-300">
                    Watch Video <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button
            onClick={onWatchMore}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-white font-medium text-sm transition-all shadow-md group"
            id="btn-watch-more-videos"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Watch More Videos →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
