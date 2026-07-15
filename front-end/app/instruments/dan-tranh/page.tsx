import React from 'react';
import HeroSection from '@/components/features/instruments/dan-tranh/HeroSection';
import HistorySection from '@/components/features/instruments/dan-tranh/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-tranh/AnatomySection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

import images from '@/public/instrument-images.json';

const tranhGenres = [
  {
    id: 'nhac_tai_tu',
    title: 'Nhạc Tài Tử',
    desc: 'Dòng nhạc thâm trầm của những tâm hồn tri kỷ phương Nam, nơi tiếng tranh hòa quyện cùng bầu, kìm.',
    img: images.genres['dan-tranh'].nhac_tai_tu
  },
  {
    id: 'cai_luong',
    title: 'Cải Lương',
    desc: 'Giai điệu cải biên rộn rã, thổi hồn đương đại vào những tuồng tích cổ, tiếng Đàn Tranh giữ nhịp dẫn dắt vở diễn.',
    img: images.genres['dan-tranh'].cai_luong,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'nha_nhac',
    title: 'Nhã Nhạc',
    desc: 'Âm nhạc bác học đỉnh cao của triều đình Huế, nơi Đàn Tranh phô diễn sắc thái trang trọng, uy nghi nhất.',
    img: images.genres['dan-tranh'].nha_nhac
  }
];

export default function DanTranhPage() {
  return (
    <main className="pt-24 pb-12">
      <HeroSection />
      <HistorySection />
      <AnatomySection />
      
      <GenresCarousel 
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Từ dòng nhạc thâm trầm phương Nam đến âm hưởng bác học triều đình, Đàn Tranh luôn là linh hồn dẫn dắt mọi cảm xúc."
        genres={tranhGenres}
      />
      
      <InstrumentCTA 
        instrumentName="Đàn Tranh" 
        instrumentId="dan_tranh"
        actionText="Bắt Đầu Hành Trình"
        description="Tự tay trải nghiệm những âm điệu nghìn năm thông qua công nghệ mô phỏng âm thanh Đàn Tranh chân thực nhất."
      />
    </main>
  );
}
