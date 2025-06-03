'use client';

import { ExternalLink, Youtube, BookOpen } from 'lucide-react';

export default function PromoSection() {
  return (
    <div className="p-4">
      <div className="bg-gray-900 rounded-2xl p-4">
        <h3 className="text-lg font-bold mb-4">開発者の情報</h3>
        
        <div className="space-y-3">
          <a
            href="https://youtube.com/@ShinCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Youtube className="w-5 h-5 text-red-500" />
            <div className="flex-1">
              <div className="font-medium">YouTube</div>
              <div className="text-sm text-gray-500">プログラミング学習動画</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </a>
          
          <a
            href="https://shincode-camp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <BookOpen className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <div className="font-medium">プログラミング講座</div>
              <div className="text-sm text-gray-500">実践的な開発スキルを学ぼう</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </a>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            このサービスが面白いと思ったら、ぜひシェアしてください！
          </p>
        </div>
      </div>
    </div>
  );
}