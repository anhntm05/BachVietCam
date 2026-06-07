import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bách Việt Cầm - Studio Luyện Tập',
  description: 'Studio Luyện Tập cho nhạc cụ truyền thống Việt Nam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="light">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Subtle Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-[-1] flex justify-center items-center opacity-30">
          <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
        </div>

        <Header />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
