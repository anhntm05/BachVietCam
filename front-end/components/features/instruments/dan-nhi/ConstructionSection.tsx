import React from 'react';

export default function ConstructionSection() {
  return (
    <section id="cau-tao" className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Cấu Tạo Chi Tiết</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">straighten</span>
            <h3 className="font-headline-sm text-headline-sm text-secondary mb-4">Cần Đàn (Neck)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Thân đàn dài mảnh, thường chế tác từ các loại gỗ quý như trắc hoặc mun, mang lại vẻ đẹp thanh tao và khả năng chịu lực bền bỉ qua thời gian.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">graphic_eq</span>
            <h3 className="font-headline-sm text-headline-sm text-secondary mb-4">Bát Nhị (Resonator)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Hộp cộng hưởng đặc trưng được bịt bằng da trăn hoặc da rắn khô. Đây là "trái tim" tạo nên độ vang và âm sắc đặc thù không thể lẫn lộn của cây đàn.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">gesture</span>
            <h3 className="font-headline-sm text-headline-sm text-secondary mb-4">Dây &amp; Vĩ (Strings)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Cung vĩ được luồn vào giữa hai dây đàn. Dây đàn làm bằng kim loại hoặc tơ tằm, kết hợp với lông vĩ đuôi ngựa tạo nên âm thanh nồng nàn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
