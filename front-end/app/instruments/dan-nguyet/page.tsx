import React from 'react';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';
import GenresCarousel, { Genre } from '@/components/features/instruments/general/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/general/InstrumentCTA';

const DAN_NGUYET_GENRES: Genre[] = [
  {
    id: 'ca-tru',
    title: 'Ca Trù & Hát Ả Đào',
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
    <main className="pt-20 pb-20 relative overflow-hidden">
      {/* Floating Lotus Motifs */}
      <span className="material-symbols-outlined lotus-bg text-[400px] absolute top-20 -left-40 z-0 opacity-[0.03] pointer-events-none">filter_vintage</span>
      <span className="material-symbols-outlined lotus-bg text-[300px] absolute bottom-40 -right-20 z-0 opacity-[0.03] pointer-events-none">filter_vintage</span>

      {/* Hero Section */}
      <section className="px-margin-desktop pt-4 max-w-container-max mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-6">
            <BackButton />
            <div className="inline-flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              <span className="font-label-sm text-label-sm tracking-widest uppercase">Di Sản Nhạc Khí</span>
            </div>
            <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
              Đàn Nguyệt - <br />
              <span className="text-primary italic">Nguyệt Cầm Vang Bóng</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Mang dáng hình trăng rằm trọn vẹn, Đàn Nguyệt sở hữu âm sắc trong trẻo, réo rắt, là linh hồn của những buổi diễn xướng cung đình và nhịp phách tâm linh dân tộc.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/studio?instrument=dan_nguyet" className="bg-[#D4AF37] text-tertiary px-8 py-4 font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform rounded-full">
                Bắt đầu hành trình <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="#cau-tao" className="border-2 border-primary-container text-primary px-8 py-4 font-bold hover:bg-primary-container/10 transition-colors rounded-full flex items-center">
                Tìm hiểu cấu tạo
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md p-4 border border-primary-container/20 border-t-2 border-t-primary-container">
              <img alt="Đàn Nguyệt" className="w-full h-full object-cover rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida/AP1WRLuTPoJakV1G8xVCejZue9K00s98vo9670lIAafvz0MXlSLAQEQLuoegGnW3l4osw6lsDdIZXahfBZl62zjtRdhz0du_kFRgR8D75Js-xq_5H0WeaD943am0tBfU7PyN6NSIKLJjJnYoadUOuWa_1RFlhbgHEM1_ZfVHRjJ8zT3cR6xSNQefdQuO1jxb2UHmmZSK_bMHHVg2GcnYLaWLvqwtLfsfxaiS-j_oawSYDc-jY7Q3SfTLKRujT10P" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/40 backdrop-blur-md p-6 max-w-xs shadow-2xl border border-primary-container/20 border-t-2 border-t-primary-container rounded-xl">
              <p className="text-primary font-bold mb-1">Âm sắc thanh tao</p>
              <p className="text-sm text-on-surface-variant italic">"Tiếng đàn như rót mật vào tai, vừa trang nghiêm vừa trữ tình."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: History */}
      <section className="px-margin-desktop max-w-container-max mx-auto py-20 bg-surface-container-low/30 rounded-3xl mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 pr-8">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Xuất hiện tại Việt Nam từ thế kỷ XI, Đàn Nguyệt (hay Nguyệt Cầm) đã trải qua ngàn năm thăng trầm. Từ chốn cung đình tôn nghiêm đến những sân đình dân dã, nhạc cụ này đã khẳng định vị thế "độc tôn" trong dòng chảy âm nhạc dân tộc.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface group-hover:scale-125 transition-transform"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế kỷ XI</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ghi nhận sự xuất hiện trong các điêu khắc cổ. Đây là giai đoạn sơ khai khi nhạc cụ bắt đầu định hình và len lỏi vào đời sống tâm linh, âm nhạc dân gian của cư dân Việt cổ.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Lê - Nguyễn</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trở thành nhạc khí quan trọng đặc biệt trong Nhã nhạc Cung đình. Với âm sắc thanh cao, Đàn Nguyệt được ưu ái sử dụng trong các buổi đại lễ và yến tiệc hoàng gia, khẳng định vị thế quý phái.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 hover:border-primary-container transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface group-hover:scale-125 group-hover:bg-primary-container transition-all"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Đương đại</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nhạc khí chủ đạo không thể thiếu trong Hát Văn, Nhạc Tài Tử và các buổi biểu diễn đương đại. Đàn Nguyệt ngày nay còn được kết hợp với các loại hình âm nhạc mới, mang hơi thở dân tộc vươn tầm quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Construction */}
      <section id="cau-tao" className="px-margin-desktop py-12 max-w-container-max mx-auto relative mb-20 z-10 scroll-mt-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Tinh Xảo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Thân Đàn (Nguyệt)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Thường được làm bằng gỗ Trắc hoặc Cẩm lai, có hình tròn như mặt trăng rằm, tạo nên bầu cộng hưởng âm thanh vang và sáng.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm border-t-2 border-t-primary-container hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Dây Đàn &amp; Trục</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sử dụng 2 dây tơ hoặc nilon (Hò và Phan) cùng 4 trục gỗ đối xứng, cho phép người chơi điều chỉnh cao độ một cách linh hoạt.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-secondary/20 shadow-sm hover:-translate-y-1 hover:border-primary-container transition-all">
            <span className="material-symbols-outlined text-secondary mb-4">reorder</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Phím Đàn</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Gắn từ 8 đến 11 phím cao và mảnh dọc cần đàn dài, giúp tạo ra những khoảng nhấn và luyến láy đặc thù của nhạc Việt.</p>
          </div>
          <div className="md:col-span-3 h-[300px] bg-white/40 backdrop-blur-md rounded-xl border border-secondary/20 border-t-2 border-t-primary-container flex items-center justify-center relative overflow-hidden group mt-4">
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-10"></div>
            <div className="text-center z-10 px-8">
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Sơ Đồ Tương Tác</p>
              <div className="flex gap-12 justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">1</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Bầu Vang</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">2</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Cần Đàn</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">3</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Trục Đàn</span>
                </div>
              </div>
              <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Không gian mô phỏng 3D chi tiết cấu trúc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Performance Techniques */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-24 relative z-10">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border border-primary-container/20 border-t-2 border-t-primary-container relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-[120px]">queue_music</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Kỹ thuật ngón tay điêu luyện</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white/60 rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Nhấn</h5>
              <p className="text-sm">Tạo ra các âm luyến láy, rung ngân đặc trưng của nhạc Việt.</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Láy</h5>
              <p className="text-sm">Sử dụng đầu ngón tay gõ nhẹ vào dây tạo âm thanh hoa mỹ.</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Vê</h5>
              <p className="text-sm">Gảy liên tục vào một dây tạo hiệu ứng âm thanh dày dặn.</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg shadow-sm border border-outline-variant/30">
              <h5 className="font-bold text-tertiary mb-1">Ngón Phi</h5>
              <p className="text-sm">Kỹ thuật rải ngón trên cả 2 dây tạo sắc thái sôi nổi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Musical Genres */}
      <GenresCarousel
        title="Hồn Nhạc Trong Từng Thể Loại"
        subtitle="Từ chốn linh thiêng cửa đền đến sân khấu nghệ thuật bác học, Đàn Nguyệt luôn là linh hồn của những giai điệu bất hủ."
        genres={DAN_NGUYET_GENRES}
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
