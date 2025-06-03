'use client';

import { useState } from 'react';
import { Image, Smile, Calendar, MapPin, ListOrdered, FileImage } from 'lucide-react';

interface PostComposerProps {
  onPost: (content: string) => void;
}

export default function PostComposer({ onPost }: PostComposerProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-[#2f3336] px-4 py-3">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="今何してる？"
            className="w-full bg-transparent text-xl placeholder-gray-400 dark:placeholder-gray-500 border-none outline-none resize-none min-h-[100px]"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-[#2f3336]">
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <FileImage className="w-5 h-5" />
              </button>
              <button className="hidden sm:block text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <ListOrdered className="w-5 h-5" />
              </button>
              <button className="text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="hidden sm:block text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="hidden sm:block text-[#1d9bf0] hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className={`px-4 py-1.5 rounded-full font-bold text-[15px] transition-colors ${
                content.trim()
                  ? 'bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white'
                  : 'bg-[#1d9bf0]/50 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
            >
              ポストする
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}