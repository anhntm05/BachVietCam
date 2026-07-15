'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import images from '@/public/instrument-images.json';

const INSTRUMENTS_DATA = [
  {
    id: 'dan-bau',
    name: 'Đàn Bầu',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: '"Tiếng đàn bầu, cung thanh là tiếng mẹ, cung trầm là giọng cha." Nhạc cụ độc huyền với âm sắc u huyền và sâu lắng bậc nhất tâm hồn Việt.',
    image: images['dan-bau'].hero,
    altText: 'Đàn Bầu',
  },
  {
    id: 'dan-nhi',
    name: 'Đàn Nhị',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Cây vĩ cầm của Á Đông, sở hữu âm sắc biểu cảm tương tự giọng hát con người. Từ tiếng than vãn nỉ non đến những giai điệu rộn rã đón xuân.',
    image: images['dan-nhi'].hero,
    altText: 'Đàn Nhị',
  },
  {
    id: 'dan-tranh',
    name: 'Đàn Tranh',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Sự kết hợp hoàn hảo giữa kỹ thuật gảy điêu luyện và âm sắc lanh lảnh như tiếng suối reo. Một biểu tượng của sự thanh cao và quý tộc.',
    image: images['dan-tranh'].hero,
    altText: 'Đàn Tranh',
  },
  {
    id: 'sao-truc',
    name: 'Sáo Trúc',
    category: 'wind',
    categoryLabel: 'Bộ Hơi',
    desc: 'Hơi thở của đồng nội, thanh âm của gió ngàn. Mang trong mình linh hồn của làng quê Việt Nam qua hàng ngàn năm lịch sử.',
    image: images['sao-truc'].hero,
    altText: 'Sáo Trúc',
  },
  {
    id: 'dan-nguyet',
    name: 'Đàn Nguyệt',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Nhạc cụ hình trăng rằm, giữ vai trò quan trọng trong nhạc tài tử, chèo và chầu văn. Âm thanh tươi sáng, rộn ràng mà vẫn rất đỗi trang trọng.',
    image: images['dan-nguyet'].hero,
    altText: 'Đàn Nguyệt',
  },
  {
    id: 'dan-ty-ba',
    name: 'Đàn Tì Bà',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Nhạc cụ hình quả lê, biểu tượng của vẻ đẹp cổ điển và quý phái. Thường xuất hiện trong các dàn nhạc cung đình và hòa tấu nghệ thuật cao.',
    image: images['dan-ty-ba'].hero,
    altText: 'Đàn Tì Bà',
  },
];

export default function InstrumentsDirectory() {
  const [filter, setFilter] = useState('all');

  const filteredInstruments = INSTRUMENTS_DATA.filter((inst) => {
    if (filter === 'all') return true;
    return inst.category === filter;
  });

  return (
    <>
      <section className="px-margin-desktop mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'all' ? 'glass-card bg-primary-container text-on-primary-container font-bold' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">music_note</span> TẤT CẢ
          </button>
          <button 
            onClick={() => setFilter('string')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'string' ? 'glass-card bg-primary-container text-on-primary-container font-bold' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">line_weight</span> BỘ DÂY
          </button>
          <button 
            onClick={() => setFilter('wind')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'wind' ? 'glass-card bg-primary-container text-on-primary-container font-bold' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">air</span> BỘ HƠI
          </button>
          <button 
            onClick={() => setFilter('percussion')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'percussion' ? 'glass-card bg-primary-container text-on-primary-container font-bold' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">layers</span> BỘ GÕ
          </button>
        </div>
      </section>

      <section className="px-margin-desktop pb-24 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredInstruments.map((inst) => (
            <div key={inst.id} className="group relative overflow-hidden bento-panel rounded-2xl p-6 flex flex-col justify-between h-[520px] transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="h-64 rounded-xl overflow-hidden relative mb-6">
                <img alt={inst.altText || inst.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={inst.image} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold rounded tracking-widest uppercase">
                    {inst.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="flex-grow space-y-3">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{inst.name}</h3>
                <p className={`font-body-md text-body-md text-on-surface-variant line-clamp-3 ${inst.id === 'dan-bau' || inst.id === 'sao-truc' ? 'italic' : ''}`}>
                  {inst.desc}
                </p>
              </div>
              <Link href={`/instruments/${inst.id}`} className="flex items-center gap-2 text-secondary font-label-sm text-label-sm group-hover:gap-4 transition-all pt-4">
                KHÁM PHÁ CHI TIẾT <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          ))}
        </div>
        {filteredInstruments.length === 0 && (
          <div className="text-center py-20 text-on-surface-variant font-body-lg">
            Đang cập nhật thêm nhạc cụ cho bộ này...
          </div>
        )}
      </section>
    </>
  );
}
