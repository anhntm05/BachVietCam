import React from 'react';

export default function ConstructionSection() {
  return (
    <section id="cau-tao" className="py-24 bg-surface-container-low relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Tinh Xảo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">straighten</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Cần Đàn (Neck)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Thân đàn dài mảnh, thường chế tác từ các loại gỗ quý như trắc hoặc mun, mang lại vẻ đẹp thanh tao và khả năng chịu lực bền bỉ qua thời gian.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm border-t-2 border-t-primary-container hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">graphic_eq</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Bát Nhị (Resonator)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Hộp cộng hưởng đặc trưng được bịt bằng da trăn hoặc da rắn khô. Đây là "trái tim" tạo nên độ vang và âm sắc đặc thù không thể lẫn lộn của cây đàn.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">gesture</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Dây &amp; Vĩ (Strings)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Cung vĩ được luồn vào giữa hai dây đàn. Dây đàn làm bằng kim loại hoặc tơ tằm, kết hợp với lông vĩ đuôi ngựa tạo nên âm thanh nồng nàn.
            </p>
          </div>
          <div className="md:col-span-3 h-[300px] bg-white/40 backdrop-blur-md rounded-xl border border-secondary/20 border-t-2 border-t-primary-container flex items-center justify-center relative overflow-hidden group mt-4">
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-10"></div>
            <div className="text-center z-10 px-8">
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Sơ Đồ Tương Tác</p>
              <div className="flex gap-12 justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">1</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Bát Nhị</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">2</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Cần Đàn</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">3</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Cung Vĩ</span>
                </div>
              </div>
              <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Không gian mô phỏng 3D chi tiết cấu trúc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
