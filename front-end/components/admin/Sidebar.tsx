'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: 'dashboard', exact: true },
    { href: '/admin/users', label: 'Users', icon: 'group' },
    { href: '/admin/instruments', label: 'Instruments', icon: 'music_note' },
    { href: '/admin/evaluations', label: 'AI Evaluations', icon: 'psychology' },
    { href: '/admin/settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant/20 dark:border-outline-variant/10 h-screen w-64 fixed left-0 top-0 flex flex-col z-50 transition-all duration-300">
      <div className="px-6 py-8 flex flex-col gap-1">
        <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Bách Việt Cầm</h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Cultural Atelier Admin</p>
      </div>
      
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname?.startsWith(link.href);
            
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-6 py-4 transition-all ${
                    isActive 
                      ? 'text-primary dark:text-primary-fixed-dim font-bold border-l-4 border-primary bg-primary-container/10 scale-[0.98]' 
                      : 'text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant'
                  }`}
                >
                  <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {link.icon}
                  </span>
                  <span className="font-label-sm text-label-sm">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 mt-auto border-t border-outline-variant/10">
        <div className="flex items-center gap-3 mb-4">
          <img 
            alt="Admin Profile" 
            className="w-10 h-10 rounded-full border border-primary-container object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEMqxVqEE6vttzPbfbciarx62yc_tvG__gR-2n9X4QXBauzojY1jKYPg7uNdxEiEET8VuHxgMLTQ-ffbpZQkmsf3xX4W9kc0SctXKeDPDnl5w5zgxn60LXS2VbykaawrUxf6RsPmr0jCxn0_cQvlLN_sqxnICFkhADYifQsb5QD9aMGT0ZYQFDiHdqIFkXhTVnPg25r6Ar2MZO24dCnGz5rlOaNQlEXFT6Rb0G2Z3B7Y_xQZzeIy8vpOv1nX4Sr0iNMCqm9lzDFw4C"
          />
          <div className="overflow-hidden">
            <p className="font-label-sm text-label-sm text-on-surface font-bold truncate">Admin</p>
            <p className="text-[10px] text-on-surface-variant">Bách Việt Cầm</p>
          </div>
        </div>
        <button 
          onClick={() => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = '/auth/login';
          }}
          className="w-full py-2 bg-error/10 text-error hover:bg-error hover:text-white rounded-md transition-colors flex items-center justify-center gap-2 font-label-sm font-bold"
        >
          <span className="material-symbols-outlined text-sm">logout</span>
          Đăng Xuất
        </button>
      </div>
    </aside>
  );
}
