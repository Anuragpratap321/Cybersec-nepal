import React from 'react';
import { ResourceToolkitItem } from '../types';
import { X, Download, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';

interface ResourceDetailModalProps {
  resource: ResourceToolkitItem | null;
  onClose: () => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = React.useState(false);

  if (!resource) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0a0e17] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-0.5">
              SECURITY ASSET // {resource.category}
            </span>
            <h3 className="font-display font-bold text-lg text-white">
              {resource.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            {resource.description}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase block mb-3">
              WHAT THIS BLUEPRINT COVERS:
            </span>
            <ul className="space-y-2.5">
              {resource.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">Community Resource License</span>
              This document is distributed freely under Creative Commons CC BY-SA 4.0 for educational and defensive purposes in Nepal. Feel free to share in workshops, schools, and offices.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0 font-mono text-xs">
          <span className="text-slate-400">Format: {resource.format}</span>
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition-colors"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Saved Offline!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Save Offline Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
