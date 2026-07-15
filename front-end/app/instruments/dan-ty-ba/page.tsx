import React from 'react';
import HeroSection from '@/components/features/instruments/dan-ty-ba/HeroSection';
import HistorySection from '@/components/features/instruments/dan-ty-ba/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-ty-ba/AnatomySection';
import TechniqueSection from '@/components/features/instruments/dan-ty-ba/TechniqueSection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

import images from '@/public/instrument-images.json';

const tyBaGenres = [
  {
    id: 'nha_nhac',
    title: 'Nhã Nhạc',
    desc: 'Nhạc cung đình trang trọng, nơi Đàn Tỳ Bà giữ vai trò dẫn dắt giai điệu chính trong dàn Đại nhạc và Tiểu nhạc triều Nguyễn.',
    img: images['dan-ty-ba'].genre_nha_nhac,
  },
  {
    id: 'don_ca_tai_tu',
    title: 'Đờn Ca Tài Tử',
    desc: 'Âm nhạc dân gian thâm trầm của vùng đất phương Nam, nơi tiếng Tỳ Bà hòa quyện cùng đàn Kìm, đàn Tranh tạo nên không gian tâm tình sâu lắng.',
    img: images['dan-ty-ba'].genre_don_ca_tai_tu,
    tag: 'Tiêu Điểm'
  },
  {
    id: 'hoa_tau',
    title: 'Hòa Tấu Đương Đại',
    desc: 'Sự kết hợp táo bạo giữa âm sắc cổ truyền và các nhạc cụ phương Tây, mang lại hơi thở mới cho di sản Tỳ Bà.',
    img: images['dan-ty-ba'].genre_hoa_tau
  }
];

export default function DanTyBaPage() {
  return (
    <main className="pt-24 pb-12">
      <HeroSection />
      <HistorySection />
      <AnatomySection />
      <TechniqueSection />
      
      <GenresCarousel 
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Tỳ Bà hiện diện trong những không gian nghệ thuật tinh túy nhất, từ đền đài cung điện đến những buổi đờn ca tài tử thâm trầm."
        genres={tyBaGenres}
      />
      
      <InstrumentCTA 
        instrumentName="Đàn Tỳ Bà" 
        instrumentId="dan_ty_ba"
        actionText="Bắt đầu ngay"
        description="Bước vào Studio kỹ thuật số để trải nghiệm gảy đàn Tỳ Bà tương tác và khám phá thư viện âm thanh đa chiều của chúng tôi."
      />
    </main>
  );
}
