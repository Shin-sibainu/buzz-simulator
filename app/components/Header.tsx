'use client';

import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import XLogo from './XLogo';

interface HeaderProps {
  notificationCount: number;
  activeTab: 'home' | 'notifications' | 'profile';
  onTabChange: (tab: 'home' | 'notifications' | 'profile') => void;
  className?: string;
}

export default function Header({ notificationCount, activeTab, onTabChange, className }: HeaderProps) {
  return (
    <header className={`w-[275px] min-h-screen flex flex-col justify-between px-3 ${className || ''}`}>
      <div className="flex flex-col">
        <div className="p-3">
          <Link href="/" className="inline-block rounded-full p-3 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <XLogo className="w-7 h-7" />
          </Link>
        </div>
        
        <nav className="mt-2">
          <button 
            onClick={() => onTabChange('home')}
            className={`flex items-center gap-5 px-3 py-3 rounded-full transition-colors group w-full ${
              activeTab === 'home' 
                ? 'font-bold' 
                : 'hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Home className="w-7 h-7" strokeWidth={activeTab === 'home' ? 2 : 1.5} />
            <span className="text-xl">ホーム</span>
          </button>
        
          <Link href="#" className="flex items-center gap-5 px-3 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group">
            <Search className="w-7 h-7" strokeWidth={1.5} />
            <span className="text-xl">話題を検索</span>
          </Link>
        
          <button 
            onClick={() => onTabChange('notifications')}
            className={`flex items-center gap-5 px-3 py-3 rounded-full transition-colors group relative w-full ${
              activeTab === 'notifications' 
                ? 'font-bold' 
                : 'hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <div className="relative">
              <Bell className="w-7 h-7" strokeWidth={activeTab === 'notifications' ? 2 : 1.5} />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1d9bf0] text-xs text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {notificationCount > 99 ? '99+' : notificationCount}
                </span>
              )}
            </div>
            <span className="text-xl">通知</span>
          </button>
        
          <Link href="#" className="flex items-center gap-5 px-3 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group">
            <Mail className="w-7 h-7" strokeWidth={1.5} />
            <span className="text-xl">メッセージ</span>
          </Link>
          
          <Link href="#" className="flex items-center gap-5 px-3 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group">
            <Bookmark className="w-7 h-7" strokeWidth={1.5} />
            <span className="text-xl">ブックマーク</span>
          </Link>
          
          <button 
            onClick={() => onTabChange('profile')}
            className={`flex items-center gap-5 px-3 py-3 rounded-full transition-colors group w-full ${
              activeTab === 'profile' 
                ? 'font-bold' 
                : 'hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <User className="w-7 h-7" strokeWidth={activeTab === 'profile' ? 2 : 1.5} />
            <span className="text-xl">プロフィール</span>
          </button>
          
          <Link href="#" className="flex items-center gap-5 px-3 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group">
            <MoreHorizontal className="w-7 h-7" strokeWidth={1.5} />
            <span className="text-xl">もっと見る</span>
          </Link>
        </nav>
        
        <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full py-3 mt-6 mx-3 font-bold text-[17px] transition-colors">
          ポストする
        </button>
      </div>
      
      <div className="mb-3">
        <button className="flex items-center gap-3 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer w-full">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0" />
          <div className="flex-1 text-left">
            <div className="font-bold text-[15px]">あなた</div>
            <div className="text-gray-600 dark:text-gray-500 text-[15px]">@you</div>
          </div>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}