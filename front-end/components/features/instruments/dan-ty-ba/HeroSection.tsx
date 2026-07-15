import React from 'react';
import BackButton from '@/components/ui/BackButton';
import InstrumentActionButtons from '@/components/features/instruments/general/InstrumentActionButtons';
import images from '@/public/instrument-images.json';

export default function HeroSection() {
  return (
    <section className="px-margin-desktop py-12 max-w-container-max mx-auto reveal">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[60vh]">
        <div className="md:col-span-5 flex flex-col justify-center space-y-6 z-10">
          <BackButton />
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary-container"></div>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Kiệt Tác Cổ Truyền</span>
          </div>
          
          <div className="relative">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2 uppercase leading-tight">
              ĐÀN TỲ BÀ
            </h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary-container/40 rounded-full"></div>
          </div>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-md">
            Mang dáng dấp thanh cao của quả lê, Tỳ Bà là nhạc cụ biểu trưng cho sự quý phái và kỹ nghệ điêu luyện của người nghệ sĩ Việt. Mỗi thanh âm phát ra là một câu chuyện về sự tinh xảo trong từng ngón gảy.
          </p>
          
          <InstrumentActionButtons studioLink="/studio?instrument=dan_ty_ba" constructionLink="#cau-tao" />
        </div>
        
        <div className="md:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-panel border-t-2 border-primary-container shadow-sm group">
          <div className="absolute inset-0 bg-surface-container-low opacity-50 z-0"></div>
          <div className="absolute inset-0 z-10 lacquer-pattern mix-blend-multiply opacity-20"></div>
          <img 
            alt="Đàn Tỳ Bà" 
            className="w-full h-full object-cover object-center z-20 relative transition-transform duration-700 group-hover:scale-105" 
            src={images['dan-ty-ba'].hero}
          />
        </div>
      </div>
    </section>
  );
}
