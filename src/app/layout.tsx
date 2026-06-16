import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "经典电影 | 影史佳作浏览",
  description: "经典电影浏览网站 — 发现历久弥新的银幕佳作",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
