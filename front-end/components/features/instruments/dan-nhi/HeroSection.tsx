import React from 'react';
import BackButton from '@/components/ui/BackButton';
import InstrumentActionButtons from '@/components/features/instruments/general/InstrumentActionButtons';
import images from '@/public/instrument-images.json';

export default function HeroSection() {
  return (
    <section className="hero-gradient w-full py-20 relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 space-y-6">
          <BackButton />
          <div className="inline-flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase">Nhạc Cụ Dân Tộc</span>
          </div>
          <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
            ĐÀN NHỊ
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            "Tiếng đàn như tiếng tơ lòng, lúc nỉ non sầu thảm, lúc lại réo rắt vui tươi, len lỏi qua từng kẽ lá, chạm đến những miền cảm xúc thẳm sâu nhất của tâm hồn Việt."
          </p>
          <InstrumentActionButtons studioLink="/studio?instrument=dan_nhi" constructionLink="#cau-tao" />
        </div>
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md p-4 border border-primary-container/20 border-t-2 border-t-primary-container">
            <img alt="Đàn Nhị" className="w-full h-full object-cover rounded-xl shadow-2xl" 
            src={images['dan-nhi'].hero} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/40 backdrop-blur-md p-6 max-w-xs shadow-2xl border border-primary-container/20 border-t-2 border-t-primary-container rounded-xl">
            <p className="text-primary font-bold mb-1">Âm sắc thanh tao</p>
            <p className="text-sm text-on-surface-variant italic">"Tiếng đàn như rót mật vào tai, vừa trang nghiêm vừa trữ tình."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
