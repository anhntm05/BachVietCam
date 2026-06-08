import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-primary-container/10 border-2 border-primary-container rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-6">Bắt Đầu Hành Trình Âm Nhạc</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
                Trở thành người kế thừa di sản văn hóa. Tham gia xưởng thực hành kỹ thuật số của chúng tôi ngay hôm nay để làm chủ tiếng đàn Nhị.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/studio?instrument=dan_nhi" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl">
                  Khởi Hành Tập Luyện
              </Link>
              <button className="border-2 border-primary text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/5 transition-all">
                  Tải Tài Liệu Nghiên Cứu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
