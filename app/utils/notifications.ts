import { Notification, NotificationMode } from '../types';

const buzzUsernames = [
  'tech_guru', 'dev_master', 'code_ninja', 'web_wizard', 'startup_founder',
  'product_designer', 'growth_hacker', 'ai_enthusiast', 'crypto_expert', 'indie_maker',
  'saas_builder', 'nocode_pro', 'ux_designer', 'fullstack_dev', 'mobile_dev',
  'cloud_architect', 'data_scientist', 'ml_engineer', 'devops_pro', 'security_expert'
];

const flameUsernames = [
  'angry_user123', 'keyboard_warrior', 'troll_master', 'debate_lord', 'truth_speaker',
  'critic_pro', 'fact_checker', 'social_justice', 'political_pundit', 'news_junkie',
  'controversial_take', 'hot_takes_only', 'unpopular_opinion', 'devil_advocate', 'rage_poster'
];

const buzzNames = [
  '田中太郎', '山田花子', '佐藤健', '鈴木美咲', '高橋翔',
  'プロダクトマネージャー', 'エンジニア', 'デザイナー', 'マーケター', '起業家',
  'インフルエンサー', 'テック系YouTuber', 'ブロガー', 'コンサルタント', '投資家'
];

const flameNames = [
  '怒りの民', '批判家', '正論マン', '議論好き', '炎上評論家',
  '意識高い系', 'アンチ', '過激派', '正義の味方', '物申す系'
];

const buzzReplies = [
  'これは革新的ですね！',
  '素晴らしいアイデアです！',
  'めちゃくちゃ参考になります',
  '天才すぎる...',
  'これは流行りそう',
  '今年一番の発見かも',
  'もっと早く知りたかった',
  'これは保存しておこう',
  'シェアさせていただきます！',
  '勉強になりました！'
];

const flameReplies = [
  'それは違うと思います',
  '根拠はありますか？',
  'それってあなたの感想ですよね？',
  '偏見に満ちていますね',
  '無知すぎて笑える',
  'もっと勉強してから発言してください',
  'これは炎上案件では？',
  '問題発言ですね',
  '通報しました',
  '削除した方がいいですよ'
];

const buzzQuotes = [
  'これは必見です！みんなに知ってほしい',
  'これこそが真のイノベーション',
  '今日一番の学びでした',
  'フォロワーの皆さんにもシェアします',
  'これは永久保存版'
];

const flameQuotes = [
  'これが今のSNSの問題点を表している',
  'こういう発言が社会を悪くする',
  '皆さん、これどう思いますか？',
  'これは看過できない発言',
  'また炎上しそうな発言が...'
];

export function generateNotification(mode: NotificationMode): Notification {
  const isBuzz = mode === 'buzz';
  const usernames = isBuzz ? buzzUsernames : flameUsernames;
  const names = isBuzz ? buzzNames : flameNames;
  const replies = isBuzz ? buzzReplies : flameReplies;
  const quotes = isBuzz ? buzzQuotes : flameQuotes;

  const types: Notification['type'][] = ['like', 'retweet', 'reply', 'quote', 'follow'];
  const weights = isBuzz ? [40, 30, 15, 10, 5] : [10, 5, 40, 35, 10];
  
  const random = Math.random() * 100;
  let sum = 0;
  let selectedType: Notification['type'] = 'like';
  
  for (let i = 0; i < types.length; i++) {
    sum += weights[i];
    if (random < sum) {
      selectedType = types[i];
      break;
    }
  }

  const username = usernames[Math.floor(Math.random() * usernames.length)];
  const name = names[Math.floor(Math.random() * names.length)];

  let content: string | undefined;
  if (selectedType === 'reply') {
    content = replies[Math.floor(Math.random() * replies.length)];
  } else if (selectedType === 'quote') {
    content = quotes[Math.floor(Math.random() * quotes.length)];
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    type: selectedType,
    user: {
      name,
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
    },
    content,
    timestamp: new Date()
  };
}