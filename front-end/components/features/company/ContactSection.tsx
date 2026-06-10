'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-[#FFFBEB] border border-amber-500/20 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            Bạn có câu hỏi về dự án hay muốn đóng góp ý kiến về việc bảo tồn nhạc cụ truyền thống? Hãy để lại thông điệp, chúng tôi luôn lắng nghe.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-body-md text-on-surface-variant">Trường Đại Học FPT, Km29, Đại Lộ Thăng Long, Hà Nội</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="font-body-md text-on-surface-variant">atelier@bachvietcam.vn</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">call</span>
              <span className="font-body-md text-on-surface-variant">+84 (0) 24 3823 4567</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-12 md:p-16 border-l border-outline-variant">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-2 px-0 text-on-surface placeholder-transparent focus:border-primary-container focus:ring-0 transition-all" 
                id="name" 
                placeholder=" " 
                type="text"
              />
              <label 
                className="absolute top-2 left-0 -translate-y-6 text-label-sm text-on-surface-variant peer-placeholder-shown:text-body-md peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-primary transition-all pointer-events-none" 
                htmlFor="name"
              >
                Họ và Tên
              </label>
            </div>
            <div className="relative">
              <input 
                className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-2 px-0 text-on-surface placeholder-transparent focus:border-primary-container focus:ring-0 transition-all" 
                id="email" 
                placeholder=" " 
                type="email"
              />
              <label 
                className="absolute top-2 left-0 -translate-y-6 text-label-sm text-on-surface-variant peer-placeholder-shown:text-body-md peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-primary transition-all pointer-events-none" 
                htmlFor="email"
              >
                Email Liên Hệ
              </label>
            </div>
            <div className="relative">
              <input 
                className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-2 px-0 text-on-surface placeholder-transparent focus:border-primary-container focus:ring-0 transition-all" 
                id="subject" 
                placeholder=" " 
                type="text"
              />
              <label 
                className="absolute top-2 left-0 -translate-y-6 text-label-sm text-on-surface-variant peer-placeholder-shown:text-body-md peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-primary transition-all pointer-events-none" 
                htmlFor="subject"
              >
                Chủ Đề
              </label>
            </div>
            <div className="relative">
              <textarea 
                className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-2 px-0 text-on-surface placeholder-transparent focus:border-primary-container focus:ring-0 transition-all resize-none" 
                id="message" 
                placeholder=" " 
                rows={3}
              ></textarea>
              <label 
                className="absolute top-2 left-0 -translate-y-6 text-label-sm text-on-surface-variant peer-placeholder-shown:text-body-md peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-primary transition-all pointer-events-none" 
                htmlFor="message"
              >
                Thông Điệp Của Bạn
              </label>
            </div>
            <button 
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group" 
              type="submit"
            >
              Gửi Thông Điệp
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
