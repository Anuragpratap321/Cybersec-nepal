import React, { useState, useEffect } from 'react';
import { VideoItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, CheckCircle2, ShieldAlert } from 'lucide-react';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(24);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Video playback simulation timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= 250 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!video) return null;

  const formatSecs = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0a0e17] border border-slate-700/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs text-slate-300 font-semibold uppercase">
              CyberSec Nepal Video Hub &bull; {video.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulated Video Player Screen */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-40 filter brightness-75' : 'opacity-80'
            }`}
          />

          {/* Animated Waveform / Scanline effect during playback */}
          {isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="flex items-center gap-1.5 mb-3">
                {[40, 65, 30, 85, 95, 45, 60, 75, 50, 90, 35, 70].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-cyan-400/80 rounded-full animate-pulse"
                    style={{
                      height: `${h * 0.4}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.8s',
                    }}
                  />
                ))}
              </div>
              <div className="px-3 py-1 rounded bg-black/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs backdrop-blur-md">
                SIMULATED EXPLAINER PLAYBACK
              </div>
            </div>
          )}

          {/* Center Play/Pause toggle on screen click */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl border border-blue-400/50">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
            )}
          </button>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            {/* Progress Scrub Bar */}
            <div
              className="w-full h-1.5 bg-slate-700/80 rounded-full cursor-pointer overflow-hidden mb-2"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setCurrentTime(Math.floor(pos * 240));
              }}
            >
              <div
                className="h-full bg-blue-500 transition-all duration-150"
                style={{ width: `${(currentTime / 240) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span>
                  {formatSecs(currentTime)} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[11px] text-slate-300">
                  1080p HD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Information Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {video.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {video.summary}
            </p>
          </div>

          {/* Chapters */}
          {video.chapters && video.chapters.length > 0 && (
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block mb-3">
                CHAPTER TIMESTAMPS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {video.chapters.map((ch, idx) => (
                  <button
                    key={ch.time}
                    onClick={() => {
                      setActiveChapter(idx);
                      // convert time to seconds approx
                      const parts = ch.time.split(':').map(Number);
                      setCurrentTime(parts[0] * 60 + parts[1]);
                      setIsPlaying(true);
                    }}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors ${
                      activeChapter === idx
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-medium truncate mr-2">{ch.title}</span>
                    <span className="text-[11px] font-mono text-blue-400 shrink-0">{ch.time}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {video.keyTakeaways && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase block mb-2">
                CRITICAL LESSON TAKEAWAYS:
              </span>
              <ul className="space-y-1.5">
                {video.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
