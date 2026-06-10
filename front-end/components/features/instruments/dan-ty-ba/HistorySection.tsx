import React from 'react';

export default function HistorySection() {
  return (
    <section className="px-margin-desktop py-24 max-w-container-max mx-auto bg-surface-container-low/30 rounded-3xl mb-12 reveal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 pr-8">
          <div className="sticky top-32">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Hành trình từ nhạc cụ cung đình sang trọng đến biểu tượng văn hóa được số hóa trong thời đại mới.</p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 reveal">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Lý - Trần</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Xuất hiện từ thế kỷ 11, Đàn Tỳ Bà trở thành nhạc cụ không thể thiếu trong các nghi lễ trang trọng, mang đậm âm hưởng Phật giáo và cung đình cổ xưa.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 reveal">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Nhạc Cung Đình Huế</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Giai đoạn rực rỡ nhất khi Tỳ Bà nằm trong dàn Đại nhạc và Tiểu nhạc của triều Nguyễn, đại diện cho tầng lớp quý tộc với âm sắc sang trọng, thanh tao.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 reveal">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Kỷ Nguyên Số</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Bách Việt Cầm tái hiện lại vẻ đẹp di sản qua những bản phối hiện đại và kho lưu trữ số hóa, giúp giới trẻ tiếp cận gần hơn với tiếng đàn dân tộc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
