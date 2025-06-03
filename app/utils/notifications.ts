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
  '勉強になりました！',
  'なるほど、そういう視点があったんですね',
  '確かにその通りだと思います',
  '私も同じこと思ってました！',
  'これは広まるべき',
  '有益な情報ありがとうございます'
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
  '削除した方がいいですよ',
  'そんな考え方する人まだいるんですね',
  '時代遅れすぎて心配になります',
  'これが許されると思ってるんですか？',
  '謝罪した方がいいのでは',
  'スクショ撮っておきました'
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

export function generateNotification(mode: NotificationMode, postContent?: string): Notification {
  const isBuzz = mode === 'buzz';
  const usernames = isBuzz ? buzzUsernames : flameUsernames;
  const names = isBuzz ? buzzNames : flameNames;
  const replies = isBuzz ? buzzReplies : flameReplies;
  const quotes = isBuzz ? buzzQuotes : flameQuotes;

  const types: Notification['type'][] = ['like', 'retweet', 'reply', 'quote', 'follow'];
  const weights = isBuzz ? [35, 25, 25, 10, 5] : [10, 5, 45, 30, 10];
  
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
    // Generate contextual reply based on post content if available
    if (postContent && Math.random() > 0.3) {
      content = generateContextualReply(postContent, isBuzz);
    } else {
      content = replies[Math.floor(Math.random() * replies.length)];
    }
  } else if (selectedType === 'quote') {
    content = quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Generate random color for avatar
  const colors = [
    'from-blue-400 to-purple-600',
    'from-green-400 to-blue-500',
    'from-pink-400 to-red-500',
    'from-yellow-400 to-orange-500',
    'from-purple-400 to-pink-500',
    'from-indigo-400 to-blue-500',
    'from-teal-400 to-green-500',
    'from-red-400 to-pink-500'
  ];
  const avatarColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    type: selectedType,
    user: {
      name,
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      avatarColor
    },
    content,
    originalPost: postContent,
    timestamp: new Date()
  };
}

function generateContextualReply(postContent: string, isBuzz: boolean): string {
  const keywords = postContent.toLowerCase().split(' ');
  
  // Tech-related keywords
  if (keywords.some(k => ['ai', '人工知能', 'chatgpt', 'gpt'].includes(k))) {
    return isBuzz 
      ? `AIの可能性は無限大ですね！${postContent.substring(0, 20)}って部分が特に面白いです`
      : `AIに任せすぎるのは危険です。${postContent.substring(0, 15)}とか言ってますが...`;
  }
  
  if (keywords.some(k => ['next', 'react', 'typescript', 'javascript', 'web'].includes(k))) {
    return isBuzz
      ? `最新の技術スタックですね！${postContent.substring(0, 20)}の部分が勉強になりました`
      : `また新しいフレームワークですか…${postContent.substring(0, 15)}とか言ってますが`;
  }
  
  // Food-related keywords
  if (keywords.some(k => ['食べ', '美味し', 'ラーメン', '寿司', 'カレー', '飯', 'ランチ'].includes(k))) {
    return isBuzz
      ? `美味しそう！${postContent.substring(0, 20)}っていいですね、私も食べたい！`
      : `そんなもの食べて大丈夫ですか？${postContent.substring(0, 15)}とか...`;
  }
  
  // Gaming keywords
  if (keywords.some(k => ['ゲーム', 'game', 'プレイ', 'play', 'ps5', 'switch'].includes(k))) {
    return isBuzz
      ? `そのゲーム最高ですよね！${postContent.substring(0, 20)}の部分が特に好きです`
      : `ゲームばかりしてないで勉強したら？${postContent.substring(0, 15)}とか言ってる場合じゃない`;
  }
  
  // Default contextual replies
  const contextualBuzzReplies = [
    `「${postContent.substring(0, 30)}」の部分が特に共感できます！`,
    `${postContent.substring(0, 20)}ってところが最高ですね！`,
    `まさにそれです！${postContent.substring(0, 25)}は重要なポイントですね`,
    `${postContent.substring(0, 20)}についてもっと詳しく知りたいです！`,
    `「${postContent.substring(0, 25)}」なるほど、勉強になりました！`
  ];
  
  const contextualFlameReplies = [
    `「${postContent.substring(0, 30)}」って本気で言ってます？`,
    `${postContent.substring(0, 20)}とか言ってる時点で終わってる`,
    `「${postContent.substring(0, 25)}」の根拠を示してください`,
    `${postContent.substring(0, 20)}なんて言う人まだいるんですね…`,
    `「${postContent.substring(0, 25)}」これが問題発言でなくて何なんですか？`
  ];
  
  const contextualReplies = isBuzz ? contextualBuzzReplies : contextualFlameReplies;
  return contextualReplies[Math.floor(Math.random() * contextualReplies.length)];
}