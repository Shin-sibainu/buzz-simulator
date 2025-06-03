'use client';

import { Home, Bell, Search, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'home' | 'notifications' | 'profile';
  onTabChange: (tab: 'home' | 'notifications' | 'profile') => void;
  notificationCount: number;
}

export default function MobileBottomNav({ activeTab, onTabChange, notificationCount }: MobileBottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-[#2f3336] z-50">
      <div className="flex">
        <button
          onClick={() => onTabChange('home')}
          className={`flex-1 flex flex-col items-center py-3 ${
            activeTab === 'home' 
              ? 'text-black dark:text-white' 
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" strokeWidth={activeTab === 'home' ? 2 : 1.5} />
          <span className="text-xs mt-1">ホーム</span>
        </button>
        
        <button className="flex-1 flex flex-col items-center py-3 text-gray-500 dark:text-gray-400">
          <Search className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">検索</span>
        </button>
        
        <button
          onClick={() => onTabChange('notifications')}
          className={`flex-1 flex flex-col items-center py-3 relative ${
            activeTab === 'notifications' 
              ? 'text-black dark:text-white' 
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <div className="relative">
            <Bell className="w-6 h-6" strokeWidth={activeTab === 'notifications' ? 2 : 1.5} />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1d9bf0] text-xs text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            )}
          </div>
          <span className="text-xs mt-1">通知</span>
        </button>
        
        <button
          onClick={() => onTabChange('profile')}
          className={`flex-1 flex flex-col items-center py-3 ${
            activeTab === 'profile' 
              ? 'text-black dark:text-white' 
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <User className="w-6 h-6" strokeWidth={activeTab === 'profile' ? 2 : 1.5} />
          <span className="text-xs mt-1">プロフィール</span>
        </button>
      </div>
    </div>
  );
}