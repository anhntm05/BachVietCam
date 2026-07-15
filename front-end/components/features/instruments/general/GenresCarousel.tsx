'use client';

import React, { useState } from 'react';

export interface Genre {
  id: string;
  title: string;
  desc: string;
  img: string;
  tag?: string;
}

interface GenresCarouselProps {
  title?: string;
  subtitle?: string;
  genres: Genre[];
  bgClass?: string;
  isDark?: boolean;
}
export default function GenresCarousel({
  title = "Hồn Nhạc Trong Từng Thể Loại",
  subtitle,
  genres,
  bgClass = "",
  isDark = false
}: GenresCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % 3);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + 3) % 3);

  const getPositionClass = (index: number) => {
    if (index === activeIndex) {
      // Center
      return 'z-30 w-[320px] md:w-2/5 h-[460px] transform-gpu scale-100 opacity-100 cursor-default shadow-2xl border-2 border-primary-container/40 shadow-primary-container/20';
    }
    if (index === (activeIndex - 1 + 3) % 3) {
      // Left
      return 'absolute left-0 md:relative w-[280px] md:w-1/3 h-[380px] z-10 transform-gpu -translate-x-12 md:translate-x-0 rotate-y-[25deg] scale-90 opacity-60 hover:opacity-100 cursor-pointer origin-left shadow-lg bento-border';
    }
    // Right
    return 'absolute right-0 md:relative w-[280px] md:w-1/3 h-[380px] z-10 transform-gpu translate-x-12 md:translate-x-0 rotate-y-[-25deg] scale-90 opacity-60 hover:opacity-100 cursor-pointer origin-right shadow-lg bento-border';
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className={`py-24 relative overflow-hidden ${bgClass}`}>
      <div className="px-margin-desktop max-w-container-max mx-auto overflow-visible">
        <div className="text-center mb-16 relative">
          <h3 className={`font-headline-md text-headline-md mb-4 ${isDark ? 'text-primary-fixed' : 'text-on-surface'}`}>{title}</h3>
          {subtitle && <p className={`font-body-lg text-body-lg max-w-2xl mx-auto ${isDark ? 'text-surface-variant' : 'text-on-surface-variant'}`}>{subtitle}</p>}
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between pointer-events-none px-4">
            <button onClick={handlePrev} className={`pointer-events-auto p-3 rounded-full shadow-lg border transition-colors z-40 relative group -ml-12 ${isDark ? 'bg-surface-container-high text-white border-outline/30 hover:bg-primary-container hover:text-white' : 'bg-surface border-outline-variant hover:bg-primary-container hover:text-white'}`}>
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
            </button>
            <button onClick={handleNext} className={`pointer-events-auto p-3 rounded-full shadow-lg border transition-colors z-40 relative group -mr-12 ${isDark ? 'bg-surface-container-high text-white border-outline/30 hover:bg-primary-container hover:text-white' : 'bg-surface border-outline-variant hover:bg-primary-container hover:text-white'}`}>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>

      <div className="carousel-perspective relative h-[500px] flex items-center justify-center">
        <div className="flex items-center justify-center w-full max-w-5xl relative gap-0 md:gap-4 h-full">
          {genres.map((genre, index) => {
            const isCenter = index === activeIndex;
            return (
              <div 
                key={genre.id} 
                className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center ${getPositionClass(index)}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="group relative overflow-hidden rounded-2xl h-full w-full">
                  {!isCenter && <div className="absolute inset-0 gold-shimmer opacity-10 z-10"></div>}
                  <img alt={genre.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={genre.img} />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/10 to-transparent flex flex-col justify-end z-20 ${isCenter ? 'p-10' : 'p-6'}`}>
                    {genre.tag && isCenter && (
                      <div className="bg-primary-container/20 backdrop-blur-sm self-start px-3 py-1 rounded-full mb-4 border border-primary-container/30">
                        <span className="text-primary-fixed text-[10px] font-bold uppercase tracking-widest">{genre.tag}</span>
                      </div>
                    )}
                    <h4 className={`font-headline-sm text-white mb-3 ${isCenter ? 'text-2xl' : 'text-lg'}`}>{genre.title}</h4>
                    <p className={`text-white/90 font-body-md leading-relaxed ${isCenter ? 'text-sm' : 'text-xs line-clamp-3 opacity-80'}`}>
                      {genre.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile controls & dots */}
        <div className="absolute bottom-4 flex gap-3 items-center justify-center w-full">
          {genres.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-3 h-3 bg-primary-container shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'w-2 h-2 bg-primary-container/30 hover:bg-primary-container/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
