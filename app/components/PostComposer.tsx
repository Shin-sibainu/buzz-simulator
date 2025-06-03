'use client';

import { useState } from 'react';
import { Image, Smile, Calendar, MapPin, List } from 'lucide-react';

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
    <div className="border-b border-gray-800 p-4">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="いまどうしてる？"
            className="w-full bg-transparent text-xl placeholder-gray-500 border-none outline-none resize-none min-h-[100px]"
            rows={3}
          />
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <button className="text-blue-400 hover:bg-gray-900 p-2 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-blue-400 hover:bg-gray-900 p-2 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="text-blue-400 hover:bg-gray-900 p-2 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="text-blue-400 hover:bg-gray-900 p-2 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
              <button className="text-blue-400 hover:bg-gray-900 p-2 rounded-full transition-colors">
                <List className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className={`px-4 py-1.5 rounded-full font-bold transition-colors ${
                content.trim()
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
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