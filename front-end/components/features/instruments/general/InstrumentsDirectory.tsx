'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const INSTRUMENTS_DATA = [
  {
    id: 'dan-bau',
    name: 'Đàn Bầu',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: '"Tiếng đàn bầu, cung thanh là tiếng mẹ, cung trầm là giọng cha." Nhạc cụ độc huyền với âm sắc u huyền và sâu lắng bậc nhất tâm hồn Việt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzZpSDchV6yWME8ZpH-WEDAZ2m-krTl1tDGhx4vMTMj1ACRxn8X3X24fdVPYKp3bSiVjaxvz7UhN0TalcmR93754SFGDNdKveUGHJOZIH0E0a_EqohZgm3oKexSz1JCmE3N5ICwiW7UFGgW2W_bg6SFN2J8VLc_Qy_Un9hk6EbsOa873Uwk8qDiVwU0BN3syoBojoCA1mUfLrT7aI48Q5GhQz9XvkKZrPz5DRz44JIbaMmQn2ohZTHm21vTyjr9NAlpP0b-7UKYEK9',
    altText: 'Đàn Bầu',
  },
  {
    id: 'dan-nhi',
    name: 'Đàn Nhị',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Cây vĩ cầm của Á Đông, sở hữu âm sắc biểu cảm tương tự giọng hát con người. Từ tiếng than vãn nỉ non đến những giai điệu rộn rã đón xuân.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR_x8zZLrKkY-hOZakmUznaIqDQxwD1b9exSYWG0BEshLfevNyFa5rHVWD0zHtVm0qXe2b2_uFgGk9LKJCO0ZcYQVOrWzDFRYiHAUCFX9ESAfDp7GhGKO6MVNW__Y9dy36-KLaccvnF_Etaq2eA5ZD6qhAHGnws_z_u7Eou-6rn9AA40erqQAV72lq2pX7Vvt4OR5VIB_YWCNf3KHgmQHTo8US1DeNfwJLRGU9USLJ4EG12dCl_stn_dPEIFMDJLug0w1GjAwLjQHt',
    altText: 'Đàn Nhị',
  },
  {
    id: 'dan-tranh',
    name: 'Đàn Tranh',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Sự kết hợp hoàn hảo giữa kỹ thuật gảy điêu luyện và âm sắc lanh lảnh như tiếng suối reo. Một biểu tượng của sự thanh cao và quý tộc.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFUE_RwN1WSNU1AMbcolO6xHjk4Y-ihi_FF3o1RIme7RIMPxvrYZ4OWXoMpUfDHW2wiMmtXczsehUINC61fTJKIylGzKvw0K7yZmoVQSrrZsfsjOLaMr79w6cGFrBElaxSCk8SxBM_G6wznrpUnbJiaHZGezMC48qBdCVAVubfLQuvQCLHrUdgiA33NMpndHbz1lvwaC6o5pfy1hwrcJUCH4DrfdWRLcD6bLgGCBS-U8fHPOEP3N-SDHBQyRVuqfiYTuWUnO9K_1iz',
    altText: 'Professional artistic studio photography of a Vietnamese Dan Tranh (zither), 17 strings, wooden body with mother-of-pearl inlay, cinematic lighting, warm lacquer tones, museum quality.',
  },
  {
    id: 'sao-truc',
    name: 'Sáo Trúc',
    category: 'wind',
    categoryLabel: 'Bộ Hơi',
    desc: 'Hơi thở của đồng nội, thanh âm của gió ngàn. Mang trong mình linh hồn của làng quê Việt Nam qua hàng ngàn năm lịch sử.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApm-h7cDVLptW74r4LiAyBXMBQa5dMy4yb2OnSfxv-YOl2RMm0wIC43qHdNLDjJINyCL9LKAIT2Nc1yu89gbHVdtSxQuqx5wrQh2IYKaD2LDvIa_La7p4O8aXcaK4BUI-g3TqrWRlxsfbSP4x2ingbLi4QbQUY8q_DAsKNf87aLlKf6VHi1KcYNb81Q78quhYhDAAMfO66_pK3AINz1HJmNo9SX-bC4mkJektjxdVJhdU985KsSzgRxmULe6CWyr0jngxYIC-Ykmmc',
    altText: 'Professional artistic studio photography of a Vietnamese Sao Truc (bamboo flute), natural aged bamboo texture, elegant holes, cinematic lighting, cultural heritage style.',
  },
  {
    id: 'dan-nguyet',
    name: 'Đàn Nguyệt',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Nhạc cụ hình trăng rằm, giữ vai trò quan trọng trong nhạc tài tử, chèo và chầu văn. Âm thanh tươi sáng, rộn ràng mà vẫn rất đỗi trang trọng.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo0EtMyHX-a-mw_EGS35EfEcNRX8IQpXh0qwSvsKg1U8BTf8GMMI1TYAXcXaMcXATZZ_0WPewL0uCR7UcDYDi6ClWC-b7jJwE--RoQQzXutWvMetudeDqESHkA4CL7dIYmgEtaqyT9t579i6Mawp3-sAOZ5iG_eohmwVRcvwWrDcee5pTbMzxP1CC4K_QHAqN2QhuQlC2zbyp7cgfnpnX01NwMO4Z1sjwzBEX0rZAHFL-wdJsgFxrjz6VQJlySvpCEOXH_ogH1PIUw',
    altText: 'Professional artistic studio photography of a Vietnamese Dan Nguyet (moon-shaped lute), circular body, long neck, dark wood, cinematic lighting, elegant lacquer finish.',
  },
  {
    id: 'dan-ty-ba',
    name: 'Đàn Tì Bà',
    category: 'string',
    categoryLabel: 'Bộ Dây',
    desc: 'Nhạc cụ hình quả lê, biểu tượng của vẻ đẹp cổ điển và quý phái. Thường xuất hiện trong các dàn nhạc cung đình và hòa tấu nghệ thuật cao.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjt2poBb1rB99uRV0-tkNW9A7DyfjS36Ll0XhaOxtvb6AfaqQ1e3A3KbiodE06N0wg_GjleG0TKxq8Ms05xwqWbO217rFB-kaQesnIzAsBsWNmTydADbY57KfoPoGNYTVOkUncNfUKzcT3LXw3cbsFPAgnN8fdRr80WalcvJoDKYAFtlfiA8IFYiaduomRDu4TxlQZUq1imrrrwPgLysO3bJxIJdaxGl6XpsrYeWY9R93rfvQ1TVgRwkkOcZuG1-hH96RCjAfspYop',
    altText: 'Professional artistic studio photography of a Vietnamese Dan Ti Ba (pear-shaped lute), four strings, intricate wood grain, cinematic lighting, traditional aesthetic.',
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
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'all' ? 'glass-card bg-primary text-white' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">music_note</span> TẤT CẢ
          </button>
          <button 
            onClick={() => setFilter('string')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'string' ? 'glass-card bg-primary text-white' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">line_weight</span> BỘ DÂY
          </button>
          <button 
            onClick={() => setFilter('wind')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'wind' ? 'glass-card bg-primary text-white' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">air</span> BỘ HƠI
          </button>
          <button 
            onClick={() => setFilter('percussion')}
            className={`px-8 py-3 rounded-xl font-label-sm text-label-sm flex items-center gap-2 transition-all duration-300 ${filter === 'percussion' ? 'glass-card bg-primary text-white' : 'bento-panel text-on-surface-variant hover:bg-white'}`}
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
