'use client';

import { Heart, Repeat2, MessageCircle, UserPlus, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Notification } from '../types';

interface NotificationItemProps {
  notification: Notification;
  index: number;
}

export default function NotificationItem({ notification, index }: NotificationItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case 'like':
        return <Heart className="w-5 h-5 text-[#f91880] fill-[#f91880]" />;
      case 'retweet':
        return <Repeat2 className="w-5 h-5 text-[#00ba7c]" />;
      case 'reply':
        return <MessageCircle className="w-5 h-5 text-[#1d9bf0]" />;
      case 'follow':
        return <UserPlus className="w-5 h-5 text-[#1d9bf0]" />;
      case 'quote':
        return <Quote className="w-5 h-5 text-[#1d9bf0]" />;
    }
  };

  const getActionText = () => {
    switch (notification.type) {
      case 'like':
        return 'さんがいいねしました';
      case 'retweet':
        return 'さんがリツイートしました';
      case 'reply':
        return 'さんが返信しました';
      case 'follow':
        return 'さんにフォローされました';
      case 'quote':
        return 'さんが引用しました';
    }
  };

  // New notifications (first 10) get blue background
  const isNew = index < 10;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index < 5 ? index * 0.02 : 0, // 最初の5件のみ軽いアニメーション
        duration: 0.1 
      }}
      className={`border-b border-gray-200 dark:border-[#2f3336] px-4 py-3 transition-colors cursor-pointer ${
        isNew 
          ? 'bg-blue-50 dark:bg-[#1d9bf0]/[0.06] hover:bg-blue-100/70 dark:hover:bg-[#1d9bf0]/[0.08]' 
          : 'hover:bg-gray-50 dark:hover:bg-white/[0.03]'
      }`}
    >
      <div className="flex gap-3">
        <div className="pt-1 flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex -space-x-2">
              <div className={`w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br ${notification.user.avatarColor || 'from-blue-400 to-purple-600'} flex items-center justify-center border-2 border-white dark:border-black z-10`}>
                <span className="text-white text-xs font-bold">{notification.user.name.charAt(0)}</span>
              </div>
              {Math.random() > 0.6 && (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center border-2 border-white dark:border-black">
                  <span className="text-white text-xs font-bold">
                    {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                  </span>
                </div>
              )}
              {Math.random() > 0.8 && (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center border-2 border-white dark:border-black">
                  <span className="text-white text-xs font-bold">
                    {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <span className="font-bold text-[15px] text-gray-900 dark:text-[#e7e9ea]">{notification.user.name}</span>
              {Math.random() > 0.7 && <span className="text-gray-900 dark:text-[#e7e9ea] text-[15px]"> と他{Math.floor(Math.random() * 20) + 1}人</span>}
              <span className="text-gray-500 dark:text-[#71767b] text-[15px] block">@{notification.user.username}</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-[#71767b] text-[15px]">
            {notification.user.name}{getActionText()}
          </p>
          {notification.type === 'reply' && notification.content && (
            <div className="mt-1">
              <p className="text-gray-500 dark:text-[#71767b] text-[15px] mb-1">返信先: <span className="text-[#1d9bf0]">@you</span></p>
              <p className="text-gray-900 dark:text-[#e7e9ea] text-[15px] font-medium">{notification.content}</p>
            </div>
          )}
          {notification.type === 'quote' && notification.content && (
            <div className="mt-2">
              <p className="text-gray-900 dark:text-[#e7e9ea] text-[15px] font-medium mb-2">{notification.content}</p>
              <div className="border border-gray-200 dark:border-[#2f3336] rounded-lg p-3 bg-gray-50 dark:bg-[#16181c]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span className="font-bold text-[13px] text-gray-900 dark:text-[#e7e9ea]">あなた</span>
                  <span className="text-gray-500 dark:text-[#71767b] text-[13px]">@you</span>
                </div>
                <p className="text-[13px] text-gray-600 dark:text-[#71767b]">{notification.originalPost || '元の投稿内容...'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}