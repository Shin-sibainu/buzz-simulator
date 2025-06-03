'use client';

import { Heart, MessageCircle, Repeat2, BarChart3, Bookmark, Share } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Post } from '../types';

interface TweetProps {
  post: Post;
  onPost: () => void;
}

export default function Tweet({ post, onPost }: TweetProps) {
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
    <div className="border-b border-gray-800 p-4 hover:bg-gray-950 transition-colors">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold">あなた</span>
            <span className="text-gray-500">@you</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">たった今</span>
          </div>
          <div className="mt-1 text-[15px] whitespace-pre-wrap">
            {post.content}
          </div>
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm">{formatNumber(post.replies)}</span>
            </button>
            <button className={`flex items-center gap-1 text-gray-500 hover:text-green-400 transition-colors group ${animateRetweets ? 'scale-110' : ''}`}>
              <div className="p-2 rounded-full group-hover:bg-green-400/10">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="text-sm">{formatNumber(post.retweets)}</span>
            </button>
            <button className={`flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors group ${animateLikes ? 'scale-110' : ''}`}>
              <div className="p-2 rounded-full group-hover:bg-red-500/10">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-sm">{formatNumber(post.likes)}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-400/10">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-sm">{formatNumber(post.views)}</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-full hover:bg-gray-800 text-gray-500 hover:text-blue-400 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 text-gray-500 hover:text-blue-400 transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}