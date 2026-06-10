import React from 'react';
import Link from 'next/link';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';
import HeroSection from '@/components/features/instruments/dan-bau/HeroSection';
import HistorySection from '@/components/features/instruments/dan-bau/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-bau/AnatomySection';
import TechniquesSection from '@/components/features/instruments/dan-bau/TechniquesSection';

const DAN_BAU_GENRES: Genre[] = [
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    desc: 'Gắn liền với đời sống người dân lao động, tiếng Đàn Bầu trong Xẩm mang nét mộc mạc, kể chuyện đời đầy thăng trầm.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-dMZD0Yp06itAbnpJ52SbJMLltBYZZYPSkBb5FhaStMX0DldqobU_xnqrHP66NLMncsTyMKKM9rNY06nGzYR5dDrnuywDiZ15SepPA88Q-oh31yJ_nvyTGfz-SwPRDVXQs3DcWs7ssTdB_yDyVYb1v1jp6UHH4lhefv3tCKAASOLq0H2opYz2gB3ed7xyxxA60QJ8wnIpsSVexVcOFiNBSi6GINazGDhaUxzdSgU-qedpLst6__AMC1XcuInwVx9GJYMubQoUZm_v',
    tag: ''
  },
  {
    id: 'cai-luong',
    title: 'Cải Lương',
    desc: 'Trong không gian nghệ thuật bác học và sân khấu kịch hát, Đàn Bầu góp phần tạo nên những cao trào cảm xúc mãnh liệt.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUs2lyWbtqC2Us9EmItTK9S-eX15siGqVfmqIPHfFFI6PjXdHkodfRaDkZpIqmzO__wpflrClaoLsp89Xq_dm9SaVpSkdUssdMZUUHLf0SVUuYOoVxkaPx1HYiTgzpGl6areZvnmqgEwxVo9h25ga_yGYsuWkPs38brFE2tTLwoNbepBmHYW8I9PrS12qPjipXr1oKVgkZqZQ_zhH79jC4v8Re_0vEl1jjIND09YWALV9xKaOM6Q2hPek_K7csBzgpawYULlrAnNMh',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'hoa-tau',
    title: 'Hòa Tấu Đương Đại',
    desc: 'Khi kết hợp với dàn nhạc giao hưởng hoặc nhạc điện tử, Đàn Bầu mang đến một hơi thở mới đầy sang trọng và bí ẩn.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XZukeR-Ntxc_7yzVT9A2P5-uKpkgrF8HYaqEdwhHW0mWzbQMDOCPfHTSwnuY3KfYp-f2N6fgY1vx2Flnar9wJzBu7VT95EWCz78K_-eh68jCiuO88fEku5CzO9WdmV_Fw2E42eVjjM71_gHCizeuLu159bef_xX9J8d1bmzs6yIS5VQWhj5WPjI1glT1RE0WE5vKLc0peoBQ76f8WDl9gMK3Nxs6V1tmwlCMixSOzHYwoVx0GvYh6q1kzmSSVFK0rsBDn0WJtgDw',
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
