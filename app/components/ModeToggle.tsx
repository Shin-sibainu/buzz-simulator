'use client';

import { NotificationMode } from '../types';

interface ModeToggleProps {
  mode: NotificationMode;
  onChange: (mode: NotificationMode) => void;
}

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-900 rounded-full p-1">
      <button
        onClick={() => onChange('buzz')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          mode === 'buzz'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        バズ体験
      </button>
      <button
        onClick={() => onChange('flame')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          mode === 'flame'
            ? 'bg-red-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        炎上体験
      </button>
    </div>
  );
}