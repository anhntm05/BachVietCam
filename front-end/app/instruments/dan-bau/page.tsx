import React from 'react';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';
import GenresCarousel, { Genre } from '@/components/features/instruments/GenresCarousel';
import InstrumentCTA from '@/components/features/instruments/InstrumentCTA';

const DAN_BAU_GENRES: Genre[] = [
  {
    id: 'hat-xam',
    title: 'Hát Xẩm',
    desc: 'Gắn liền với đời sống người dân lao động, tiếng Đàn Bầu trong Xẩm mang nét mộc mạc, kể chuyện đời đầy thăng trầm.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-dMZD0Yp06itAbnpJ52SbJMLltBYZZYPSkBb5FhaStMX0DldqobU_xnqrHP66NLMncsTyMKKM9rNY06nGzYR5dDrnuywDiZ15SepPA88Q-oh31yJ_nvyTGfz-SwPRDVXQs3DcWs7ssTdB_yDyVYb1v1jp6UHH4lhefv3tCKAASOLq0H2opYz2gB3ed7xyxxA60QJ8wnIpsSVexVcOFiNBSi6GINazGDhaUxzdSgU-qedpLst6__AMC1XcuInwVx9GJYMubQoUZm_v',
    tag: ''
  },
  {
    id: 'cai-luong',
    title: 'Cải Lương',
    desc: 'Trong không gian nghệ thuật bác học và sân khấu kịch hát, Đàn Bầu góp phần tạo nên những cao trào cảm xúc mãnh liệt.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUs2lyWbtqC2Us9EmItTK9S-eX15siGqVfmqIPHfFFI6PjXdHkodfRaDkZpIqmzO__wpflrClaoLsp89Xq_dm9SaVpSkdUssdMZUUHLf0SVUuYOoVxkaPx1HYiTgzpGl6areZvnmqgEwxVo9h25ga_yGYsuWkPs38brFE2tTLwoNbepBmHYW8I9PrS12qPjipXr1oKVgkZqZQ_zhH79jC4v8Re_0vEl1jjIND09YWALV9xKaOM6Q2hPek_K7csBzgpawYULlrAnNMh',
    tag: 'Tiêu Điểm'
  },
  {
    id: 'hoa-tau',
    title: 'Hòa Tấu Đương Đại',
    desc: 'Khi kết hợp với dàn nhạc giao hưởng hoặc nhạc điện tử, Đàn Bầu mang đến một hơi thở mới đầy sang trọng và bí ẩn.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XZukeR-Ntxc_7yzVT9A2P5-uKpkgrF8HYaqEdwhHW0mWzbQMDOCPfHTSwnuY3KfYp-f2N6fgY1vx2Flnar9wJzBu7VT95EWCz78K_-eh68jCiuO88fEku5CzO9WdmV_Fw2E42eVjjM71_gHCizeuLu159bef_xX9J8d1bmzs6yIS5VQWhj5WPjI1glT1RE0WE5vKLc0peoBQ76f8WDl9gMK3Nxs6V1tmwlCMixSOzHYwoVx0GvYh6q1kzmSSVFK0rsBDn0WJtgDw',
    tag: ''
  }
];

