import React from 'react';

export default function HistorySection() {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto py-20 bg-surface-container-low/30 rounded-3xl mb-20 reveal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 pr-8">
          <div className="sticky top-32">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Hành Trình Thời Gian</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sáo trúc là chứng nhân lịch sử của đời sống người dân Việt Nam, từ những buổi sơ khai mở cõi đến những sân khấu nghệ thuật hiện đại.
            </p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Giai đoạn Sơ khai</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Gắn liền với hình ảnh những cậu bé chăn trâu trên lưng trâu, tiếng sáo khởi nguồn từ sự mộc mạc nhất của thiên nhiên, nảy mầm từ những bụi trúc ven đường.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế kỷ XVII - XIX</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dần được chuẩn hóa về cấu tạo và kỹ thuật bấm lỗ, bắt đầu xuất hiện trong các dàn nhạc thính phòng cổ điển và các phường bát âm tại làng xã.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời đại Số</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Vượt khỏi lũy tre làng, tiếng sáo hòa nhịp cùng dàn nhạc giao hưởng và EDM, trở thành biểu tượng của âm nhạc dân gian đương đại Việt Nam trên trường quốc tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
