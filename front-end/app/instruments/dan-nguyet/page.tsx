import React from 'react';
import Link from 'next/link';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';
import HeroSection from '@/components/features/instruments/dan-nguyet/HeroSection';
import HistorySection from '@/components/features/instruments/dan-nguyet/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-nguyet/AnatomySection';
import TechniquesSection from '@/components/features/instruments/dan-nguyet/TechniquesSection';

const DAN_NGUYET_GENRES: Genre[] = [
  {
    id: 'cai-luong',
    title: 'Cải Lương',
    desc: 'Tiếng đàn gõ nhịp phách, hòa quyện cùng giọng hát uyển chuyển trong không gian văn hóa bác học miền Bắc.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUs2lyWbtqC2Us9EmItTK9S-eX15siGqVfmqIPHfFFI6PjXdHkodfRaDkZpIqmzO__wpflrClaoLsp89Xq_dm9SaVpSkdUssdMZUUHLf0SVUuYOoVxkaPx1HYiTgzpGl6areZvnmqgEwxVo9h25ga_yGYsuWkPs38brFE2tTLwoNbepBmHYW8I9PrS12qPjipXr1oKVgkZqZQ_zhH79jC4v8Re_0vEl1jjIND09YWALV9xKaOM6Q2hPek_K7csBzgpawYULlrAnNMh',
    tag: ''
  },
  {
    id: 'hat-van',
    title: 'Hát Văn (Hầu Đồng)',
    desc: 'Đàn Nguyệt là nhạc cụ chủ chốt tạo nên không khí linh thiêng, rộn rã trong các buổi hầu đồng, dẫn dắt cảm xúc người tham dự.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJPSAwwnhiuS0RojY-3GR42Np5Hf6OVL2TOvj5s0M_cPQPGqBDxUgLDs1obwnb1ofqec5MW6V8IpNH9Gf97GU9lbasdgBrJHw2t3Qh86Yq6MnBV8cxZ6mplAvJSc3MHjpVwWXtapJju184xnPCvJai4nahsuGJruSw2D74fUebx39sDUxKDQuOWW2_K0ayuNgIP-oGLHszivTwQpqnuzSaXt-qp4d-12pbdJXkLoUbSJATZbdSld2dlbgTONOqGH3QEWgcNobeLZ7N',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'don-ca-tai-tu',
    title: 'Đờn Ca Tài Tử Nam Bộ',
    desc: 'Đàn Nguyệt mang âm sắc trữ tình, hào sảng trong dòng chảy âm nhạc dân gian đặc thù của vùng đất phương Nam.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-dMZD0Yp06itAbnpJ52SbJMLltBYZZYPSkBb5FhaStMX0DldqobU_xnqrHP66NLMncsTyMKKM9rNY06nGzYR5dDrnuywDiZ15SepPA88Q-oh31yJ_nvyTGfz-SwPRDVXQs3DcWs7ssTdB_yDyVYb1v1jp6UHH4lhefv3tCKAASOLq0H2opYz2gB3ed7xyxxA60QJ8wnIpsSVexVcOFiNBSi6GINazGDhaUxzdSgU-qedpLst6__AMC1XcuInwVx9GJYMubQoUZm_v',
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
