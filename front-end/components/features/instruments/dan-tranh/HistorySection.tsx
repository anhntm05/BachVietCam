import React from 'react';

export default function HistorySection() {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto py-20 bg-surface-container-low/30 rounded-3xl mb-20 reveal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 pr-8">
          <div className="sticky top-32">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Hành Trình Vàng Son</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Đàn Tranh không chỉ là nhạc cụ, mà là chứng nhân lịch sử, len lỏi từ chốn cung đình uy nghiêm đến những làng quê thanh bình qua bao thế kỷ.
            </p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Lý - Trần</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Giai đoạn Đàn Tranh bắt đầu xuất hiện rực rỡ và được đưa vào các dàn nhạc cung đình sơ khai, tượng trưng cho sự thanh cao và tinh tế của văn hóa Đại Việt.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Lê - Nguyễn</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Trở thành trụ cột không thể thay thế trong Nhã nhạc Cung đình Huế. Đàn Tranh thời kỳ này đạt đến đỉnh cao về cấu tạo 16 dây và kỹ thuật diễn tấu điêu luyện phục vụ hoàng gia.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 timeline-item">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Đương đại</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Tiếng đàn vang vọng trong Nhạc Tài Tử, Cải Lương và các sân khấu hòa tấu hiện đại. Đàn Tranh hôm nay được số hóa và lan tỏa mạnh mẽ trong cộng đồng yêu nhạc dân tộc toàn cầu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
