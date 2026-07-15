import React from 'react';

export default function HistorySection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 pr-8">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Xuất hiện tại Việt Nam từ thế kỷ XI, Đàn Nguyệt (hay Nguyệt Cầm) đã trải qua ngàn năm thăng trầm. Từ chốn cung đình tôn nghiêm đến những sân đình dân dã, nhạc cụ này đã khẳng định vị thế "độc tôn" trong dòng chảy âm nhạc dân tộc.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface group-hover:scale-125 transition-transform"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế kỷ XI</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ghi nhận sự xuất hiện trong các điêu khắc cổ. Đây là giai đoạn sơ khai khi nhạc cụ bắt đầu định hình và len lỏi vào đời sống tâm linh, âm nhạc dân gian của cư dân Việt cổ.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Lê - Nguyễn</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trở thành nhạc khí quan trọng đặc biệt trong Nhã nhạc Cung đình. Với âm sắc thanh cao, Đàn Nguyệt được ưu ái sử dụng trong các buổi đại lễ và yến tiệc hoàng gia, khẳng định vị thế quý phái.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Đương đại</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nhạc khí chủ đạo không thể thiếu trong Hát Văn, Nhạc Tài Tử và các buổi biểu diễn đương đại. Đàn Nguyệt ngày nay còn được kết hợp với các loại hình âm nhạc mới, mang hơi thở dân tộc vươn tầm quốc tế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
