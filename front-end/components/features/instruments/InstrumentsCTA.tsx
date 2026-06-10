import React from 'react';
import Link from 'next/link';

export default function InstrumentsCTA() {
  return (
    <section className="relative py-24 px-margin-desktop overflow-hidden">
      <div className="absolute inset-0 bg-inverse-surface opacity-[0.03] lacquer-overlay"></div>
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center relative z-10 border-2 border-primary-container/20">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-3xl text-primary">headphones</span>
          </div>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Sẵn sàng trải nghiệm?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Bước vào Virtual Studio để bắt đầu hành trình âm nhạc của bạn. Lắng nghe, học hỏi và bảo tồn những giá trị di sản quý báu.
        </p>
        <Link className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-full font-headline-sm text-headline-sm hover:scale-105 active:scale-95 transition-all shadow-xl" href="/studio">
            Bước Vào Studio <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
