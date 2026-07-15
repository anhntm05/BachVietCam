import React from 'react';

export default function AnatomySection() {
  return (
    <section id="cau-tao" className="py-24 bg-surface-container-low relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Tinh Xảo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Thân Đàn (Nguyệt)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Thường được làm bằng gỗ Trắc hoặc Cẩm lai, có hình tròn như mặt trăng rằm, tạo nên bầu cộng hưởng âm thanh vang và sáng.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm border-t-2 border-t-primary-container hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Dây Đàn &amp; Trục</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sử dụng 2 dây tơ hoặc nilon (Hò và Phan) cùng 4 trục gỗ đối xứng, cho phép người chơi điều chỉnh cao độ một cách linh hoạt.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">reorder</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Phím Đàn</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Gắn từ 8 đến 11 phím cao và mảnh dọc cần đàn dài, giúp tạo ra những khoảng nhấn và luyến láy đặc thù của nhạc Việt.</p>
          </div>
          <div className="md:col-span-3 h-[300px] bg-white/40 backdrop-blur-md rounded-xl border border-secondary/20 border-t-2 border-t-primary-container flex items-center justify-center relative overflow-hidden group mt-4">
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-10"></div>
            <div className="text-center z-10 px-8">
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Sơ Đồ Tương Tác</p>
              <div className="flex gap-12 justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">1</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Bầu Vang</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">2</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Cần Đàn</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">3</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Trục Đàn</span>
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
