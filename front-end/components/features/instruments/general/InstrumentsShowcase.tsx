import React from 'react';

export default function InstrumentsShowcase() {
  return (
    <section className="bg-surface-container-lowest py-24 px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-headline-md text-headline-md text-primary">Phân Loại Nhạc Khí</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Hệ thống nhạc cụ dân tộc Việt Nam phong phú được phân chia theo cấu tạo và phương thức diễn tấu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="p-8 border-l-2 border-primary-container bg-surface flex flex-col gap-6 hover:shadow-xl transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary">linear_scale</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm mb-2">Bộ Dây (Chi Đàn)</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Bao gồm các nhạc cụ dùng dây rung để phát thanh: Đàn Bầu, Đàn Tranh, Đàn Nguyệt, Đàn Đáy...</p>
            </div>
            <ul className="text-label-sm font-label-sm space-y-2 opacity-60">
              <li>• Nhóm Gảy</li>
              <li>• Nhóm Kéo (Cung vĩ)</li>
              <li>• Nhóm Gõ</li>
            </ul>
          </div>
          <div className="p-8 border-l-2 border-primary-container bg-surface flex flex-col gap-6 hover:shadow-xl transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary">air</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm mb-2">Bộ Hơi (Chi Sáo)</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Sử dụng luồng hơi thổi qua ống hoặc dăm kèn: Sáo Trúc, Tiêu, Kèn Bóp, Khèn Mông...</p>
            </div>
            <ul className="text-label-sm font-label-sm space-y-2 opacity-60">
              <li>• Nhóm Không Dăm</li>
              <li>• Nhóm Có Dăm</li>
            </ul>
          </div>
          <div className="p-8 border-l-2 border-primary-container bg-surface flex flex-col gap-6 hover:shadow-xl transition-shadow">
            <span className="material-symbols-outlined text-4xl text-primary">backspace</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm mb-2">Bộ Gõ (Chi Trống)</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Phát ra âm thanh bằng cách tác động lực: Trống Cái, Mõ, Chiêng, Cồng, Đàn Đá...</p>
            </div>
            <ul className="text-label-sm font-label-sm space-y-2 opacity-60">
              <li>• Nhóm Có Âm Độ</li>
              <li>• Nhóm Không Âm Độ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
