import React from 'react';

export default function AnatomySection() {
  return (
    <section id="cau-tao" className="px-margin-desktop py-12 max-w-container-max mx-auto relative">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Chi Tiết</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm">
          <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
          <h4 className="font-headline-sm text-headline-sm mb-2">Thân Đàn (Bầu)</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hộp cộng hưởng dài khoảng 1m, thường làm bằng gỗ ngô đồng hoặc tre già, giúp khuếch đại âm thanh ấm áp và vang vọng.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm border-t-2 border-primary-container">
          <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
          <h4 className="font-headline-sm text-headline-sm mb-2">Dây Đàn &amp; Trục</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Một sợi dây duy nhất bằng kim loại chạy dọc thân đàn, nối từ trục lên đến vòi voi, tạo nên dải âm phổ biến biến ảo.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm">
          <span className="material-symbols-outlined text-secondary mb-4">gesture</span>
          <h4 className="font-headline-sm text-headline-sm mb-2">Vòi Voi &amp; Quả Bầu</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Cần đàn dẻo làm bằng sừng trâu và quả bầu khô (nay thường bằng gỗ) là bộ phận quan trọng nhất để tạo độ rung và luyến láy.</p>
        </div>
        <div className="md:col-span-3 h-[300px] glass-panel rounded-xl bento-border flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 lacquer-pattern opacity-10"></div>
          <div className="text-center z-10 px-8">
            <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Sơ Đồ Tương Tác</p>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">1</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Đầu Đàn</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">2</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Thân Đàn</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">3</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Vòi Voi</span>
              </div>
            </div>
            <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Không gian mô phỏng 3D chi tiết cấu trúc</p>
          </div>
        </div>
      </div>
    </section>
  );
}
