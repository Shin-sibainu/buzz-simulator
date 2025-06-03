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
  '有益な情報ありがとうございます',
  'まさにこれが知りたかった！',
  'すごく分かりやすい説明ですね',
  'めちゃくちゃ同感です',
  'これ実際にやってみます！',
  'なんで今まで気づかなかったんだろう',
  '目から鱗でした',
  'フォローさせていただきました',
  'ブックマーク確定です',
  'これは必見ですね',
  '完全に同意見です',
  'とても興味深い内容ですね',
  'こういう情報を待っていました',
  '本当にその通りだと思います',
  'すばらしい考察ですね',
  'めちゃくちゃ深い内容',
  '今度試してみたいと思います',
  'とても勉強になる投稿でした',
  'ありがたい情報です',
  'これは知らなかった！',
  'すごく納得できました',
  'うおおおお神すぎる！！！',
  'まじで世界変わった...',
  'ガチで人生変わりそう',
  'これやばくない？？？',
  'え、待って天才すぎん？',
  'これ見た瞬間鳥肌立った',
  'マジで尊敬します...',
  'これは永久保存版ですわ',
  'スクショしてLINEで拡散します',
  'この人の脳みそどうなってるの',
  'もはや宗教レベル',
  'これ知らないと人生損してる',
  'ガチで感動して泣いた',
  'このツイートに救われた',
  'まじで神様ですか？',
  'これ100万回いいねしたい',
  'もう何も言えねぇ...',
  'この人についていきます',
  'フォロワーみんなに見せたい',
  '会社のグループチャットに貼りました',
  'これ見て人生の目標決まった',
  'バズるの当然すぎる内容',
  'もっと早くこの人知りたかった',
  'これは教科書に載せるべき',
  'このアカウントは国宝',
  'リツイートが止まらない',
  'いいねの指が止まらない'
];

const flameReplies = [
  'それってあなたの感想ですよね？',
  'ソースは？',
  'エビデンスある？',
  'これはちょっと...',
  'いや、流石にそれは',
  'え、マジで言ってる？',
  'ちょっと待って、これヤバくない？',
  '正気？？？',
  'うーん、これは微妙だなあ',
  'なんか違和感すごい',
  'これは草',
  'いやいやいやwww',
  'ツッコミどころ満載で草',
  'これはさすがに笑う',
  'お、おう...',
  'やべえ人見つけた',
  'これが令和の価値観？',
  '時代についていけてなくて草',
  '昭和すぎん？',
  'おじさん構文じゃん',
  'Z世代にはわからん価値観',
  'ちょっと何言ってるかわからない',
  '論破されそう',
  '論理破綻してません？',
  'あ、これアウトなやつ',
  'コンプラ大丈夫？',
  '炎上商法？',
  'バズりたいからって...',
  'これでインプレ稼ぎ？',
  'クソリプですいません',
  'スルーでお願いします',
  'これはスルー推奨',
  'みんなスルーしよ',
  '触っちゃダメなやつ',
  'これに反応するのも...',
  'もうちょい考えよ？',
  'ちょっとググってみ？',
  '勉強してから言おうか',
  'まあ、頑張って',
  'お疲れ様です',
  '大丈夫ですか？',
  'とりあえずお疲れ',
  'まずは落ち着こ？',
  '深呼吸して',
  'もうちょい冷静になろ',
  'まあまあまあ',
  'そうですね（棒）',
  'はいはい、そうですね',
  'なるほどね〜',
  'ふーん',
  'へー',
  'そっか〜',
  'まじか〜'
];

const buzzQuotes = [
  'これは必見です！みんなに知ってほしい',
  'これこそが真のイノベーション',
  '今日一番の学びでした',
  'フォロワーの皆さんにもシェアします',
  'これは永久保存版',
  'すべての人に読んでほしい内容',
  'めちゃくちゃ勉強になる投稿',
  'これを見て考えが変わりました',
  '本当に素晴らしい発見',
  'これは拡散するべき情報',
  'こういう知識をもっと広めたい',
  'フォロワーにも知ってもらいたい',
  'これは保存して何度も見返したい',
  '感動的な内容でした',
  'みんなに見てもらいたい投稿',
  '本当に価値のある情報',
  'こんな視点があったなんて',
  'これは多くの人の参考になる',
  '素晴らしい考察に感謝',
  'これぞ良質なコンテンツ',
  'ガチでバズってて草',
  'これは10万いいね確実',
  'TLがこのツイートで埋まってる',
  'みんな見て！この天才を！',
  'フォロワー急増中の神アカウント',
  'この人マジで有名になるべき',
  'テレビ出演待ったなしでしょ',
  'これが令和の革命だ',
  'まじでインフルエンサーになってほしい',
  'この発想力を企業が放っておくはずがない',
  'ノーベル賞あげたい',
  'この人の言葉が世界を変える',
  'フォロワー100万人いくでしょこれ',
  'もうこの人なしでは生きていけない',
  'このツイートがトレンド入りしてる',
  '全国民に読んでもらいたい',
  'これを見ずに死ねない',
  '人類の宝だと思う',
  'このアカウントをユネスコ世界遺産に',
  'もはや教祖レベル'
];

const flameQuotes = [
  'みんな、これどう思う？ちょっとヤバくない？',
  'え、これマジで言ってる？引用で晒すわ',
  'みんなも見て、この人やべぇ',
  'これは流石に突っ込まざるを得ない',
  'おーい、みんなー、面白い人がいるよー',
  'ちょっと待って、これ本気？釣り？',
  'フォロワーのみんなにも見てもらいたい珍発言',
  'あー、これは典型的なアレですね',
  'え？令和にこんな人まだいるの？',
  'この時代にこの発想はすごいわ（皮肉）',
  'おじさん構文がすぎる',
  'ネタとして面白すぎる',
  '昭和から来た人かな？',
  'これぞ教科書に載せたい炎上ツイート',
  'やべぇ奴発見（晒し）',
  'これはRTせずにはいられない',
  'みんなで考えよう、この発言について',
  '令和の価値観についていけてない典型例',
  'これはもうコピペにして語り継ぎたいレベル',
  'さすがにこれは草',
  'いや、さすがにネタでしょ？',
  'この発想はちょっと...',
  '時代錯誤おじさん発見',
  'うわぁ、これはキツい',
  'みんな見て、珍しい生き物がいる',
  'これが現代のおじさんの思考回路',
  'ちょっと何言ってるかわからない',
  'やばい人に絡まれた',
  'これは保存しておこう（ネタとして）',
  'みんなでこの人のアカウント見に行こう',
  'この人の他のツイートも面白そう',
  'フォロワーさんたち、どう思います？',
  'これはシェアしないといけない',
  'おもしろ人間発見',
  'これぞ炎上芸の教科書'
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