'use client';

import { ExternalLink, Youtube, BookOpen, Sparkles, TrendingUp } from 'lucide-react';

export default function PromoSection() {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-4 border border-purple-100 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">このアプリを作った人</h3>
        </div>
        
        <div className="space-y-3">
          <a
            href="https://www.youtube.com/channel/UCNTxclE0N4qsUuirssL_D8w"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-white/[0.03] hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all hover:scale-[1.02] border border-transparent hover:border-purple-200 dark:hover:border-purple-900"
          >
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full">
              <Youtube className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                チャンネル登録5.5万人突破！
                <TrendingUp className="w-3 h-3 text-green-500" />
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">無料で学べるプログラミング動画が500本以上</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 dark:text-[#71767b]" />
          </a>
          
          <a
            href="https://x.com/Shin_Engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-white/[0.03] hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all hover:scale-[1.02] border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 dark:text-white">X (Twitter)</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">プログラミング情報や最新技術をポスト</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 dark:text-[#71767b]" />
          </a>
          
          <a
            href="http://shincode.info/2021/12/31/udemy-discount-coupon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-white/[0.03] hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all hover:scale-[1.02] border border-transparent hover:border-blue-200 dark:hover:border-blue-900"
          >
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <BookOpen className="w-5 h-5 text-[#1d9bf0]" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 dark:text-white">Udemyクーポン＆スクール情報</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">お得な割引クーポンとオンラインスクール案内</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 dark:text-[#71767b]" />
          </a>
        </div>
        
        <div className="mt-4 pt-4 border-t border-purple-200 dark:border-gray-600">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-3">
            <p className="text-xs text-yellow-800 dark:text-yellow-200 text-center">
              ⚠️ このアプリはシミュレーションです。投稿や通知などのデータは保存されません。
            </p>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 text-center mb-3">
            <span className="text-lg">💡</span> バズったら友達にもシェアしてね！
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://twitter.com/intent/tweet?text=バズシミュレーターでバズってみた！%0A%0A投稿がバズる体験ができる面白いサービス見つけたよ😄%0A%0A&url=https://buzz-simulator-bice.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-3 rounded-full text-sm font-bold hover:opacity-80 transition-opacity text-center"
            >
              Xでシェア
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('https://buzz-simulator-bice.vercel.app');
                alert('URLをコピーしました！');
              }}
              className="w-full sm:w-auto px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-center"
              title="URLをコピー"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span className="sm:hidden">URLをコピー</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}