'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import React from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] flex justify-center items-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
      </div>
      
      {/* Watermark Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[0] opacity-20 bg-center bg-no-repeat bg-[length:100%_auto]" 
        style={{ backgroundImage: 'url("/images/Artboard-2.png")' }}
      ></div>

      <Header />
      
      {children}

      <Footer />
    </>
  );
}
