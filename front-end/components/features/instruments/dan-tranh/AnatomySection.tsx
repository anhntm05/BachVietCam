import React from 'react';

export default function AnatomySection() {
  return (
    <section id="cau-tao" className="px-margin-desktop py-12 max-w-container-max mx-auto relative mb-20 reveal">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Tinh Xảo</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm reveal">
          <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Thân Đàn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hình hộp dài, chế tác từ gỗ ngô đồng quý hiếm, mặt đàn vòm cong như mái đình Việt, tạo hộp cộng hưởng âm thanh trong trẻo.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm border-t-2 border-primary-container reveal">
          <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Dây Đàn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sở hữu từ 16 đến 17 dây tơ (nay là kim loại), mỗi dây mang một cao độ chuẩn xác, tạo nên dải âm rộng và phong phú.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm reveal">
          <span className="material-symbols-outlined text-secondary mb-4">reorder</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Con Nhạn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ngựa đàn hình chữ V ngược có thể di động dọc thân đàn để điều chỉnh âm sắc và cao độ linh hoạt cho từng bản nhạc.</p>
        </div>
        <div className="md:col-span-3 h-[250px] glass-panel rounded-xl bento-border flex items-center justify-center relative overflow-hidden group reveal">
          <div className="absolute inset-0 lacquer-pattern opacity-10"></div>
          <div className="text-center z-10 px-8">
            <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Khám phá chi tiết</p>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">1</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Đầu Đàn</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">2</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Bầu Cộng Hưởng</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">3</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Vỹ Đàn</span>
              </div>
            </div>
            <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Mô phỏng cấu trúc cơ học 3D của Đàn Tranh truyền thống</p>
          </div>
        </div>
      </div>
    </section>
  );
}
