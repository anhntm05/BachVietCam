import React from 'react';
import HeroSection from '@/components/features/instruments/dan-nhi/HeroSection';
import ChronicleSection from '@/components/features/instruments/dan-nhi/ChronicleSection';
import ConstructionSection from '@/components/features/instruments/dan-nhi/ConstructionSection';
import TechniqueSection from '@/components/features/instruments/dan-nhi/TechniqueSection';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

import images from '@/public/instrument-images.json';

const DAN_NHI_GENRES: Genre[] = [
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    desc: 'Người bạn tri kỷ của những nghệ sĩ hát xẩm trên các nẻo đường quê Việt.',
    img: images['dan-nhi'].genre_hat_xam,
    tag: ''
  },
  {
    id: 'nha-nhac',
    title: 'Nhã Nhạc Cung Đình',
    desc: 'Giữ vai trò chủ đạo trong việc dẫn dắt giai điệu của các đại nhạc cung đình.',
    img: images['dan-nhi'].genre_nha_nhac,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'cheo-cai-luong',
    title: 'Chèo & Cải Lương',
    desc: 'Âm sắc mặn mà, luyến láy đặc trưng cho các vở kịch hát truyền thống.',
    img: images['dan-nhi'].genre_cheo_cai_luong,
    tag: ''
  }
];

export default function DanNhiPage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ChronicleSection />
      <ConstructionSection />
      <TechniqueSection />
      
      {/* Section 4: Musical Genres */}
      <GenresCarousel
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Từ cung đình trang nghiêm đến hè phố mộc mạc"
        genres={DAN_NHI_GENRES}
        bgClass="bg-inverse-surface"
        isDark={true}
      />

      <InstrumentCTA
        instrumentName="đàn Nhị"
        instrumentId="dan_nhi"
        description="Bước vào Studio kỹ thuật số để trải nghiệm kéo đàn Nhị tương tác và khám phá các kỹ thuật biểu diễn cơ bản."
      />
    </main>
  );
}
