import React from 'react';

export default function HistorySection() {
  return (
    <section className="px-margin-desktop py-20 max-w-container-max mx-auto bg-surface-container-low/30 rounded-3xl mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 pr-8">
          <div className="sticky top-32">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Hành trình từ nhạc cụ dân gian giản dị đến biểu tượng quốc hồn quốc túy của Việt Nam.</p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-12 chronicle-scroll">
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Truyền Thuyết Cổ Xưa</h4>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-4">"Làm thân con gái chớ nghe đàn bầu"</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Đàn Bầu (hay Độc Huyền Cầm) gắn liền với những câu chuyện về lòng hiếu thảo và sự tần tảo của người phụ nữ Việt. Khởi nguồn từ những ống tre, sợi mây đơn sơ, nhạc cụ này đã len lỏi vào đời sống tâm linh và giải trí của cư dân vùng đồng bằng Bắc Bộ từ hàng ngàn năm trước.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế Kỷ XIX - XX</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Đàn Bầu bắt đầu xuất hiện chính thức trong các văn bản cung đình và dần được cải tiến. Từ dây mây chuyển sang dây tơ, rồi dây sắt, giúp tiếng đàn thêm thanh mảnh, vang xa. Đây là giai đoạn Đàn Bầu khẳng định vị thế trong các loại hình nghệ thuật chuyên nghiệp.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary-container/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface"></div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Đại Kỹ Thuật Số</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Ngày nay, Đàn Bầu không chỉ bó hẹp trong âm nhạc truyền thống mà còn kết hợp với nhạc điện tử, jazz, và giao hưởng quốc tế, mang tiếng lòng Việt Nam vươn xa ra thế giới qua những nghệ sĩ bậc thầy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
