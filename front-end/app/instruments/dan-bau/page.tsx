import React from 'react';
import Link from 'next/link';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';
import HeroSection from '@/components/features/instruments/dan-bau/HeroSection';
import HistorySection from '@/components/features/instruments/dan-bau/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-bau/AnatomySection';
import TechniquesSection from '@/components/features/instruments/dan-bau/TechniquesSection';

import images from '@/public/instrument-images.json';

const DAN_BAU_GENRES: Genre[] = [
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    desc: 'Gắn liền với đời sống người dân lao động, tiếng Đàn Bầu trong Xẩm mang nét mộc mạc, kể chuyện đời đầy thăng trầm.',
    img: images['dan-bau'].genre_hat_xam,
    tag: ''
  },
  {
    id: 'cai-luong',
    title: 'Cải Lương',
    desc: 'Trong không gian nghệ thuật bác học và sân khấu kịch hát, Đàn Bầu góp phần tạo nên những cao trào cảm xúc mãnh liệt.',
    img: images['dan-bau'].genre_cai_luong,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'hoa-tau',
    title: 'Hòa Tấu Đương Đại',
    desc: 'Khi kết hợp với dàn nhạc giao hưởng hoặc nhạc điện tử, Đàn Bầu mang đến một hơi thở mới đầy sang trọng và bí ẩn.',
    img: images['dan-bau'].genre_hoa_tau,
    tag: ''
  }
];

export default function DanBauPage() {
  return (
    <main className="pt-20 pb-12">
      <HeroSection />
      <HistorySection />
      <AnatomySection />
      <TechniquesSection />

      {/* Section 4: Traditional Art Forms (Thể loại nghệ thuật) */}
      <GenresCarousel
        subtitle='Từ chiếu xẩm dân gian đến sân khấu giao hưởng hiện đại, Đàn Bầu luôn giữ vai trò là "linh hồn" của bản nhạc.'
        genres={DAN_BAU_GENRES}
      />

      {/* Contextual Studio Bridge (CTA) */}
      <InstrumentCTA
        instrumentName="đàn Bầu"
        instrumentId="dan_bau"
        description="Bước vào Studio kỹ thuật số để trải nghiệm gảy đàn Bầu tương tác và khám phá các kỹ thuật biểu diễn cơ bản."
      />
    </main>
  );
}
