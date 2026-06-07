'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Cách Hoạt Động', href: '#' },
  { label: 'Tìm Hiểu', href: '#' },
  { label: 'Doanh Nghiệp', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Liên Hệ', href: '#' },
];

export default function Header() {
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
            <Image src="/images/logo.png" alt="Bách Việt Cầm Logo" width={32} height={32} className="object-contain" />
            Bách Việt Cầm
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm hover:bg-white/20 dark:hover:bg-black/20 px-3 py-2 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Trailing Action (Desktop) */}
          <button className="hidden md:block font-label-sm text-label-sm bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full scale-95 active:scale-90 transition-transform hover:shadow-lg shadow-primary-container/20">
            Trải Nghiệm Miễn Phí
          </button>

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
              {NAV_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-on-surface-variant font-label-sm text-label-sm hover:bg-primary/5 px-4 py-3 rounded-lg border border-transparent hover:border-primary/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 pb-2 border-t border-primary/10">
              <button className="w-full font-label-sm text-label-sm bg-primary-container text-on-primary-container px-6 py-3 rounded-full hover:shadow-lg shadow-primary-container/20 transition-all">
                Trải Nghiệm Miễn Phí
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
