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
            <span className="font-label-sm text-label-sm tracking-widest uppercase">Di Sản Nhạc Khí</span>
          </div>
          <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
            Đàn Nguyệt - <br />
            <span className="text-primary italic">Nguyệt Cầm Vang Bóng</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Mang dáng hình trăng rằm trọn vẹn, Đàn Nguyệt sở hữu âm sắc trong trẻo, réo rắt, là linh hồn của những buổi diễn xướng cung đình và nhịp phách tâm linh dân tộc.
          </p>
          <InstrumentActionButtons studioLink="/studio?instrument=dan_nguyet" constructionLink="#cau-tao" />
        </div>
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md p-4 border border-primary-container/20 border-t-2 border-t-primary-container">
            <img alt="Đàn Nguyệt" className="w-full h-full object-cover rounded-xl shadow-2xl" 
            src={images['dan-nguyet'].hero} />
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
