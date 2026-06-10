import React from 'react';

export default function MissionSection() {
  return (
    <section className="px-margin-desktop mb-32">
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-7 bg-[#FFFBEB] border border-amber-500/20 hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300 p-12 rounded-xl flex flex-col justify-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Sứ Mệnh Số Hóa Di Sản</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            Bách Việt Cầm không chỉ là một dự án công nghệ; đó là một "Xưởng chế tác kỹ thuật số" (Digital Atelier), nơi mỗi phím đàn, mỗi âm vang được tái tạo với sự trân trọng tuyệt đối dành cho lịch sử. Chúng tôi tin rằng âm nhạc truyền thống là sợi dây kết nối linh thiêng giữa quá khứ và tương lai.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Bằng cách lưu trữ và mô phỏng chính xác các nhạc cụ cổ truyền như Đàn Bầu, Đàn Tranh, Đàn Tỳ Bà... chúng tôi mang hồn Việt đến gần hơn với thế hệ trẻ và bạn bè quốc tế thông qua những trải nghiệm tương tác tinh tế.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 relative min-h-[400px] overflow-hidden rounded-xl">
          <img 
            alt="Traditional Craft" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_O7RRU1Jlm9y-xMAYERoReArrWt602JhVIpWrD27igyVf9QoCpgdbqYnMDdgQD002OMsvU3jh2qcGvXXhOPa5H5LN2nqcwDsqBdIqx9123Sh671u3AIXYVwOl6jbip4kyEW0hJiTKZlOQZEwyYYwszERsxgLdeK1Hxdd29IM4wyTKIDyGxaUdYCi9k3EtkEtuXp9r9AHSav5U71WrxN71BNPN8UPNW7iqGdn3TRbbQnEGO0RjkeDY7rBQ3e70drcIY1s28uScOuGr"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <p className="text-white font-label-sm italic">"Chạm vào âm thanh, gìn giữ tâm hồn."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
