export interface Notification {
  id: string;
  type: 'like' | 'retweet' | 'reply' | 'quote' | 'follow';
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content?: string;
  timestamp: Date;
}

export interface Post {
  id: string;
  content: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
}

export type NotificationMode = 'buzz' | 'flame';