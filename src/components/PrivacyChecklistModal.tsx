import React, { useState } from 'react';
import { X, CheckSquare, Square, ShieldCheck, ShieldAlert, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'PASSWORDS' | '2FA' | 'DEVICE' | 'PRIVACY' | 'BACKUP';
  title: string;
  description: string;
  weight: number;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    category: 'PASSWORDS',
    title: 'Using a dedicated password manager (Bitwarden / 1Password / KeePass)',
    description: 'All online passwords are generated randomly with at least 16 characters and zero reuse.',
    weight: 15,
  },
  {
    id: 'c2',
    category: '2FA',
    title: 'App-based 2FA (TOTP) enabled on primary Google, Apple, and email accounts',
    description: 'Using Aegis, Google Authenticator, or Bitwarden instead of easily spoofed SMS codes.',
    weight: 15,
  },
  {
    id: 'c3',
    category: '2FA',
    title: 'App-based 2FA or passkeys enabled on social media & messaging (WhatsApp/Telegram)',
    description: 'WhatsApp 6-digit PIN set up; voicemail protected by carrier personal PIN.',
    weight: 10,
  },
  {
    id: 'c4',
    category: 'DEVICE',
    title: 'Automatic operating system and browser security updates turned ON',
    description: 'Patches known zero-day vulnerabilities in Chromium, Windows, iOS, and macOS.',
    weight: 15,
  },
  {
    id: 'c5',
    category: 'DEVICE',
    title: 'Device biometric lock or alphanumeric PIN (no simple 1234 / 0000)',
    description: 'Prevents physical unauthorized access if device is misplaced or snatched in public.',
    weight: 10,
  },
  {
    id: 'c6',
    category: 'PRIVACY',
    title: 'Ad-tracker blocking & Encrypted DNS (DoH) configured in browser',
    description: 'Using uBlock Origin and DNS-over-HTTPS (Cloudflare 1.1.1.1 or Quad9).',
    weight: 10,
  },
  {
    id: 'c7',
    category: 'PRIVACY',
    title: 'Audited smartphone app permissions (Microphone, Camera, Location, Contacts)',
    description: 'Restricted unused apps from tracking your physical location or background audio.',
    weight: 10,
  },
  {
    id: 'c8',
    category: 'BACKUP',
    title: 'Immutable offline physical backup of essential photos and personal documents',
    description: 'Stored on an unplugged external drive to protect against ransomware wipeouts.',
    weight: 15,
  },
];

interface PrivacyChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyChecklistModal: React.FC<PrivacyChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [checkedIds, setCheckedIds] = useState<string[]>(['c4', 'c5']);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const totalScore = CHECKLIST_ITEMS.reduce((sum, item) => {
    return checkedIds.includes(item.id) ? sum + item.weight : sum;
  }, 0);

  const getScoreProfile = () => {
    if (totalScore >= 90) {
      return {
        label: 'Impenetrable / Fortified',
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/60 border-emerald-500/50',
        desc: 'Outstanding digital posture! You are protected against virtually all automated attacks and opportunist cybercriminals.',
      };
    }
    if (totalScore >= 70) {
      return {
        label: 'Hardened Security Posture',
        color: 'text-blue-400',
        bg: 'bg-blue-950/60 border-blue-500/50',
        desc: 'Great baseline security! Complete the remaining recommendations to eliminate lingering attack surfaces.',
      };
    }
    if (totalScore >= 45) {
      return {
        label: 'Moderate Risk Exposure',
        color: 'text-amber-400',
        bg: 'bg-amber-950/60 border-amber-500/50',
        desc: 'Noticeable vulnerabilities exist. An attacker exploiting credential stuffing or SIM swapping could compromise critical accounts.',
      };
    }
    return {
      label: 'Critical Vulnerability Level',
      color: 'text-rose-400',
      bg: 'bg-rose-950/60 border-rose-500/50',
      desc: 'Urgent action recommended! Your credentials, accounts, and devices are substantially exposed to everyday scams.',
    };
  };

  const profile = getScoreProfile();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0a0e17] border border-slate-700/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Personal Digital Security Audit
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Interactive self-assessment for Nepali internet users
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Overview Banner */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              YOUR DEFENSE SCORE:
            </span>
            <div className="flex items-center gap-2">
              <span className={`font-mono text-2xl font-black ${profile.color}`}>
                {totalScore}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mb-3">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                totalScore >= 70 ? 'bg-emerald-500' : totalScore >= 45 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${totalScore}%` }}
            />
          </div>

          <div className={`p-3 rounded-lg border ${profile.bg} flex items-start gap-2.5`}>
            <Sparkles className={`w-4 h-4 mt-0.5 shrink-0 ${profile.color}`} />
            <div>
              <span className={`font-mono text-xs font-bold ${profile.color} uppercase block mb-0.5`}>
                {profile.label}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {profile.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="overflow-y-auto p-6 space-y-3">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 shrink-0 focus:outline-none"
                  aria-label={isChecked ? 'Uncheck' : 'Check'}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-600 hover:text-slate-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-display font-semibold text-sm text-white">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 shrink-0">
                      +{item.weight} pts
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <button
            onClick={() => setCheckedIds([])}
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Audit</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Save &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
