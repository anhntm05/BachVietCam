import React from 'react';
import Link from 'next/link';

interface InstrumentActionButtonsProps {
  studioLink: string;
  constructionLink: string;
}

export default function InstrumentActionButtons({ studioLink, constructionLink }: InstrumentActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-5">
      <Link href={studioLink} className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all">
        Khám Phá Âm Sắc
        <span className="material-symbols-outlined text-xl">play_arrow</span>
      </Link>
      <a href={constructionLink} className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-all text-center inline-block">
        Tìm Hiểu Cấu Tạo
      </a>
    </div>
  );
}
