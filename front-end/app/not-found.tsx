import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center w-full">
      <h1 className="text-9xl font-headline-lg font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-headline-md text-on-surface mb-6">Trang Không Tồn Tại</h2>
      <p className="text-on-surface-variant font-body-md max-w-md mx-auto mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-primary-container text-on-primary-container rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2"
      >
        <span className="material-symbols-outlined">home</span>
        Trở về trang chủ
      </Link>
    </div>
  );
}
