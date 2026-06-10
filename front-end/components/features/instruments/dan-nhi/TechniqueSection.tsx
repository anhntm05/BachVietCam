import React from 'react';

export default function TechniqueSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Lý Thuyết &amp; Kỹ Thuật</h2>
          <div className="section-divider"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative aspect-video bg-surface-container-highest rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
            <img alt="Tutorial" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvWNdk4somAtiyX12Ky_H_1Zvy0EoMUFazqgkREXwCjIBYVry32Bu3L8o8rMXQ0PHHOju9pWpB6piV7DscxLcjA6UqmqUo-RY3iymboMl-T20JmTIbEIcApZxuieKISJwALbMTct4wEnDfpzeuHJhOT_UqxQlN1afDSDd0gwQmWP8DEVOlnJz-psftoxNkbMSuD6WvX549b1Ijm_rytBE-HS6NGaDzu63CjU2czW6wHHq3nQjSz94QNroLLpsRrLXPvwJKhKJQufY5" />
            <div className="z-10 bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40 cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="flex gap-6">
              <div className="bg-primary-container/20 p-4 h-fit rounded-xl">
                <span className="material-symbols-outlined text-primary">waves</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Ngón Rung (Vibrato)</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Sử dụng đầu ngón tay tạo ra sự dao động nhẹ nhàng trên dây đàn, tạo nên âm thanh mềm mại, sâu lắng như tiếng thở dài.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-primary-container/20 p-4 h-fit rounded-xl">
                <span className="material-symbols-outlined text-primary">touch_app</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Ngón Nhấn (Pressure)</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Kỹ thuật thay đổi cao độ bằng cách nhấn mạnh hoặc nhẹ lên dây, cho phép người chơi thực hiện các quãng vuốt tinh tế.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-primary-container/20 p-4 h-fit rounded-xl">
                <span className="material-symbols-outlined text-primary">motion_photos_on</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Kéo Vĩ (Bowing)</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Điều khiển lực và tốc độ của cung vĩ để tạo ra các sắc thái từ mạnh mẽ, dứt khoát đến dịu êm, uyển chuyển.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
