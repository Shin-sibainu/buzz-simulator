'use client';

import { NotificationMode } from '../types';

interface ModeToggleProps {
  mode: NotificationMode;
  onChange: (mode: NotificationMode) => void;
}

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#16181c] rounded-full p-1">
      <button
        onClick={() => onChange('buzz')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          mode === 'buzz'
            ? 'bg-[#1d9bf0] text-white'
            : 'text-gray-600 dark:text-[#71767b] hover:text-gray-900 dark:hover:text-[#e7e9ea]'
        }`}
      >
        バズ体験
      </button>
      <button
        onClick={() => onChange('flame')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          mode === 'flame'
            ? 'bg-[#f91880] text-white'
            : 'text-gray-600 dark:text-[#71767b] hover:text-gray-900 dark:hover:text-[#e7e9ea]'
        }`}
      >
        炎上体験
      </button>
    </div>
  );
}