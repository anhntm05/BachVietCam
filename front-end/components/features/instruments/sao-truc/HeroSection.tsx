import React from 'react';
import BackButton from '@/components/ui/BackButton';
import InstrumentActionButtons from '@/components/features/instruments/general/InstrumentActionButtons';

export default function HeroSection() {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-24 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 space-y-6">
          <BackButton />
          <div className="inline-flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase">Nhạc Cụ Di Sản</span>
          </div>
          <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
            Sáo Trúc - <br/>
            <span className="text-primary italic">Hơi Thở Đồng Nội</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Vượt qua bao thăng trầm của thời gian, tiếng sáo trúc vẫn vẹn nguyên vẻ mộc mạc, thanh tao, như chính linh hồn của làng quê Việt Nam, đưa ta về với nguồn cội bình yên.
          </p>
          <InstrumentActionButtons studioLink="/studio?instrument=sao_truc" constructionLink="#cau-tao" />
        </div>
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel p-4">
            <img 
              alt="Sáo Trúc Heritage" 
              className="w-full h-full object-cover rounded-xl shadow-2xl" 
              src="https://shopguitardanang.com/wp-content/uploads/2019/11/sao-tr%C3%BAc-1.jpg"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-6 max-w-xs shadow-2xl">
            <p className="text-primary font-bold mb-1">Âm sắc mộc mạc</p>
            <p className="text-sm text-on-surface-variant italic">"Tiếng sáo bay bổng, mang theo hương lúa và tiếng gió của đất trời."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
