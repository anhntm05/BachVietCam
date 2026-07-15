import React from 'react';

export default function ChronicleSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 pr-8">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Xuất hiện từ thời nhà Đinh, tiền thân là cây đàn Cầm của vùng Á Đông, dần được Việt hóa để phù hợp với tâm hồn và bản sắc riêng của người Việt qua nhiều thế kỷ.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface group-hover:scale-125 transition-transform"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế kỷ X - Khởi Thủy</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Đàn Nhị dần được định hình và len lỏi vào đời sống tâm linh, âm nhạc dân gian của cư dân Việt cổ, mang đậm bản sắc văn hóa dân tộc.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Triều Nguyễn - Nhã Nhạc Cung Đình</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trở thành nhạc khí không thể thiếu trong dàn Tiểu nhạc và Đại nhạc, phục vụ các nghi lễ trang trọng, mang tính biểu tượng văn hóa cao quý chốn cung đình Huế xưa.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Đại Mới - Sức Sống Đương Đại</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Vượt ra khỏi không gian truyền thống, Đàn Nhị nay hòa mình vào các dàn nhạc giao hưởng hiện đại, các dự án âm nhạc đương đại, giữ vững vị thế là nhạc cụ tiêu biểu của Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
