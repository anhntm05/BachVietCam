import React from 'react';
import Link from 'next/link';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-surface dark:bg-surface-dim rounded-2xl shadow-2xl border border-primary/20 p-8 max-w-sm w-full relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <span className="material-symbols-outlined text-[32px]">lock</span>
          </div>
          
          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Yêu Cầu Đăng Nhập
          </h3>
          
          <p className="font-body-md text-on-surface-variant">
            Bạn cần đăng nhập để sử dụng tính năng <span className="font-bold text-primary">Chấm Điểm Đối Chiếu AI</span>. Việc này giúp lưu trữ lịch sử và tiến trình học tập của bạn.
          </p>

          <div className="w-full flex flex-col gap-3 mt-4">
            <Link 
              href="/auth/login" 
              className="w-full py-3 bg-primary-container text-on-primary-container rounded-xl font-bold hover:shadow-lg shadow-primary-container/20 transition-all flex items-center justify-center gap-2"
            >
              Đăng Nhập Ngay
              <span className="material-symbols-outlined text-[20px]">login</span>
            </Link>
            
            <button 
              onClick={onClose}
              className="w-full py-3 text-on-surface-variant hover:bg-primary/5 rounded-xl font-semibold transition-colors"
            >
              Để sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
