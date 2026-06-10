import React from 'react';
import Link from 'next/link';

interface InstrumentCTAProps {
  instrumentName: string;
  instrumentId: string;
  actionText?: string;
  description?: string;
}

export default function InstrumentCTA({ 
  instrumentName, 
  instrumentId, 
  actionText = "Khởi Hành Tập Luyện",
  description = `Bước vào Studio kỹ thuật số để trải nghiệm chơi ${instrumentName} tương tác và khám phá các kỹ thuật biểu diễn cơ bản.`
}: InstrumentCTAProps) {
  return (
    <section className="px-margin-desktop py-20 max-w-container-max mx-auto">
      <div className="bg-surface-container-lowest rounded-2xl p-12 text-center relative overflow-hidden bento-border border-t-2 border-primary-container shadow-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Bắt Đầu Hành Trình Âm Nhạc</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              {description}
          </p>
          <Link href={`/studio?instrument=${instrumentId}`} className="inline-flex items-center gap-2 bg-on-surface text-surface font-label-sm text-label-sm px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300">
            <span className="">{actionText}</span>
            <span className="material-symbols-outlined">play_circle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
