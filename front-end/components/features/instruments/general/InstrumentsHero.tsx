import React from 'react';

export default function InstrumentsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-margin-desktop">
      <div className="absolute inset-0 z-0">
        <img alt="Traditional Vietnamese tapestry" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMw0lALXxByRSbbYdM4aF04WTf_OUCRTYJpTru2GMKDRkQu4aAYf7buq-dhcsdsrn0odBcCa9IcVdriGqvl_bQnv99M_ft4qyo2JwP8bu-OZ63EFFmx4gOAhsOighLKb-6StMzToCqWkqXfDGzQqg7NM8AXUFnWdYkuqhAkgKSNnHnX5fzWxnud0lYkBP8OeqMLwl75gkPW88IKXOdrJsTgm_JioXJ_GT-jvRzvYsvn3x6APpp11muAwcahmCLwko2Yr2HRad8caR6" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface"></div>
        <div className="lacquer-overlay absolute inset-0"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl space-y-6">
        <span className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary font-label-sm text-label-sm tracking-[0.2em] mb-4 uppercase">Museum Archive</span>
        <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
          Kho Tàng <span className="text-gold-shimmer">Nhạc Cụ</span> Dân Tộc
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic leading-relaxed">
          Nơi lưu giữ linh hồn của âm nhạc Việt. Từng thanh âm là một câu chuyện, mỗi nhạc cụ là một tác phẩm nghệ thuật vượt thời gian.
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <span className="w-24 h-[1px] bg-primary-container self-center"></span>
          <span className="material-symbols-outlined text-primary text-3xl">filter_vintage</span>
          <span className="w-24 h-[1px] bg-primary-container self-center"></span>
        </div>
      </div>
    </section>
  );
}
