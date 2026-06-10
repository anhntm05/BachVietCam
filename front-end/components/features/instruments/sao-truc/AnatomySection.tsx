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
          <span className="material-symbols-outlined text-secondary mb-4">grass</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Ống Nứa/Tre</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Được chọn lựa kỹ lưỡng từ những thân nứa già, thẳng, khô tự nhiên để đảm bảo độ cộng hưởng hoàn hảo nhất.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm border-t-2 border-primary-container reveal">
          <span className="material-symbols-outlined text-secondary mb-4">air</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Lỗ Thổi</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Vị trí mài giũa tinh xảo, quyết định độ nhạy của hơi và sự trong trẻo của âm thanh khi bắt đầu luồng khí.</p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm reveal">
          <span className="material-symbols-outlined text-secondary mb-4">grid_view</span>
          <h4 className="font-headline-sm text-headline-sm mb-2 text-primary">Lỗ Bấm</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hệ thống 6 hoặc 10 lỗ giúp điều chỉnh cao độ một cách tinh tế, tạo ra dải âm rộng cho các bản nhạc phức tạp.</p>
        </div>
      </div>
    </section>
  );
}
