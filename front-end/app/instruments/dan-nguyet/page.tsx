import React from 'react';
import Link from 'next/link';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';
import HeroSection from '@/components/features/instruments/dan-nguyet/HeroSection';
import HistorySection from '@/components/features/instruments/dan-nguyet/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-nguyet/AnatomySection';
import TechniquesSection from '@/components/features/instruments/dan-nguyet/TechniquesSection';

import images from '@/public/instrument-images.json';

const DAN_NGUYET_GENRES: Genre[] = [
  {
    id: 'cai-luong',
    title: 'Cải Lương',
    desc: 'Tiếng đàn gõ nhịp phách, hòa quyện cùng giọng hát uyển chuyển trong không gian văn hóa bác học miền Bắc.',
    img: images['dan-nguyet'].genre_cai_luong,
    tag: ''
  },
  {
    id: 'hat-van',
    title: 'Hát Văn (Hầu Đồng)',
    desc: 'Đàn Nguyệt là nhạc cụ chủ chốt tạo nên không khí linh thiêng, rộn rã trong các buổi hầu đồng, dẫn dắt cảm xúc người tham dự.',
    img: images['dan-nguyet'].genre_hat_van,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'don-ca-tai-tu',
    title: 'Đờn Ca Tài Tử Nam Bộ',
    desc: 'Đàn Nguyệt mang âm sắc trữ tình, hào sảng trong dòng chảy âm nhạc dân gian đặc thù của vùng đất phương Nam.',
    img: images['dan-nguyet'].genre_don_ca_tai_tu,
    tag: ''
  },
  {
    id: 'cheo',
    title: 'Chèo & Cải Lương',
    desc: 'Âm sắc mặn mà, luyến láy đặc trưng cho các vở kịch hát truyền thống.',
    img: images['dan-nguyet'].genre_cheo,
    tag: ''
  }
];

export default function DanNguyetPage() {
  return (
    <main className="pt-20">
      {/* Floating Lotus Motifs */}
      <span className="material-symbols-outlined lotus-bg text-[400px] absolute top-20 -left-40 z-0 opacity-[0.03] pointer-events-none">filter_vintage</span>
      <span className="material-symbols-outlined lotus-bg text-[300px] absolute bottom-40 -right-20 z-0 opacity-[0.03] pointer-events-none">filter_vintage</span>

      <HeroSection />
      <HistorySection />
      <AnatomySection />
      <TechniquesSection />

      {/* Section 4: Musical Genres */}
      <GenresCarousel
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Từ chốn linh thiêng cửa đền đến sân khấu nghệ thuật bác học, Đàn Nguyệt luôn là linh hồn của những giai điệu bất hủ."
        genres={DAN_NGUYET_GENRES}
        bgClass="bg-inverse-surface"
        isDark={true}
      />

      {/* Call to Action Section */}
      <InstrumentCTA
        instrumentName="Đàn Nguyệt"
        instrumentId="dan_nguyet"
        description="Tự tay trải nghiệm những âm điệu nghìn năm thông qua công nghệ mô phỏng âm thanh chân thực nhất."
      />
    </main>
  );
}
