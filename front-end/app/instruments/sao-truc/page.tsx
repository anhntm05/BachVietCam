import React from 'react';
import HeroSection from '@/components/features/instruments/sao-truc/HeroSection';
import HistorySection from '@/components/features/instruments/sao-truc/HistorySection';
import AnatomySection from '@/components/features/instruments/sao-truc/AnatomySection';
import TechniqueSection from '@/components/features/instruments/sao-truc/TechniqueSection';
import GenresCarousel from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

const saoTrucGenres = [
  {
    id: 'nhac_dan_gian',
    title: 'Nhạc Dân Gian',
    desc: 'Âm hưởng đồng quê Việt Nam với những làn điệu dân ca ngọt ngào và mộc mạc nhất.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsVPD2lwhlG7Fl6_DC3izW-GhjcknKDtAqRJ4QT0SMIqbYEXjnY44tcD3mU10JnQNKbMVOsXcSwnI594ooXMkPyYIWmwjQQE766WZ9ps0xXVpiT0ToCAvlkhER_SEdUWIGrrvFUBd-WXyhxaCLnG7Y9o4O2yperA6vF4pFcPrch37Nv0xFzVj4YeiS9Tv6a1Rj5gwbOXzCGXHK_1xguZMnxK_e65xnyv0-g4RXvHJOENLIi8ULiREfwOcUkusiE0FFe19pgEJrHnu'
  },
  {
    id: 'cheo',
    title: 'Nghệ thuật Chèo',
    desc: 'Tiếng sáo trong dàn nhạc Chèo không chỉ giữ nhịp mà còn lột tả được những cung bậc hỉ nộ ái ố của nhân vật.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD68LdMkW81ChtgfuwHKA7phhSQRFCotC8N0reoCOIEwW3I6pzijtJHvlCMrCDWFnF3wqCgxTNKoWXRzonHVdrWCT7P2ZX4Tah1JtCpRKOT-xoU2H39KTxjXH_cga7WhxxfPj1xGI0nEmQHxXKN4jmFHblKt3Hy74Lr8IrdGTsTpUyh67gOeBzz8hZY5kFouTDEX1Uv8pYufswdmtGIY3yi7xgL3HeqEfG9B5HfbvLgiS6gtZaK6TCvj5NDyjtPCMJk8TUZOVM4QvkX',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'cai_luong',
    title: 'Cải Lương',
    desc: 'Giai điệu luyến láy đặc trưng của sáo trúc tạo nên linh hồn cho những câu vọng cổ thiết tha.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVkPxqmojI94VdWFkvwqqyPk_BFwvsW8e_KCZnnnLAJagyqjb0ZBJa2swCWCgVV5POk9N5jW3LEeAY15xxYe-qPWk_ze0Lvxi_Oyo7Tua1KbSiVmkZEMVmw88SCyZz-pyUXhNWqFsn5HS8f99z-TMksopUakCzREzqHFwJGKnLGSPFPHhQsA3s5Mr_PmZAzTV-FVIV1B9vMQ-6KJXCF6YCfVvk4rn06WOCAEe3epji8tD_k7jeNFJP8r-MrYaLYl4czk_G9w_qdaQI'
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
