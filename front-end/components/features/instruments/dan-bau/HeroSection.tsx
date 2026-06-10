import React from 'react';
import BackButton from '@/components/ui/BackButton';
import InstrumentActionButtons from '@/components/features/instruments/general/InstrumentActionButtons';

export default function HeroSection() {
  return (
    <section className="px-margin-desktop pt-4 pb-12 max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[60vh]">
        <div className="md:col-span-5 flex flex-col justify-center space-y-6 z-10 mt-8 md:mt-0">
          <BackButton />
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary-container"></div>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Nhạc Cụ Dân Tộc</span>
          </div>
          <div className="relative">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">ĐÀN BẦU</h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary-container/40 rounded-full"></div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-md">
            Một dây mang cả âm hưởng hồn dân tộc. Biểu tượng của sự giản đơn tinh tế trong kho tàng nghệ thuật âm nhạc truyền thống Việt Nam.
          </p>
          <div className="pt-4">
            <InstrumentActionButtons studioLink="/studio?instrument=dan_bau" constructionLink="#cau-tao" />
          </div>
        </div>
        <div className="md:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-panel border-t-2 border-primary-container shadow-sm group">
          <div className="absolute inset-0 bg-surface-container-low opacity-50 z-0"></div>
          <div className="absolute inset-0 z-10 lacquer-pattern mix-blend-multiply opacity-20"></div>
          <img
            alt="Dan Bau instrument in warm studio lighting"
            className="w-full h-full object-cover object-center z-20 relative transition-transform duration-700 group-hover:scale-105"
            src="https://traveldaily.com.vn/wp-content/uploads/2020/09/dan-bau.jpg" />
        </div>
      </div>
    </section>
  );
}
