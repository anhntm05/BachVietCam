import React from 'react';

export default function TechniquesSection() {
  return (
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
  );
}
