'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';
import MobileTopHeader from './components/MobileTopHeader';
import PostComposer from './components/PostComposer';
import Tweet from './components/Tweet';
import NotificationItem from './components/NotificationItem';
import ModeToggle from './components/ModeToggle';
import ThemeToggle from './components/ThemeToggle';
import PromoSection from './components/PromoSection';
import { Post, Notification, NotificationMode } from './types';
import { generateNotification } from './utils/notifications';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [mode, setMode] = useState<NotificationMode>('buzz');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'notifications'>('home');
  const [showPostNotifications, setShowPostNotifications] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePost = (content: string) => {
    const newPost: Post = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      timestamp: new Date(),
      likes: 0,
      retweets: 0,
      replies: 0,
      views: Math.floor(Math.random() * 100) + 10
    };

    setPosts([newPost, ...posts]);
    setNotifications([]);
    setIsGenerating(true);
    setShowPostNotifications(false); // Reset to show all notifications

    // Start generating notifications
    let notificationCount = 0;
    const maxNotifications = mode === 'buzz' ? 100 : 50;
    
    intervalRef.current = setInterval(() => {
      setNotifications(prev => {
        const newNotification = generateNotification(mode, content);
        return [newNotification, ...prev];
      });

      // Update post stats
      setPosts(currentPosts => {
        const updatedPosts = [...currentPosts];
        if (updatedPosts[0]) {
          const notification = generateNotification(mode, content);
          if (notification.type === 'like') {
            updatedPosts[0].likes += Math.floor(Math.random() * 5) + 1;
          } else if (notification.type === 'retweet') {
            updatedPosts[0].retweets += Math.floor(Math.random() * 3) + 1;
          } else if (notification.type === 'reply') {
            updatedPosts[0].replies += 1;
          }
          updatedPosts[0].views += Math.floor(Math.random() * 100) + 50;
        }
        return updatedPosts;
      });

      notificationCount++;
      if (notificationCount >= maxNotifications) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsGenerating(false);
        // Show share modal when notifications are complete
        setTimeout(() => {
          setShowShareModal(true);
        }, 1000);
      }
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePostClick = () => {
    setShowPostNotifications(true);
    setActiveTab('notifications');
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white lg:justify-center">
      <Header 
        notificationCount={notifications.length} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="hidden lg:flex"
      />
      
      <main className="flex-1 w-full lg:max-w-[600px] border-x-0 lg:border-x border-gray-200 dark:border-[#2f3336] pb-16 lg:pb-0">
        <MobileTopHeader activeTab={activeTab} />
        {activeTab === 'home' ? (
          <>
            <div className="hidden lg:block sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-[#2f3336]">
              <div className="flex items-center justify-between px-4 py-3">
                <h1 className="text-xl font-bold">ホーム</h1>
                <div className="flex items-center gap-2">
                  <ModeToggle mode={mode} onChange={setMode} />
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div className="lg:hidden px-4 py-3 border-b border-gray-200 dark:border-[#2f3336]">
              <ModeToggle mode={mode} onChange={setMode} />
            </div>
            
            <PostComposer onPost={handlePost} />
            
            {posts.length > 0 && (
              <div>
                {posts.map((post, index) => (
                  <Tweet 
                    key={post.id} 
                    post={post} 
                    onPost={handlePost} 
                    onPostClick={() => {
                      setShowPostNotifications(true);
                      setActiveTab('notifications');
                    }} 
                  />
                ))}
              </div>
            )}
            
            {posts.length === 0 && (
              <div className="p-8 text-center text-gray-500 dark:text-[#71767b]">
                <p className="text-lg mb-2">まだ投稿がありません</p>
                <p className="text-sm">何か投稿して、バズ体験を始めましょう！</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="hidden lg:block sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-[#2f3336]">
              <div className="px-4 py-3 flex items-center gap-3">
                {showPostNotifications && (
                  <button
                    onClick={() => setShowPostNotifications(false)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    ←
                  </button>
                )}
                <h1 className="text-xl font-bold">
                  {showPostNotifications ? 'ポストの通知' : '通知'}
                </h1>
              </div>
            </div>
            
            {notifications.length > 0 ? (
              <div>
                {notifications.map((notification, index) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 dark:text-[#71767b]">
                <p className="text-lg mb-2">まだ通知はありません</p>
                <p className="text-sm">投稿してバズを体験してみましょう！</p>
              </div>
            )}
          </>
        )}
      </main>
      
      <aside className="hidden xl:block w-[350px] px-8 py-4">
        <PromoSection />
      </aside>
      
      <MobileBottomNav 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        notificationCount={notifications.length}
      />
      
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#16181c] rounded-2xl p-6 max-w-md w-full border border-gray-200 dark:border-[#2f3336]">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-[#e7e9ea] mb-2">
                {mode === 'buzz' ? 'バズりました！' : '炎上体験完了！'}
              </h3>
              <p className="text-gray-600 dark:text-[#71767b] mb-6">
                {notifications.length}件の通知を受け取りました。この体験をシェアしませんか？
              </p>
              
              <div className="space-y-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${mode === 'buzz' ? 'バズシミュレーターでバズってみた！' : 'バズシミュレーターで炎上体験してみた！'}%0A%0A${notifications.length}件の通知が来てすごかった😄%0A%0A&url=https://buzz-simulator.vercel.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black dark:bg-white text-white dark:text-black py-3 px-4 rounded-full font-bold hover:opacity-80 transition-opacity"
                >
                  Xでシェアする
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${mode === 'buzz' ? 'バズシミュレーターでバズってみた！' : 'バズシミュレーターで炎上体験してみた！'} ${notifications.length}件の通知が来てすごかった😄 https://buzz-simulator.vercel.app`);
                    alert('テキストをコピーしました！');
                  }}
                  className="block w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-[#e7e9ea] py-3 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  テキストをコピー
                </button>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="block w-full text-gray-500 dark:text-[#71767b] py-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}