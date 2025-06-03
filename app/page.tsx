"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import MobileBottomNav from "./components/MobileBottomNav";
import MobileTopHeader from "./components/MobileTopHeader";
import PostComposer from "./components/PostComposer";
import Tweet from "./components/Tweet";
import NotificationItem from "./components/NotificationItem";
import ModeToggle from "./components/ModeToggle";
import ThemeToggle from "./components/ThemeToggle";
import PromoSection from "./components/PromoSection";
import { Post, Notification, NotificationMode } from "./types";
import { generateNotification } from "./utils/notifications";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [mode, setMode] = useState<NotificationMode>("buzz");
  const [, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "home" | "notifications" | "profile"
  >("home");
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
      views: Math.floor(Math.random() * 100) + 10,
    };

    setPosts([newPost, ...posts]);
    setNotifications([]);
    setIsGenerating(true);
    setShowPostNotifications(false); // Reset to show all notifications

    // Start generating notifications
    let notificationCount = 0;
    const maxNotifications = mode === "buzz" ? 100 : 50;

    intervalRef.current = setInterval(() => {
      setNotifications((prev) => {
        const newNotification = generateNotification(mode, content);
        return [newNotification, ...prev];
      });

      // Update post stats
      setPosts((currentPosts) => {
        const updatedPosts = [...currentPosts];
        if (updatedPosts[0]) {
          const notification = generateNotification(mode, content);
          if (notification.type === "like") {
            updatedPosts[0].likes += Math.floor(Math.random() * 5) + 1;
          } else if (notification.type === "retweet") {
            updatedPosts[0].retweets += Math.floor(Math.random() * 3) + 1;
          } else if (notification.type === "reply") {
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


  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
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
                {posts.map((post) => (
                  <Tweet
                    key={post.id}
                    post={post}
                    onPostClick={() => {
                      setShowPostNotifications(true);
                      setActiveTab("notifications");
                    }}
                  />
                ))}
              </div>
            )}

            {posts.length === 0 && (
              <div className="p-8 text-center text-gray-500 dark:text-[#71767b]">
                <p className="text-lg mb-2">まだ投稿がありません</p>
                <p className="text-sm">
                  何か投稿して、バズ体験を始めましょう！
                </p>
              </div>
            )}
          </>
        );

      case "notifications":
        return (
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
                  {showPostNotifications ? "ポストの通知" : "通知"}
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
        );

      case "profile":
        return (
          <>
            <div className="hidden lg:block sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-[#2f3336]">
              <div className="px-4 py-3">
                <h1 className="text-xl font-bold">プロフィール</h1>
              </div>
            </div>

            <div className="p-6">
              {/* Profile Header */}
              <div className="relative mb-6">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg"></div>
                <div className="absolute -bottom-6 left-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-4 border-white dark:border-black flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-[#e7e9ea] mb-1">
                  ShinCode
                </h2>
                <p className="text-gray-500 dark:text-[#71767b] mb-2">
                  @Shin_Engineer
                </p>
                <p className="text-gray-700 dark:text-[#e7e9ea] mb-4">
                  プログラミング系YouTuber 🚀
                  <br />
                  フルスタックエンジニア | React, Next.js, TypeScript
                  <br />
                  チャンネル登録5.5万人 |
                  無料でプログラミングを学べる動画を500本以上投稿中
                </p>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-[#71767b]">
                  <span>📍 日本</span>
                  <span>🔗 YouTube, X, Blog</span>
                  <span>📅 2019年からYouTube開始</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-[#16181c] rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 dark:text-[#e7e9ea]">
                    500+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-[#71767b]">
                    動画
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 dark:text-[#e7e9ea]">
                    5.5万
                  </div>
                  <div className="text-sm text-gray-500 dark:text-[#71767b]">
                    登録者
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 dark:text-[#e7e9ea]">
                    2019年
                  </div>
                  <div className="text-sm text-gray-500 dark:text-[#71767b]">
                    開始
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <a
                  href="https://www.youtube.com/channel/UCNTxclE0N4qsUuirssL_D8w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <div className="p-2 bg-red-500 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-[#e7e9ea]">
                      YouTube チャンネル
                    </div>
                    <div className="text-sm text-gray-600 dark:text-[#71767b]">
                      プログラミング学習動画が500本以上
                    </div>
                  </div>
                </a>

                <a
                  href="https://x.com/Shin_Engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/70 transition-colors"
                >
                  <div className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full">
                    <svg
                      className="w-5 h-5 text-white dark:text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-[#e7e9ea]">
                      X (Twitter)
                    </div>
                    <div className="text-sm text-gray-600 dark:text-[#71767b]">
                      最新技術やプログラミング情報を発信
                    </div>
                  </div>
                </a>

                <a
                  href="http://shincode.info/2021/12/31/udemy-discount-coupon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="p-2 bg-blue-500 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-[#e7e9ea]">
                      学習リソース
                    </div>
                    <div className="text-sm text-gray-600 dark:text-[#71767b]">
                      Udemyクーポン＆スクール情報
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
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
        {renderContent()}
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
                {mode === "buzz" ? "バズりました！" : "炎上体験完了！"}
              </h3>
              <p className="text-gray-600 dark:text-[#71767b] mb-6">
                {notifications.length}
                件の通知を受け取りました。この体験をシェアしませんか？
              </p>

              <div className="space-y-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${
                    mode === "buzz"
                      ? "バズシミュレーターでバズってみた！"
                      : "バズシミュレーターで炎上体験してみた！"
                  }%0A%0A${
                    notifications.length
                  }件の通知が来てすごかった😄%0A%0A&url=https://buzz-simulator.vercel.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black dark:bg-white text-white dark:text-black py-3 px-4 rounded-full font-bold hover:opacity-80 transition-opacity"
                >
                  Xでシェアする
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${
                        mode === "buzz"
                          ? "バズシミュレーターでバズってみた！"
                          : "バズシミュレーターで炎上体験してみた！"
                      } ${
                        notifications.length
                      }件の通知が来てすごかった😄 https://buzz-simulator.vercel.app`
                    );
                    alert("テキストをコピーしました！");
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
