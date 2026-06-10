'use client';
import React, { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  extraClasses?: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc, imageAlt, extraClasses = "" }) => (
  <div className={`glass-panel team-glass-panel p-8 rounded-xl flex flex-col items-center text-center group transition-transform duration-200 ease-out ${extraClasses}`}>
    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary-container/30 relative">
      <img 
        alt={imageAlt} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
        src={imageSrc}
      />
    </div>
    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{name}</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4">{role}</p>
    <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
  </div>
);

const TEAM_MEMBERS = [
  {
    name: "Nguyễn Thị Minh Anh",
    role: "CEO & COO",
    description: "Lãnh đạo chiến lược và điều hành toàn bộ dự án Bách Việt Cầm.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVJZzDtowQg9X9c1Q28lNkWgoA0ifqyqDbTzd9RjU_y-jSAuOH7OUXBvvd1RxSvSzHNp1nWXfJCIYlrjgRbc0LyKB2_9jbEyUs11ac28RGW0WRHji-2HX9fMRV0p316iuXmYUyLGXBWWvbXEZD-UFtWlaPA7SXiqjHyDgqZ44ZnIZx_Xl4wzFmNIxWKRX-RZig6VQ2TTsUhSTK7ydpTqbGFg10_d8uCBIOzwVoFv02WStrBWGhqkubr90u3YLYnn_ODtE_7qFejLli",
    imageAlt: "Nguyễn Thị Minh Anh - CEO & COO"
  },
  {
    name: "Phạm Thị Thanh Thảo",
    role: "CMO",
    description: "Giám đốc Marketing, người lan tỏa những giá trị văn hóa đến cộng đồng.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj8HIJqTJ-BP3KVvQNji9cKQQB6g4O4pCXpOhIcJsRhY7zCwHRkJc28kvq40Ip8z8YzeJ9ZETXukk2PRwGrpGkMQcZ9nJiltUqBEwkbFvQmrYske1qByx3zCpYzBGzmV4zJY9dMlPpXWPMYU5ituBYg8P3iAO-lKTtgeTZIovDsslNhxvJA0NrBoJGy7ZZ9UcVsD1BOHwXs2tvhsWveuTB3ptE7y_GSZmwuUlTPg50b7cTX177pu1egqGXraJb3924cnRAG-ZhemBF",
    imageAlt: "Phạm Thị Thanh Thảo - CMO",
    extraClasses: "mt-8 md:mt-12"
  },
  {
    name: "Hoàng Vũ Ngọc Ánh",
    role: "CFO",
    description: "Giám đốc Tài chính, đảm bảo nguồn lực vững chắc cho sự phát triển của dự án.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6drrDFhfhW8Kc3kXeoiNo4tJIVUldGcyeNnG8H3YHAjZDBVB_QkK7LEE0-ZHnlfcuqMczimNP1rLadSUnkoE8X7gIqmMfDZJzZ64mcRxJBP_ybnZcjQmyuRRO8N5BflUFhtRaSYnIJgpT4tHuDs3wu68Q3rBO9wAf2F0TWh8KCssdarrfEXeZB_6RIxMYfUr-GBhJn4_auxYtgJPj0a7g0waDRazpwR67bEIgG6EExAOTiA6LlqyyuoLIB_Vq33dtNqYrQfXX3OiJ",
    imageAlt: "Hoàng Vũ Ngọc Ánh - CFO"
  },
  {
    name: "Nguyễn Minh Tuấn",
    role: "CTO",
    description: "Giám đốc Công nghệ, kiến trúc sư xây dựng hệ thống nền tảng cốt lõi.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVJZzDtowQg9X9c1Q28lNkWgoA0ifqyqDbTzd9RjU_y-jSAuOH7OUXBvvd1RxSvSzHNp1nWXfJCIYlrjgRbc0LyKB2_9jbEyUs11ac28RGW0WRHji-2HX9fMRV0p316iuXmYUyLGXBWWvbXEZD-UFtWlaPA7SXiqjHyDgqZ44ZnIZx_Xl4wzFmNIxWKRX-RZig6VQ2TTsUhSTK7ydpTqbGFg10_d8uCBIOzwVoFv02WStrBWGhqkubr90u3YLYnn_ODtE_7qFejLli",
    imageAlt: "Nguyễn Minh Tuấn - CTO"
  },
  {
    name: "Kiều Trọng Bách Dũng",
    role: "CDO",
    description: "Giám đốc Dữ liệu, phân tích và tối ưu hóa trải nghiệm số hóa di sản.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj8HIJqTJ-BP3KVvQNji9cKQQB6g4O4pCXpOhIcJsRhY7zCwHRkJc28kvq40Ip8z8YzeJ9ZETXukk2PRwGrpGkMQcZ9nJiltUqBEwkbFvQmrYske1qByx3zCpYzBGzmV4zJY9dMlPpXWPMYU5ituBYg8P3iAO-lKTtgeTZIovDsslNhxvJA0NrBoJGy7ZZ9UcVsD1BOHwXs2tvhsWveuTB3ptE7y_GSZmwuUlTPg50b7cTX177pu1egqGXraJb3924cnRAG-ZhemBF",
    imageAlt: "Kiều Trọng Bách Dũng - CDO",
    extraClasses: "mt-8 md:mt-12"
  }
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const panels = document.querySelectorAll('.team-glass-panel');
      
      panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / 25;
        const dy = (e.clientY - (rect.top + rect.height / 2)) / 25;
        // Subtle parallax effect on member cards
        (panel as HTMLElement).style.transform = `perspective(1000px) rotateX(${-dy}deg) rotateY(${dx}deg)`;
      });
    };

    const handleMouseOut = () => {
      const panels = document.querySelectorAll('.team-glass-panel');
      panels.forEach(panel => {
        (panel as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return (
    <section id="team" className="px-margin-desktop mb-32" ref={containerRef}>
      <div className="max-w-container-max mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-headline-md text-headline-md text-primary shrink-0">Những Người Đồng Hành</h2>
          <div className="h-px bg-outline-variant grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
