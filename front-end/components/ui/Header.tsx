'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const INSTRUMENTS = [
  { label: 'Đàn Bầu', href: '/instruments/dan-bau' },
  { label: 'Đàn Nhị', href: '/instruments/dan-nhi' },
  { label: 'Đàn Nguyệt', href: '/instruments/dan-nguyet' },
  { label: 'Đàn Tranh', href: '/instruments/dan-tranh' },
  { label: 'Đàn Tỳ Bà', href: '/instruments/dan-ty-ba' },
  { label: 'Sáo Trúc', href: '/instruments/sao-truc' },
];

const NAV_LINKS = [
  { label: 'Tập Luyện Với AI', href: '/studio' },
  { label: 'Tìm Hiểu', href: '/instruments', sublinks: INSTRUMENTS },
  { label: 'Doanh Nghiệp', href: '/doanh-nghiep' },
  { label: 'Liên Hệ', href: '/doanh-nghiep#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Background Overlay to blur and disable the back content */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      <header 
        ref={headerRef}
        className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b-2 border-primary-container dark:border-primary-fixed-variant fixed top-0 w-full z-50 flex flex-col px-margin-mobile md:px-margin-desktop py-4 mx-auto" 
        style={{ maxWidth: '100%' }}
      >
        <div className="w-full max-w-container-max mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim" href="/studio">
            Bách Việt Cầm
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => {
              const isActive = link.href === '#' ? false : link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              
              return link.sublinks ? (
                <div key={index} className="relative group">
                  <Link 
                    href={link.href} 
                    className={`flex items-center gap-1 transition-colors font-label-sm text-label-sm px-4 py-2.5 rounded-full ${isActive ? 'text-white font-bold bg-primary-container shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-white/20 dark:hover:bg-black/20'}`}
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-surface-container-lowest dark:bg-surface-dim rounded-xl shadow-xl border border-outline-variant/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
                    {link.sublinks.map((sub, subIdx) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link 
                          key={subIdx} 
                          href={sub.href}
                          className={`px-4 py-3 my-0.5 rounded-lg transition-colors font-label-sm text-label-sm ${isSubActive ? 'text-white font-bold bg-primary-container shadow-sm mx-2' : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'}`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link 
                  key={index}
                  href={link.href}
                  className={`transition-colors font-label-sm text-label-sm px-4 py-2.5 rounded-full ${isActive ? 'text-white font-bold bg-primary-container shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-white/20 dark:hover:bg-black/20'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Action (Desktop) */}
          <Link href="/studio" className="hidden md:block font-label-sm text-label-sm bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full scale-95 active:scale-90 transition-transform hover:shadow-lg shadow-primary-container/20">
            Trải Nghiệm Miễn Phí
          </Link>

          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <button 
            className="md:hidden text-primary focus:outline-none p-2"
            onClick={toggleMobileMenu}
          >
            <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} style={{ fontSize: '28px' }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden grid transition-all duration-300 ease-in-out w-full max-w-container-max mx-auto ${isMobileMenuOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'}`}>
          <div className="overflow-hidden flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => {
                const isActive = link.href === '#' ? false : link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                
                return (
                  <div key={index}>
                    {link.sublinks ? (
                      <div className="flex flex-col">
                        <Link 
                          href={link.href} 
                          onClick={() => setIsMobileMenuOpen(false)} 
                          className={`font-label-sm text-label-sm px-5 py-3 rounded-xl border border-transparent flex items-center justify-between transition-colors ${isActive ? 'text-white font-bold bg-primary-container shadow-sm' : 'text-on-surface-variant font-bold hover:bg-primary/5'}`}
                        >
                          {link.label}
                          <span className="material-symbols-outlined text-[16px]">expand_more</span>
                        </Link>
                        <div className="flex flex-col pl-6 border-l-2 border-primary/10 ml-6 gap-1 mt-1">
                          {link.sublinks.map((sub, subIdx) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link 
                                key={subIdx}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-label-sm text-label-sm px-5 py-3 rounded-xl transition-colors ${isSubActive ? 'text-white font-bold bg-primary-container shadow-sm' : 'text-on-surface-variant hover:bg-primary/5'}`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-label-sm text-label-sm px-5 py-3 rounded-xl border border-transparent transition-colors block ${isActive ? 'text-white font-bold bg-primary-container shadow-sm' : 'text-on-surface-variant hover:bg-primary/5'}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
            
            <div className="pt-4 pb-2 border-t border-primary/10">
              <Link href="/studio" className="block text-center w-full font-label-sm text-label-sm bg-primary-container text-on-primary-container px-6 py-3 rounded-full hover:shadow-lg shadow-primary-container/20 transition-all">
                Trải Nghiệm Miễn Phí
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