export default function DanBauPage() {
  return (
    <main className="pt-20 pb-12">
      {/* Sovereign Hero */}
      <section className="px-margin-desktop pt-4 pb-12 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[60vh]">
          <div className="md:col-span-5 flex flex-col justify-center space-y-6 z-10 mt-8 md:mt-0">
            <BackButton />
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary-container"></div>
              <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">Nhạc Cụ Dân Tộc</span>
            </div>
            <div className="relative">
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">ĐÀN BẦU</h1>
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary-container/40 rounded-full"></div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-md">
                Một dây mang cả âm hưởng hồn dân tộc. Biểu tượng của sự giản đơn tinh tế trong kho tàng nghệ thuật âm nhạc truyền thống Việt Nam.
            </p>
          </div>
          <div className="md:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-panel border-t-2 border-primary-container shadow-sm group">
            <div className="absolute inset-0 bg-surface-container-low opacity-50 z-0"></div>
            <div className="absolute inset-0 z-10 lacquer-pattern mix-blend-multiply opacity-20"></div>
            <img 
            alt="Dan Bau instrument in warm studio lighting" 
            className="w-full h-full object-cover object-center z-20 relative transition-transform duration-700 group-hover:scale-105" 
            src="https://traveldaily.com.vn/wp-content/uploads/2020/09/dan-bau.jpg" />
          </div>
        </div>
      </section>
      
      {/* Section 1: General Description & History */}
      <section className="px-margin-desktop py-20 max-w-container-max mx-auto bg-surface-container-low/30 rounded-3xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 pr-8">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Biên Niên Sử</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Nguồn Gốc &amp; Trường Tồn</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Hành trình từ nhạc cụ dân gian giản dị đến biểu tượng quốc hồn quốc túy của Việt Nam.</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-12 chronicle-scroll">
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container border-4 border-surface"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Truyền Thuyết Cổ Xưa</h4>
              <p className="font-body-md text-body-md text-on-surface-variant italic mb-4">"Làm thân con gái chớ nghe đàn bầu"</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Đàn Bầu (hay Độc Huyền Cầm) gắn liền với những câu chuyện về lòng hiếu thảo và sự tần tảo của người phụ nữ Việt. Khởi nguồn từ những ống tre, sợi mây đơn sơ, nhạc cụ này đã len lỏi vào đời sống tâm linh và giải trí của cư dân vùng đồng bằng Bắc Bộ từ hàng ngàn năm trước.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/60 border-4 border-surface"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thế Kỷ XIX - XX</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Đàn Bầu bắt đầu xuất hiện chính thức trong các văn bản cung đình và dần được cải tiến. Từ dây mây chuyển sang dây tơ, rồi dây sắt, giúp tiếng đàn thêm thanh mảnh, vang xa. Đây là giai đoạn Đàn Bầu khẳng định vị thế trong các loại hình nghệ thuật chuyên nghiệp.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-container/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-container/30 border-4 border-surface"></div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Thời Đại Kỹ Thuật Số</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Ngày nay, Đàn Bầu không chỉ bó hẹp trong âm nhạc truyền thống mà còn kết hợp với nhạc điện tử, jazz, và giao hưởng quốc tế, mang tiếng lòng Việt Nam vươn xa ra thế giới qua những nghệ sĩ bậc thầy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Structural Breakdown (Cấu tạo) - Enhanced Bento */}
      <section className="px-margin-desktop py-12 max-w-container-max mx-auto relative">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Cấu Tạo Chi Tiết</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm">
            <span className="material-symbols-outlined text-secondary mb-4">box_edit</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Thân Đàn (Bầu)</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hộp cộng hưởng dài khoảng 1m, thường làm bằng gỗ ngô đồng hoặc tre già, giúp khuếch đại âm thanh ấm áp và vang vọng.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm border-t-2 border-primary-container">
            <span className="material-symbols-outlined text-secondary mb-4">linear_scale</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Dây Đàn &amp; Trục</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Một sợi dây duy nhất bằng kim loại chạy dọc thân đàn, nối từ trục lên đến vòi voi, tạo nên dải âm phổ biến biến ảo.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl bento-border shadow-sm">
            <span className="material-symbols-outlined text-secondary mb-4">gesture</span>
            <h4 className="font-headline-sm text-headline-sm mb-2">Vòi Voi &amp; Quả Bầu</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Cần đàn dẻo làm bằng sừng trâu và quả bầu khô (nay thường bằng gỗ) là bộ phận quan trọng nhất để tạo độ rung và luyến láy.</p>
          </div>
          <div className="md:col-span-3 h-[300px] glass-panel rounded-xl bento-border flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 lacquer-pattern opacity-10"></div>
            <div className="text-center z-10 px-8">
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Sơ Đồ Tương Tác</p>
              <div className="flex gap-12 justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">1</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Đầu Đàn</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">2</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Thân Đàn</span>
                </div>
                <div className="h-[1px] w-16 bg-primary-container/30"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-2">3</div>
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Vòi Voi</span>
                </div>
              </div>
              <p className="mt-8 font-body-md text-on-surface-variant opacity-60">Không gian mô phỏng 3D chi tiết cấu trúc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Performance Theory (Lý thuyết cách đánh) */}
      <section className="px-margin-desktop py-20 max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-surface-container rounded-2xl p-1 aspect-video shadow-2xl overflow-hidden">
              <img alt="Nghệ sĩ biểu diễn đàn bầu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_eV5XbxzCBYIBKpN1wuTUouaKAVataEvcxBI-8-966S8e2HoTN6TB_-xk5byhXx0XjlhDPR-bhm8llXn47rqJYmwg9WTNkvF86tvkobRW9vZNHZoV-f8FmQoOyEqXaWHjh1iF7heUuUZM0vv7HjVMMjjRRhugCA64Mi_1VZuul3Zn7aaNIAR2EmVhzmXDQa7vhkKbTv3C4trgXoztY_sSFo-B4poG5i8Q1o4cdGzksSxUwOaE0e3aLDndYKdXPV8WzgRgjuWzrm9Y" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-8">
                <button className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition-all border border-white/30">
                  <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                </button>
                <span className="ml-4 text-white font-label-sm">Xem kỹ thuật tiếng bồi</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-secondary"></div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Nghệ Thuật Diễn Tấu</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Lý Thuyết &amp; Kỹ Thuật</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">waves</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Tiếng Bồi (Harmonics)</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Kỹ thuật đặc trưng nhất: nghệ sĩ chạm nhẹ cạnh bàn tay vào điểm nút trên dây đồng thời gảy để tạo ra âm thanh trong trẻo, cao vút.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Uốn Cần (Vòi)</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bằng cách uốn hoặc thả lỏng cần đàn (vòi voi), nghệ sĩ có thể thay đổi cao độ của một nốt nhạc, tạo nên những tiếng luyến, láy mềm mại như giọng hát con người.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">touch_app</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Gảy Dây</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sử dụng một chiếc que nhỏ làm từ gióng tre hoặc sừng, gảy vào dây tại các vị trí tính toán chính xác để cộng hưởng âm thanh hoàn hảo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Traditional Art Forms (Thể loại nghệ thuật) */}
      <GenresCarousel 
        subtitle='Từ chiếu xẩm dân gian đến sân khấu giao hưởng hiện đại, Đàn Bầu luôn giữ vai trò là "linh hồn" của bản nhạc.'
        genres={DAN_BAU_GENRES} 
      />

      {/* Contextual Studio Bridge (CTA) */}
      <InstrumentCTA 
        instrumentName="đàn Bầu"
        instrumentId="dan_bau"
        description="Bước vào Studio kỹ thuật số để trải nghiệm gảy đàn Bầu tương tác và khám phá các kỹ thuật biểu diễn cơ bản."
      />
    </main>
  );
}
