import React from 'react';

export default function TechniquesSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary-container/20 border-t-2 border-t-primary-container relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-[120px]">queue_music</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Kỹ thuật ngón tay điêu luyện</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Nhấn</h5>
              <p className="text-sm">Tạo ra các âm luyến láy, rung ngân đặc trưng của nhạc Việt.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Láy</h5>
              <p className="text-sm">Sử dụng đầu ngón tay gõ nhẹ vào dây tạo âm thanh hoa mỹ.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Vê</h5>
              <p className="text-sm">Gảy liên tục vào một dây tạo hiệu ứng âm thanh dày dặn.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Phi</h5>
              <p className="text-sm">Kỹ thuật rải ngón trên cả 2 dây tạo sắc thái sôi nổi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
