export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "バズシミュレーター",
    "description": "投稿がバズったり炎上したりする体験ができるエンターテインメントサービス",
    "url": "https://buzz-simulator-bice.vercel.app",
    "applicationCategory": "Entertainment",
    "operatingSystem": "Web",
    "browserRequirements": "Requires HTML5 support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "creator": {
      "@type": "Person",
      "name": "ShinCode",
      "url": "https://www.youtube.com/channel/UCNTxclE0N4qsUuirssL_D8w"
    },
    "image": "https://buzz-simulator-bice.vercel.app/api/og",
    "keywords": "バズ, SNS, シミュレーター, 炎上, Twitter, X, エンターテインメント",
    "inLanguage": "ja-JP",
    "isAccessibleForFree": true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}