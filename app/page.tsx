'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import PostComposer from './components/PostComposer';
import Tweet from './components/Tweet';
import NotificationItem from './components/NotificationItem';
import ModeToggle from './components/ModeToggle';
import PromoSection from './components/PromoSection';
import { Post, Notification, NotificationMode } from './types';
import { generateNotification } from './utils/notifications';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [mode, setMode] = useState<NotificationMode>('buzz');
  const [isGenerating, setIsGenerating] = useState(false);
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

    // Start generating notifications
    let notificationCount = 0;
    const maxNotifications = mode === 'buzz' ? 50 : 30;
    
    intervalRef.current = setInterval(() => {
      setNotifications(prev => {
        const newNotification = generateNotification(mode);
        return [newNotification, ...prev];
      });

      // Update post stats
      setPosts(currentPosts => {
        const updatedPosts = [...currentPosts];
        if (updatedPosts[0]) {
          const notification = generateNotification(mode);
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
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Header notificationCount={notifications.length} />
      
      <main className="flex-1 max-w-2xl border-x border-gray-800">
        <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">ホーム</h2>
            <ModeToggle mode={mode} onChange={setMode} />
          </div>
        </div>
        
        <PostComposer onPost={handlePost} />
        
        {posts.length > 0 && (
          <div>
            <Tweet post={posts[0]} onPost={handlePost} />
            
            {notifications.length > 0 && (
              <div className="border-t border-gray-800">
                <div className="p-4 border-b border-gray-800 bg-gray-950">
                  <h3 className="font-bold">
                    {mode === 'buzz' ? 'バズっています！' : '炎上中...'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {notifications.length}件の通知
                  </p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {posts.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg mb-2">まだ投稿がありません</p>
            <p className="text-sm">何か投稿して、バズ体験を始めましょう！</p>
          </div>
        )}
      </main>
      
      <aside className="w-80 p-4">
        <PromoSection />
      </aside>
    </div>
  );
}