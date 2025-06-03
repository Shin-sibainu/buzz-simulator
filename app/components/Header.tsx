'use client';

import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  notificationCount: number;
}

export default function Header({ notificationCount }: HeaderProps) {
  return (
    <div className="w-64 h-screen flex flex-col justify-between p-4">
      <div className="flex flex-col gap-2">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">X</h1>
        </div>
        
        <Link href="/" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-xl">ホーム</span>
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <Search className="w-6 h-6" />
          <span className="text-xl">話題を検索</span>
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="text-xl">通知</span>
          {notificationCount > 0 && (
            <span className="absolute left-7 top-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notificationCount > 99 ? '99+' : notificationCount}
            </span>
          )}
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <Mail className="w-6 h-6" />
          <span className="text-xl">メッセージ</span>
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <Bookmark className="w-6 h-6" />
          <span className="text-xl">ブックマーク</span>
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <User className="w-6 h-6" />
          <span className="text-xl">プロフィール</span>
        </Link>
        
        <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xl">もっと見る</span>
        </Link>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-8 font-bold text-lg mt-4 transition-colors">
          ポストする
        </button>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-full hover:bg-gray-900 transition-colors cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-gray-700" />
        <div className="flex-1">
          <div className="font-bold">あなた</div>
          <div className="text-gray-500 text-sm">@you</div>
        </div>
        <MoreHorizontal className="w-5 h-5" />
      </div>
    </div>
  );
}