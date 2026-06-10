import React from 'react';

export default function ChronicleSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Nguồn Gốc &amp; Trường Tồn</h2>
          <div className="section-divider"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex relative group">
            <div className="gold-bullet mt-2"><div className="vertical-line"></div></div>
            <div className="pb-8">
              <span className="font-display-lg text-headline-sm text-primary block mb-2">Thế kỷ X - Khởi Thủy</span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Xuất hiện từ thời nhà Đinh, tiền thân là cây đàn Cầm của vùng Á Đông, dần được Việt hóa để phù hợp với tâm hồn và bản sắc riêng của người Việt qua nhiều thế kỷ.
              </p>
            </div>
          </div>
          <div className="flex relative group">
            <div className="gold-bullet mt-2"><div className="vertical-line"></div></div>
            <div className="pb-8">
              <span className="font-display-lg text-headline-sm text-primary block mb-2">Triều Nguyễn - Nhã Nhạc Cung Đình</span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Trở thành nhạc khí không thể thiếu trong dàn Tiểu nhạc và Đại nhạc, phục vụ các nghi lễ trang trọng, mang tính biểu tượng văn hóa cao quý chốn cung đình Huế xưa.
              </p>
            </div>
          </div>
          <div className="flex relative group last-item">
            <div className="gold-bullet mt-2"></div>
            <div>
              <span className="font-display-lg text-headline-sm text-primary block mb-2">Thời Đại Mới - Sức Sống Đương Đại</span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Vượt ra khỏi không gian truyền thống, Đàn Nhị nay hòa mình vào các dàn nhạc giao hưởng hiện đại, các dự án âm nhạc đương đại, giữ vững vị thế là nhạc cụ tiêu biểu của Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
