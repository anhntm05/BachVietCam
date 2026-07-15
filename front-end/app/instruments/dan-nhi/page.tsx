import React from 'react';
import HeroSection from '@/components/features/instruments/dan-nhi/HeroSection';
import ChronicleSection from '@/components/features/instruments/dan-nhi/ChronicleSection';
import ConstructionSection from '@/components/features/instruments/dan-nhi/ConstructionSection';
import TechniqueSection from '@/components/features/instruments/dan-nhi/TechniqueSection';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

const DAN_NHI_GENRES: Genre[] = [
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    desc: 'Người bạn tri kỷ của những nghệ sĩ hát xẩm trên các nẻo đường quê Việt.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVuYwfHAVAtS-9DZ7RzgzrEofOimOmxPSmZ8BjvjQfdXoROFO8JpX84yx_ktXNcpNMfDYcFAem0A2B6uqpiuTvkUSeMxkBjTd-JnLUVt6IyCEIVIyav4VhawV5ldIFdLSyUQ3_qDjUebcJVar_ucWBXpdFpHZA4y7LYvzlD-Q8s3WxqiULJ9-yJWmzxOEUuzyN_Fnaww4Jhd92nNY9s6E1whEfKaImOy03a1T0CnieWjOljPFpWDlUPaFXPADDGfXfcGhDOQC9H0xk',
    tag: ''
  },
  {
    id: 'nha-nhac',
    title: 'Nhã Nhạc Cung Đình',
    desc: 'Giữ vai trò chủ đạo trong việc dẫn dắt giai điệu của các đại nhạc cung đình.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuEyxNUox8SHhjtVeezxEbgW7SBA7H2WZNn0sLps5KT5fMnfZojH2Fm5nl1H_BPwPkeoYXjh5Xpx-NDs-djs8IQ36cbpb1_QwvDHQ1EFB9-Nm2lnJolIYatOhHb_5avohfHVx8-hW4ZjyGQMQElSWRSQrYkItGsdEVEpACmfpC-fAebJ2NMm8pOjAI0LElVATnICmORt305rEY3O2LkjFcJOrZ63ULyIE80Q6E9qAFx7Nrq9HpOZm8PfO_mUy1wU1Zsb9XFEYf46YN',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'cheo-cai-luong',
    title: 'Chèo & Cải Lương',
    desc: 'Âm sắc mặn mà, luyến láy đặc trưng cho các vở kịch hát truyền thống.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt3dCPLG9E7-YkwSbKT_fgZR4WSNpMB2JjkDyVytgeEfw86tts37HAZ3_a3EpSVgt3iii_sNzJNwJLt6eXkfDGGGTEMYKlEyJvarm_LV91029GR5Hcrj0j1UYf1PGEoxHOcp3fMFKWgOH06flRykURC0XtRN9urE7KcGdUHpXE2y67pvFEkUCSX0WiW37ZGdZpnnXlkGuB4lNPBUCfIuraV3VghInTxM0U1DZACzqQ_b4L-ivLXgQmmtRzjZK7Bq83YEPdSEGoYfW9',
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
