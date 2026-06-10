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
            Đàn Tranh - <br/>
            <span className="text-primary italic">Tiếng Tơ Lòng</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Với 16 đến 17 dây tơ óng ả, Đàn Tranh mang trong mình âm thanh trong trẻo, réo rắt như tiếng suối ngàn năm đổ về lòng người Việt. Một tuyệt tác của sự tinh tế và tâm hồn dân tộc.
          </p>
          <InstrumentActionButtons studioLink="/studio?instrument=dan_tranh" constructionLink="#cau-tao" />
        </div>
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel p-4">
            <img 
              alt="Đàn Tranh Heritage" 
              className="w-full h-full object-cover rounded-xl shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvxbN8V_WnpwWKH5RuZnZuPkK5IeWQonjvc03kW6k06-m1lI1juSSYZvvdR-WpNz8yDJHNZe5B9T1_3jldW5oxZSDBKupo5mQycM3WRIgHLa2f6V4QWoH_aqFDFNFreN-83EsfEnp6G16SbB272w7M_jKDDuS53FWB4oRW1qW_VLn0M3LtdmluV6LVpAqKcEnJg4Lp17IPIN1Um50t0o8TTc87SMcugF0QuMmerUDzpE_6KbDumamOJ2TA"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-6 max-w-xs shadow-2xl">
            <p className="text-primary font-bold mb-1">Âm thanh suối nguồn</p>
            <p className="text-sm text-on-surface-variant italic">"Tiếng đàn réo rắt, trong ngần như pha lê gõ vào không gian."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
