import React from 'react';
import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] px-4 text-center w-full flex-1">
      <h1 className="text-9xl font-headline-lg font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-headline-md text-on-surface mb-6">Trang Quản Trị Không Tồn Tại</h2>
      <p className="text-on-surface-variant font-body-md max-w-md mx-auto mb-8">
        Đường dẫn bạn truy cập không tồn tại hoặc bạn không có quyền truy cập.
      </p>
      <Link 
        href="/admin"
        className="px-8 py-3 bg-primary-container text-on-primary-container rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2"
      >
        <span className="material-symbols-outlined">dashboard</span>
        Về Dashboard
      </Link>
    </div>
  );
}
