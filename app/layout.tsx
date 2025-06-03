import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "バズシミュレーター - SNSバズ体験サービス",
  description: "投稿がバズったり炎上したりする体験ができるエンターテインメントサービス",
  keywords: ["バズ", "SNS", "シミュレーター", "炎上", "Twitter", "X", "エンターテインメント"],
  authors: [{ name: "ShinCode" }],
  creator: "ShinCode",
  openGraph: {
    title: "バズシミュレーター - SNSバズ体験サービス",
    description: "投稿がバズったり炎上したりする体験ができるエンターテインメントサービス",
    url: "https://buzz-simulator-bice.vercel.app",
    siteName: "バズシミュレーター",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "バズシミュレーター - 投稿がバズる体験ができる",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "バズシミュレーター - SNSバズ体験サービス",
    description: "投稿がバズったり炎上したりする体験ができるエンターテインメントサービス",
    images: ["/api/og"],
    creator: "@ShinCode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
