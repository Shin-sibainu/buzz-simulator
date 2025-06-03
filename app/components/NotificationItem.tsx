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
        return <Heart className="w-5 h-5 text-red-500 fill-red-500" />;
      case 'retweet':
        return <Repeat2 className="w-5 h-5 text-green-400" />;
      case 'reply':
        return <MessageCircle className="w-5 h-5 text-blue-400" />;
      case 'follow':
        return <UserPlus className="w-5 h-5 text-blue-400" />;
      case 'quote':
        return <Quote className="w-5 h-5 text-blue-400" />;
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-800 p-4 hover:bg-gray-950 transition-colors"
    >
      <div className="flex gap-3">
        <div className="ml-auto mr-2">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <span className="font-bold text-sm">{notification.user.name}</span>
            <span className="text-gray-500 text-sm">@{notification.user.username}</span>
          </div>
          <p className="text-gray-400 text-sm">
            {notification.user.name}{getActionText()}
          </p>
          {notification.content && (
            <p className="text-gray-300 text-sm mt-2">{notification.content}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}