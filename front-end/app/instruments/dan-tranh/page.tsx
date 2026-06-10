import React from 'react';
import HeroSection from '@/components/features/instruments/dan-tranh/HeroSection';
import HistorySection from '@/components/features/instruments/dan-tranh/HistorySection';
import AnatomySection from '@/components/features/instruments/dan-tranh/AnatomySection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

const tranhGenres = [
  {
    id: 'nhac_tai_tu',
    title: 'Nhạc Tài Tử',
    desc: 'Dòng nhạc thâm trầm của những tâm hồn tri kỷ phương Nam, nơi tiếng tranh hòa quyện cùng bầu, kìm.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUlSz8NlUrBaEyd8cCqDCEUd1zhHw41syTvAZE67HOT6Bq4FK3yj0W2ED97ZSSr2x50yg3fDU3Me2yrQzcSTNPJez5xrNgwHTFa5jmLlNAFqyLKydlC5e-jig3ubg3kkFqt6kSW6jWNLpmeJnNCLpu983cTFVBWUGZspQj9icE92Oen7nkzN21tAnPHzm4fHiP-a2w3Pf4h1PgtBhX_v64a9qd1peBDU0Xsr-kh2IvYyRk08ZEnzfeVxYfPk1DIrMKu6WIUoZwiVxF'
  },
  {
    id: 'cai_luong',
    title: 'Cải Lương',
    desc: 'Giai điệu cải biên rộn rã, thổi hồn đương đại vào những tuồng tích cổ, tiếng Đàn Tranh giữ nhịp dẫn dắt vở diễn.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVkPxqmojI94VdWFkvwqqyPk_BFwvsW8e_KCZnnnLAJagyqjb0ZBJa2swCWCgVV5POk9N5jW3LEeAY15xxYe-qPWk_ze0Lvxi_Oyo7Tua1KbSiVmkZEMVmw88SCyZz-pyUXhNWqFsn5HS8f99z-TMksopUakCzREzqHFwJGKnLGSPFPHhQsA3s5Mr_PmZAzTV-FVIV1B9vMQ-6KJXCF6YCfVvk4rn06WOCAEe3epji8tD_k7jeNFJP8r-MrYaLYl4czk_G9w_qdaQI',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'nha_nhac',
    title: 'Nhã Nhạc',
    desc: 'Âm nhạc bác học đỉnh cao của triều đình Huế, nơi Đàn Tranh phô diễn sắc thái trang trọng, uy nghi nhất.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD68LdMkW81ChtgfuwHKA7phhSQRFCotC8N0reoCOIEwW3I6pzijtJHvlCMrCDWFnF3wqCgxTNKoWXRzonHVdrWCT7P2ZX4Tah1JtCpRKOT-xoU2H39KTxjXH_cga7WhxxfPj1xGI0nEmQHxXKN4jmFHblKt3Hy74Lr8IrdGTsTpUyh67gOeBzz8hZY5kFouTDEX1Uv8pYufswdmtGIY3yi7xgL3HeqEfG9B5HfbvLgiS6gtZaK6TCvj5NDyjtPCMJk8TUZOVM4QvkX'
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
