import React from 'react';
import Link from 'next/link';

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({ 
  href = '/instruments', 
  label = 'Tất cả nhạc cụ',
  className = ''
}: BackButtonProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <Link 
        href={href} 
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm group"
      >
        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
        {label}
      </Link>
    </div>
  );
}
