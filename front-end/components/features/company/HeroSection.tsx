import React from 'react';

export default function HeroSection() {
  return (
    <section className="px-margin-desktop mb-24 relative">
      <div className="max-w-container-max mx-auto text-center">
        <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase mb-4 block">Gìn Giữ Bản Sắc</span>
        <h1 className="font-display-lg text-display-lg md:text-display-lg mb-8 text-primary max-w-4xl mx-auto">
          Đội Ngũ Phát Triển - Những Người Gìn Giữ Hồn Việt
        </h1>
        <div className="w-24 h-0.5 bg-primary-container mx-auto mb-8 relative">
          <span className="material-symbols-outlined absolute -top-3 left-1/2 -translate-x-1/2 text-primary bg-surface px-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
            filter_vintage
          </span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Khởi nguồn từ niềm đam mê vô tận với âm sắc truyền thống, chúng tôi kết hợp tinh hoa nghệ thuật Việt Nam cùng công nghệ kỹ thuật số đương đại để hồi sinh những di sản âm nhạc đang dần mai một.
        </p>
      </div>
      {/* Abstract background element */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
        <div className="lacquer-pattern absolute inset-0"></div>
      </div>
    </section>
  );
}
