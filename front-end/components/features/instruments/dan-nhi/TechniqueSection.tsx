import React from 'react';
import images from '@/public/instrument-images.json';

export default function TechniqueSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary-container/20 border-t-2 border-t-primary-container relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-[120px]">queue_music</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Kỹ thuật kéo đàn điêu luyện</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-6 relative aspect-video bg-surface-container-highest rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group/video">
              <img alt="Tutorial" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover/video:scale-110" src={images['dan-nhi'].technique_tutorial} />
              <div className="z-10 bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40 cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
              </div>
            </div>
            
            <div className="lg:col-span-6 space-y-6">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex gap-4">
                <div className="bg-primary-container/20 p-3 h-fit rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">waves</span>
                </div>
                <div>
                  <h5 className="font-bold text-tertiary mb-1">Ngón Rung (Vibrato)</h5>
                  <p className="text-sm text-on-surface-variant">Sử dụng đầu ngón tay tạo ra sự dao động nhẹ nhàng trên dây đàn, tạo nên âm thanh mềm mại.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex gap-4">
                <div className="bg-primary-container/20 p-3 h-fit rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">touch_app</span>
                </div>
                <div>
                  <h5 className="font-bold text-tertiary mb-1">Ngón Nhấn (Pressure)</h5>
                  <p className="text-sm text-on-surface-variant">Kỹ thuật thay đổi cao độ bằng cách nhấn mạnh hoặc nhẹ lên dây, cho phép vuốt tinh tế.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex gap-4">
                <div className="bg-primary-container/20 p-3 h-fit rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">motion_photos_on</span>
                </div>
                <div>
                  <h5 className="font-bold text-tertiary mb-1">Kéo Vĩ (Bowing)</h5>
                  <p className="text-sm text-on-surface-variant">Điều khiển lực và tốc độ của cung vĩ để tạo ra các sắc thái từ dứt khoát đến dịu êm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
