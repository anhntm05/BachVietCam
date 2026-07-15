import React from 'react';
import HeroSection from '@/components/features/instruments/sao-truc/HeroSection';
import HistorySection from '@/components/features/instruments/sao-truc/HistorySection';
import AnatomySection from '@/components/features/instruments/sao-truc/AnatomySection';
import TechniqueSection from '@/components/features/instruments/sao-truc/TechniqueSection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

import images from '@/public/instrument-images.json';

const saoTrucGenres = [
  {
    id: 'nhac_dan_gian',
    title: 'Nhạc Dân Gian',
    desc: 'Âm hưởng đồng quê Việt Nam với những làn điệu dân ca ngọt ngào và mộc mạc nhất.',
    img: images.genres['sao-truc'].nhac_dan_gian
  },
  {
    id: 'cheo',
    title: 'Nghệ thuật Chèo',
    desc: 'Tiếng sáo trong dàn nhạc Chèo không chỉ giữ nhịp mà còn lột tả được những cung bậc hỉ nộ ái ố của nhân vật.',
    img: images.genres['sao-truc'].cheo,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'cai_luong',
    title: 'Cải Lương',
    desc: 'Giai điệu luyến láy đặc trưng của sáo trúc tạo nên linh hồn cho những câu vọng cổ thiết tha.',
    img: images.genres['sao-truc'].cai_luong
  }
];

export default function SaoTrucPage() {
  return (
    <main className="pt-24 pb-12">
      <HeroSection />
      <HistorySection />
      <AnatomySection />
      <TechniqueSection />
      
      <GenresCarousel 
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Từ những giai điệu dân gian ngọt ngào đến âm hưởng sân khấu kịch nghệ, sáo trúc luôn là ngôn ngữ của cảm xúc."
        genres={saoTrucGenres}
      />
      
      <InstrumentCTA 
        instrumentName="Sáo Trúc" 
        instrumentId="sao_truc"
        actionText="Trải nghiệm tại Studio"
        description="Gia nhập cộng đồng Bách Việt Cầm để trải nghiệm kho tàng âm nhạc dân tộc qua những mô phỏng âm thanh sáo trúc sống động nhất."
      />
    </main>
  );
}
