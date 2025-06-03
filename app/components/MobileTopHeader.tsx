'use client';

import XLogo from './XLogo';
import ThemeToggle from './ThemeToggle';

interface MobileTopHeaderProps {
  activeTab: 'home' | 'notifications' | 'profile';
}

export default function MobileTopHeader({ activeTab }: MobileTopHeaderProps) {
  return (
    <div className="lg:hidden sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-[#2f3336] z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <XLogo className="w-7 h-7" />
          <h1 className="text-xl font-bold">
            {activeTab === 'home' ? 'ホーム' : activeTab === 'notifications' ? '通知' : 'プロフィール'}
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}