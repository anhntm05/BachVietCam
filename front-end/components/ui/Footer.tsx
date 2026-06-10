import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant w-full py-6 mt-auto z-10">
      <div className="w-full px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
        {/* Brand / Copyright */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary">
            {/* <Image src="/images/logo.png" alt="Bách Việt Cầm Logo" width={32} height={32} className="object-contain" /> */}
            Bách Việt Cầm
          </div>
          <p className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim">
            © 2026 Bách Việt Cầm. <br />Di sản âm nhạc dân tộc trong kỷ nguyên số.
          </p>
        </div>

        {/* Links list */}
        <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-container transition-colors opacity-80 hover:opacity-100" href="#">
            Chính sách bảo mật
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-container transition-colors opacity-80 hover:opacity-100" href="#">
            Điều khoản sử dụng
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-container transition-colors opacity-80 hover:opacity-100" href="/doanh-nghiep#contact">
            Liên hệ hợp tác
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-container transition-colors opacity-80 hover:opacity-100" href="/doanh-nghiep#team">
            Về chúng tôi
          </a>
        </div>
      </div>
    </footer>
  );
}
