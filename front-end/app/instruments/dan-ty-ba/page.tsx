import React from 'react';
import HeroSection from '@/components/features/instruments/dan-ty-ba/HeroSection';
import HistorySection from '@/components/features/instruments/dan-ty-ba/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-ty-ba/AnatomySection';
import TechniqueSection from '@/components/features/instruments/dan-ty-ba/TechniqueSection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

const tyBaGenres = [
  {
    id: 'nha_nhac',
    title: 'Nhã Nhạc',
    desc: 'Nhạc cung đình trang trọng, nơi Đàn Tỳ Bà giữ vai trò dẫn dắt giai điệu chính trong dàn Đại nhạc và Tiểu nhạc triều Nguyễn.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUs2lyWbtqC2Us9EmItTK9S-eX15siGqVfmqIPHfFFI6PjXdHkodfRaDkZpIqmzO__wpflrClaoLsp89Xq_dm9SaVpSkdUssdMZUUHLf0SVUuYOoVxkaPx1HYiTgzpGl6areZvnmqgEwxVo9h25ga_yGYsuWkPs38brFE2tTLwoNbepBmHYW8I9PrS12qPjipXr1oKVgkZqZQ_zhH79jC4v8Re_0vEl1jjIND09YWALV9xKaOM6Q2hPek_K7csBzgpawYULlrAnNMh',
  },
  {
    id: 'don_ca_tai_tu',
    title: 'Đờn Ca Tài Tử',
    desc: 'Âm nhạc dân gian thâm trầm của vùng đất phương Nam, nơi tiếng Tỳ Bà hòa quyện cùng đàn Kìm, đàn Tranh tạo nên không gian tâm tình sâu lắng.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-dMZD0Yp06itAbnpJ52SbJMLltBYZZYPSkBb5FhaStMX0DldqobU_xnqrHP66NLMncsTyMKKM9rNY06nGzYR5dDrnuywDiZ15SepPA88Q-oh31yJ_nvyTGfz-SwPRDVXQs3DcWs7ssTdB_yDyVYb1v1jp6UHH4lhefv3tCKAASOLq0H2opYz2gB3ed7xyxxA60QJ8wnIpsSVexVcOFiNBSi6GINazGDhaUxzdSgU-qedpLst6__AMC1XcuInwVx9GJYMubQoUZm_v',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'hoa_tau',
    title: 'Hòa Tấu Đương Đại',
    desc: 'Sự kết hợp táo bạo giữa âm sắc cổ truyền và các nhạc cụ phương Tây, mang lại hơi thở mới cho di sản Tỳ Bà.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XZukeR-Ntxc_7yzVT9A2P5-uKpkgrF8HYaqEdwhHW0mWzbQMDOCPfHTSwnuY3KfYp-f2N6fgY1vx2Flnar9wJzBu7VT95EWCz78K_-eh68jCiuO88fEku5CzO9WdmV_Fw2E42eVjjM71_gHCizeuLu159bef_xX9J8d1bmzs6yIS5VQWhj5WPjI1glT1RE0WE5vKLc0peoBQ76f8WDl9gMK3Nxs6V1tmwlCMixSOzHYwoVx0GvYh6q1kzmSSVFK0rsBDn0WJtgDw'
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
