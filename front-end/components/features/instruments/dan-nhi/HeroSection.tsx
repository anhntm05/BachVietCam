import React from 'react';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';
import InstrumentActionButtons from '@/components/features/instruments/general/InstrumentActionButtons';

export default function HeroSection() {
  return (
    <section className="hero-gradient h-full min-h-[85vh] flex flex-col md:flex-row items-center overflow-hidden">
      <div className="w-full md:w-1/2 px-margin-mobile md:px-margin-desktop py-12 flex flex-col justify-center mt-12 md:mt-0">
        <BackButton />
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary-container"></div>
          <span className="font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase">Nhạc Cụ Dân Tộc</span>
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">ĐÀN NHỊ</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed italic">
          "Tiếng đàn như tiếng tơ lòng, lúc nỉ non sầu thảm, lúc lại réo rắt vui tươi, len lỏi qua từng kẽ lá, chạm đến những miền cảm xúc thẳm sâu nhất của tâm hồn Việt."
        </p>
          <InstrumentActionButtons studioLink="/studio?instrument=dan_nhi" constructionLink="#cau-tao" />
      </div>
      <div className="w-full md:w-1/2 relative h-full md:h-[85vh]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A cinematic, high-end photography of a professional Vietnamese Dan Nhi fiddle crafted from polished dark mahogany wood with intricate mother-of-pearl inlays. The instrument is set against a minimalist Light Stone studio background with soft amber side-lighting."
          src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/615342957_2754369714926791_3833441697048156022_n.jpg?stp=dst-jpg_tt6&cstp=mx1284x1752&ctp=s1284x1752&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeED7ZT5QR3VV-bIBmWUUjsV84ekRHMQIo_zh6REcxAij2kWQpxDCp4nr998gFJVaT7KHNLjSr3ilTXg5wSfh-xF&_nc_ohc=wDNNr2yif74Q7kNvwFynbXW&_nc_oc=Adp0lE53dto0_wCH6EknQjiATqo3Si7ZYKZDlcCMsdcm6hIJSBei1qWWQgagmXuo7lFbI0IHnUflcCy2Oiy4mV2i&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=z6ToscIPcegv1kAd4xraUQ&_nc_ss=7b2a8&oh=00_Af-d8_FUZHkxO7eVJLLhxI64jDE817OsIPbJEy2Nf8fLYw&oe=6A2C040E"
        />
      </div>
    </section>
  );
}
