import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bach Viet Cam — Chấm điểm Âm nhạc Dân tộc',
  description:
    'Phân tích cao độ trên thang cents và căn chỉnh trục thời gian bằng DTW cho nhạc cụ truyền thống Việt Nam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Nap font tu Google Fonts. Co latin-ext nen ho tro day du dau tieng Viet.
            Ten font ('Poppins', 'Archivo', 'DM Mono') khop truc tiep voi fontFamily trong code. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=DM+Mono:wght@300;400;500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}