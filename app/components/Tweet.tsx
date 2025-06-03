'use client';

import { Heart, MessageCircle, Repeat2, BarChart3, Bookmark, Share } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Post } from '../types';

interface TweetProps {
  post: Post;
  onPostClick?: () => void;
}

export default function Tweet({ post, onPostClick }: TweetProps) {
  const [animateLikes, setAnimateLikes] = useState(false);
  const [animateRetweets, setAnimateRetweets] = useState(false);

  useEffect(() => {
    const likeTimer = setInterval(() => {
      setAnimateLikes(true);
      setTimeout(() => setAnimateLikes(false), 300);
    }, 2000);

    const retweetTimer = setInterval(() => {
      setAnimateRetweets(true);
      setTimeout(() => setAnimateRetweets(false), 300);
    }, 3000);

    return () => {
      clearInterval(likeTimer);
      clearInterval(retweetTimer);
    };
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div 
      className="border-b border-gray-200 dark:border-[#2f3336] px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer"
      onClick={onPostClick}
    >
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold text-gray-900 dark:text-[#e7e9ea]">あなた</span>
            <span className="text-gray-500 dark:text-[#71767b]">@you</span>
            <span className="text-gray-500 dark:text-[#71767b]">·</span>
            <span className="text-gray-500 dark:text-[#71767b]">たった今</span>
          </div>
          <div className="mt-1 text-[15px] text-gray-900 dark:text-[#e7e9ea] whitespace-pre-wrap">
            {post.content}
          </div>
          <div className="flex items-center justify-between mt-3 max-w-md gap-1 sm:gap-2">
            <button className="flex items-center gap-1 text-gray-500 dark:text-[#71767b] hover:text-[#1d9bf0] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[13px]">{formatNumber(post.replies)}</span>
            </button>
            <button className={`flex items-center gap-1 text-gray-500 dark:text-[#71767b] hover:text-[#00ba7c] transition-colors group ${animateRetweets ? 'scale-110' : ''}`}>
              <div className="p-2 rounded-full group-hover:bg-[#00ba7c]/10">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="text-[13px]">{formatNumber(post.retweets)}</span>
            </button>
            <button className={`flex items-center gap-1 text-gray-500 dark:text-[#71767b] hover:text-[#f91880] transition-colors group ${animateLikes ? 'scale-110' : ''}`}>
              <div className="p-2 rounded-full group-hover:bg-[#f91880]/10">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[13px]">{formatNumber(post.likes)}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 dark:text-[#71767b] hover:text-[#1d9bf0] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-[13px]">{formatNumber(post.views)}</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="hidden sm:block p-2 rounded-full hover:bg-[#1d9bf0]/10 text-gray-500 dark:text-[#71767b] hover:text-[#1d9bf0] transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#1d9bf0]/10 text-gray-500 dark:text-[#71767b] hover:text-[#1d9bf0] transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}