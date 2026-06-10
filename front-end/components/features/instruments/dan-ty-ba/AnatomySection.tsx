import React from 'react';

export default function AnatomySection() {
  return (
    <section id="cau-tao" className="px-margin-desktop py-12 max-w-container-max mx-auto relative reveal">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Tinh Xảo</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm reveal">
          <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Thân Đàn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Chế tác từ gỗ Ngô Đồng nguyên khối với hình dáng quả lê (hình tỳ bà) đặc trưng, tạo nên hộp cộng hưởng cho âm thanh ấm áp, sâu lắng.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm border-t-2 border-primary-container reveal">
          <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Dây Đàn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hệ thống 4 dây tơ truyền thống (nay thường bằng nylon hoặc kim loại), được lên theo các quãng chuẩn, cho phép nghệ sĩ thực hiện các kỹ thuật rung, mổ phức tạp.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm reveal">
          <span className="material-symbols-outlined text-secondary mb-4">reorder</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Phím Đàn</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bố trí từ 17 đến 19 phím đàn (còn gọi là phím tỳ), được gắn cố định trên cần đàn và mặt đàn để xác định các cung bậc âm thanh chính xác.</p>
        </div>
        <div className="md:col-span-3 h-[250px] glass-panel rounded-xl bento-border flex items-center justify-center relative overflow-hidden group reveal">
          <div className="absolute inset-0 lacquer-pattern opacity-10"></div>
          <div className="text-center z-10 px-8">
            <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Khám phá cấu trúc</p>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">1</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Cần Đàn</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">2</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Bầu Đàn</span>
              </div>
              <div className="h-[1px] w-16 bg-primary-container/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2 font-bold">3</div>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Ngựa Đàn</span>
              </div>
            </div>
            <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Mô phỏng cấu trúc cơ học của một cây Tỳ Bà cổ truyền</p>
          </div>
        </div>
      </div>
    </section>
  );
}
