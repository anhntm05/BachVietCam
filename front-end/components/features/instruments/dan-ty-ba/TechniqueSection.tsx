import React from 'react';

export default function TechniqueSection() {
  return (
    <section className="px-margin-desktop py-20 max-w-container-max mx-auto overflow-hidden reveal">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 bg-surface-container rounded-2xl p-1 aspect-video shadow-2xl overflow-hidden">
            <img alt="Nghệ sĩ biểu diễn Đàn Tỳ Bà" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLv9SppcOqvG30mRBLSY2UNSbMes4rceeAlE7hHpYiSCxyhkZa0mRuls1yrUfbxzIdTnBOXg8og1xW2n03qLZKwH-SlT6eIzXHoIzzetpxvcKnVJ0Q1Na6H-Khxjtvwd-v7qEBtJfLiFtfe4no8TTRAijFv4EXdI_XyLgrlQ0b8DfxmJAe8i4rtYDf5SxIbpqEdpBvR56LKtbVD1AetQX-NLBySkT7SVUBbpEVgYbEiOruQYCYSnyZEEj6cg" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-8">
              <button className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition-all border border-white/30">
                <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
              </button>
              <span className="ml-4 text-white font-label-sm uppercase tracking-widest">Kỹ thuật "Phi, Điểm, Quét"</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-secondary"></div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Nghệ Thuật Diễn Tấu</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Lý Thuyết &amp; Kỹ Thuật</h2>
          <p className="font-body-md text-body-md text-on-surface-variant italic">"Cung thanh tựa ngọc rơi, cung trầm như sóng vỗ"</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">waves</span>
              </div>
              <div>
                <h5 className="font-bold text-on-surface">Kỹ thuật "Phi" (Tremolo)</h5>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Dùng ngón tay gảy liên tục trên dây tạo ra chuỗi âm thanh dày đặc, mượt mà như dòng chảy liên tục của nước.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">touch_app</span>
              </div>
              <div>
                <h5 className="font-bold text-on-surface">Kỹ thuật "Điểm" (Staccato)</h5>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ngón tay nhấn thả nhanh gọn tạo ra những âm sắc trong trẻo, rành mạch như tiếng ngọc rơi trên mâm đồng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
