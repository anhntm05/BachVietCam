'use client';

import React, { useState, useEffect } from 'react';
import { AudioRecorder } from '../components/AudioRecorder';

type Translation = {
  howItWorks: string;
  learn: string;
  enterprise: string;
  faq: string;
  contact: string;
  tryCta: string;
  heroBadge: string;
  heroSub: string;
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'vi'>('vi');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const translations: Record<'en' | 'vi', Translation> = {
    en: {
      howItWorks: 'How It Works',
      learn: 'Learn',
      enterprise: 'Enterprise',
      faq: 'FAQ',
      contact: 'Contact',
      tryCta: 'Try It Free',
      heroBadge: 'PRESERVING TRADITIONAL HERITAGE',
      heroSub:
        'Pitch analysis on the standard cents scale, with non-linear time-axis alignment powered by the Dynamic Time Warping (DTW) algorithm.',
    },
    vi: {
      howItWorks: 'Cách Hoạt Động',
      learn: 'Tìm Hiểu',
      enterprise: 'Doanh Nghiệp',
      faq: 'Hỏi Đáp',
      contact: 'Liên Hệ',
      tryCta: 'Dùng Thử Miễn Phí',
      heroBadge: 'BẢO TỒN BẢN SẮC TRUYỀN THỐNG',
      heroSub:
        'Phân tích cao độ dựa trên thang đo cents tiêu chuẩn và căn chỉnh đồng bộ trục thời gian phi tuyến thông qua thuật toán Dynamic Time Warping (DTW).',
    },
  };

  const t = translations[currentLang];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#langDropdown')) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="app-container">
      {/* SU DUNG dangerouslySetInnerHTML CHO STYLE DE TRANH LOI HYDRATION TREN NEXT.JS */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- RESET & BASIC STYLES --- */
        .app-container {
          position: relative;
          min-height: 100vh;
          background-color: #170E17;
          color: #eef4f8;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        /* --- GLASS PANEL: nen kinh mo dung chung cho nav, the, modal --- */
        .glass-panel {
          background: rgba(23, 14, 23, 0.55);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
        }

        /* --- BREATHE NEON: nut CTA nhip nhay nhe de hut mat --- */
        .breathe-neon-btn {
          animation: breathe-neon 2.8s ease-in-out infinite;
        }
        @keyframes breathe-neon {
          0%, 100% { box-shadow: 0 0 0 rgba(24, 227, 243, 0); }
          50% { box-shadow: 0 0 22px rgba(24, 227, 243, 0.45); }
        }

        /* --- CUON LUON CUC QUANG (AURORA FLOW BACKGROUND) --- */
        .aurora-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background-color: #0c070c;
        }
        .aurora-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(23,14,23,0.7) 0%, rgba(20,40,45,0.45) 100%);
          z-index: 2;
        }
        .aurora-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, rgba(12, 7, 12, 0.8) 100%);
          z-index: 3;
        }
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          mix-blend-mode: screen;
          opacity: 0.35;
          z-index: 1;
        }
        /* Khoi mau xanh lo (Teal) */
        .blob-1 {
          background-color: #18e3f3;
          width: 500px;
          height: 500px;
          top: -10%;
          left: 60%;
          animation: float-one 16s infinite alternate ease-in-out;
        }
        /* Khoi mau tim huyen ao (Violet) */
        .blob-2 {
          background-color: #7c3aed;
          width: 450px;
          height: 450px;
          top: 20%;
          left: 10%;
          animation: float-two 20s infinite alternate ease-in-out;
        }
        /* Khoi mau ngoc bich (Emerald) */
        .blob-3 {
          background-color: #059669;
          width: 400px;
          height: 400px;
          top: 50%;
          left: 50%;
          animation: float-three 18s infinite alternate ease-in-out;
        }

        @keyframes float-one {
          0% { transform: translate(-20%, -10%) scale(1) rotate(0deg); }
          50% { transform: translate(10%, 10%) scale(1.2) rotate(180deg); }
          100% { transform: translate(-20%, -10%) scale(1) rotate(360deg); }
        }
        @keyframes float-two {
          0% { transform: translate(10%, 20%) scale(1.1) rotate(0deg); }
          50% { transform: translate(-10%, -10%) scale(0.85) rotate(-180deg); }
          100% { transform: translate(10%, 20%) scale(1.1) rotate(360deg); }
        }
        @keyframes float-three {
          0% { transform: translate(-10%, -20%) scale(0.9) rotate(0deg); }
          50% { transform: translate(20%, 10%) scale(1.15) rotate(120deg); }
          100% { transform: translate(-10%, -20%) scale(0.9) rotate(360deg); }
        }

        /* --- THANH DIEU HUONG (NAVBAR) --- */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 56px;
          background: rgba(23, 14, 23, 0.65);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border-bottom: 1px solid rgba(24, 227, 243, 0.07);
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Archivo', sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #eef4f8;
          text-decoration: none;
        }
        .nav-logo-text {
          letter-spacing: -0.01em;
        }
        .wm-detect {
          font-weight: 700;
          color: #ffffff;
        }
        .wm-dot {
          color: #18E3F3;
        }
        .wm-music {
          font-weight: 300;
          font-style: italic;
          color: #18E3F3;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav-link-item {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a9ab0;
          text-decoration: none;
          transition: color 0.25s;
          cursor: pointer;
          white-space: nowrap;
        }
        .nav-link-item:hover {
          color: #18E3F3;
        }
        .nav-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 44px;
          height: 44px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .burger-line {
          display: block;
          width: 22px;
          height: 2px;
          background-color: #eef4f8;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* --- NGON NGU --- */
        .lang-dropdown {
          position: relative;
          margin-left: 6px;
        }
        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          color: #eef4f8;
          font-family: 'DM Mono', monospace;
          font-size: .7rem;
          padding: 6px 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lang-toggle:hover {
          border-color: #18E3F3;
          color: #18E3F3;
        }
        .lang-menu {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background-color: rgba(23, 14, 23, 0.98);
          border: 1px solid rgba(24, 227, 243, 0.2);
          border-radius: 10px;
          padding: 4px;
          min-width: 140px;
          z-index: 300;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .lang-option {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          font-family: 'DM Mono', monospace;
          font-size: .72rem;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 7px;
          transition: all 0.15s;
        }

        /* --- BUTTONS --- */
        .nav-cta {
          background-color: #18E3F3;
          color: #170E17;
          padding: 9px 22px;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s;
          display: inline-block;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background-color: #40ecf8;
          box-shadow: 0 0 24px rgba(24, 227, 243, 0.4);
        }
        .btn-primary {
          font-family: 'Poppins', sans-serif;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 600;
          background: linear-gradient(135deg, #18E3F3 0%, #40ecf8 100%);
          color: #170E17;
          border: none;
          padding: 16px 42px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 4px 28px rgba(24, 227, 243, 0.32);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 44px rgba(24, 227, 243, 0.52);
        }
        .btn-ghost {
          font-family: 'Poppins', sans-serif;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.04);
          color: #7a9ab0;
          border: 1px solid rgba(24, 227, 243, 0.16);
          padding: 16px 42px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-ghost:hover {
          border-color: rgba(24, 227, 243, 0.5);
          color: #18E3F3;
          background-color: rgba(24, 227, 243, 0.05);
        }

        /* --- HERO --- */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 160px 40px 90px;
          position: relative;
          z-index: 2;
        }
        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.66rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #18E3F3;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .eyebrow-line-left {
          display: block;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #18E3F3);
          opacity: 0.6;
        }
        .eyebrow-line-right {
          display: block;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, #18E3F3, transparent);
          opacity: 0.6;
        }
        .hero-title {
          font-family: 'Archivo', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.8rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }
        .hero-title em {
          font-style: italic;
          color: #18E3F3;
        }
        .hero-title strong {
          font-weight: 700;
          background: linear-gradient(145deg, #eef4f8 30%, rgba(238, 244, 248, 0.55));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-family: 'Archivo', sans-serif;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: #7a9ab0;
          max-width: 660px;
          line-height: 1.72;
          margin-bottom: 52px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* --- TRUST BAR --- */
        .trust-bar {
          padding: 34px 60px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background-color: rgba(255, 255, 255, 0.018);
          border-top: 1px solid rgba(24, 227, 243, 0.16);
          border-bottom: 1px solid rgba(24, 227, 243, 0.16);
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 52px;
          border-right: 1px solid rgba(24, 227, 243, 0.16);
        }
        .trust-item:last-child {
          border-right: none;
        }
        .trust-num {
          font-family: 'Archivo', sans-serif;
          font-size: 2.5rem;
          font-weight: 500;
          color: #18E3F3;
          line-height: 1;
        }
        .trust-label {
          font-family: 'DM Mono', monospace;
          font-size: .6rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #7a9ab0;
        }

        /* --- SECTIONS --- */
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: .63rem;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: #18E3F3;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-title {
          font-family: 'Archivo', sans-serif;
          font-size: clamp(1.85rem, 3.7vw, 3.1rem);
          font-weight: 400;
          line-height: 1.18;
          letter-spacing: -.01em;
          margin-bottom: 54px;
        }
        .section-title em {
          font-style: italic;
          color: #7a9ab0;
        }
        .detect-section {
          padding: 120px 20px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .detect-card {
          display: flex;
          justify-content: center;
        }

        /* --- HOW IT WORKS --- */
        .how-section {
          padding: 120px 60px;
          border-top: 1px solid rgba(24, 227, 243, 0.16);
          position: relative;
        }
        .how-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .how-step {
          background-color: rgba(255, 255, 255, 0.032);
          border: 1px solid rgba(24, 227, 243, 0.16);
          border-radius: 16px;
          padding: 30px 30px 26px;
          position: relative;
          overflow: hidden;
          transition: all .4s;
        }
        .how-num {
          font-family: 'DM Mono', monospace;
          font-size: .58rem;
          letter-spacing: .18em;
          color: #18E3F3;
          opacity: 0.5;
          margin-bottom: 14px;
        }
        .how-name {
          font-family: 'Archivo', sans-serif;
          font-size: 1.22rem;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .how-desc {
          font-size: .84rem;
          color: #7a9ab0;
          line-height: 1.68;
        }

        /* --- LEARN --- */
        .learn-section {
          padding: 120px 60px;
          border-top: 1px solid rgba(24, 227, 243, 0.16);
        }
        .learn-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .learn-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .learn-card {
          background-color: rgba(255, 255, 255, 0.032);
          border: 1px solid rgba(24, 227, 243, 0.16);
          border-radius: 16px;
          padding: 28px 28px 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .learn-card-label {
          font-family: 'DM Mono', monospace;
          font-size: .55rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #18E3F3;
          opacity: 0.6;
          margin-bottom: 10px;
        }
        .learn-card-title {
          font-family: 'Archivo', sans-serif;
          font-size: 1.15rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: #eef4f8;
        }
        .learn-card-desc {
          font-size: .82rem;
          color: #7a9ab0;
          line-height: 1.65;
          flex: 1;
        }

        /* --- ENTERPRISE --- */
        .enterprise-section {
          padding: 120px 60px;
          text-align: center;
          border-top: 1px solid rgba(24, 227, 243, 0.16);
        }
        .enterprise-card {
          max-width: 640px;
          margin: 0 auto;
          border: 1px solid rgba(24, 227, 243, 0.16);
          border-radius: 24px;
          padding: 58px 50px;
          position: relative;
          background-color: rgba(255, 255, 255, 0.032);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }
        .enterprise-desc {
          font-family: 'Archivo', sans-serif;
          font-size: 1.1rem;
          line-height: 1.75;
          color: #7a9ab0;
          margin-bottom: 32px;
          font-style: italic;
        }
        .enterprise-features {
          text-align: left;
          margin-bottom: 36px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .ef {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: .87rem;
          line-height: 1.55;
        }
        .ef-check {
          color: #18E3F3;
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          background-color: rgba(24, 227, 243, 0.13);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .62rem;
          font-family: 'DM Mono', monospace;
        }

        /* --- FAQ --- */
        .faq-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 60px 120px;
          position: relative;
          z-index: 2;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background-color: rgba(255, 255, 255, 0.032);
          border: 1px solid rgba(24, 227, 243, 0.16);
          border-radius: 16px;
          padding: 24px 28px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faq-q-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-q {
          font-family: 'Archivo', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          margin: 0;
          color: #eef4f8;
        }
        .faq-arrow {
          font-size: 10px;
          color: #18E3F3;
          transition: transform 0.2s ease;
        }
        .faq-a-container {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
        .faq-a {
          font-size: .86rem;
          color: #7a9ab0;
          line-height: 1.7;
          margin: 12px 0 0 0;
        }

        /* --- FOOTER --- */
        .footer {
          border-top: 1px solid rgba(24, 227, 243, 0.16);
          padding: 34px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          background-color: rgba(23, 14, 23, 0.45);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Archivo', sans-serif;
          font-size: 1.3rem;
          color: #eef4f8;
        }
        .footer-note {
          font-family: 'DM Mono', monospace;
          font-size: .62rem;
          letter-spacing: .09em;
          color: rgba(180, 210, 230, 0.55);
          line-height: 1.8;
        }
        .footer-contact {
          font-family: 'DM Mono', monospace;
          font-size: .58rem;
          letter-spacing: .09em;
          color: #18E3F3;
          background: none;
          border: none;
          cursor: pointer;
          transition: opacity .2s;
        }

        /* --- CONTACT MODAL --- */
        .contact-overlay {
          position: fixed;
          inset: 0;
          z-index: 600;
          background-color: rgba(23, 14, 23, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: opacity .4s ease;
        }
        .contact-panel {
          background-color: rgba(26, 42, 53, 0.98);
          border: 1px solid rgba(24, 227, 243, 0.3);
          border-radius: 24px;
          max-width: 480px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .contact-panel-bar {
          height: 3px;
          background: linear-gradient(90deg, transparent, #18E3F3, #40ecf8, #18E3F3, transparent);
        }
        .contact-panel-body {
          padding: 44px;
        }
        .contact-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(180, 210, 230, 0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all .18s;
        }
        .contact-close:hover {
          background-color: rgba(24, 227, 243, 0.12);
          color: #18E3F3;
        }
        .contact-title {
          font-family: 'Archivo', sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 8px 0;
        }
        .contact-sub {
          font-size: 14px;
          color: #7a9ab0;
          line-height: 1.7;
          margin: 0 0 24px 0;
        }
        .contact-field {
          margin-bottom: 14px;
        }
        .contact-label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: .62rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #7a9ab0;
          margin-bottom: 7px;
        }
        .contact-required {
          color: #18E3F3;
        }
        .contact-input {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.038);
          border: 1px solid rgba(24, 227, 243, 0.18);
          color: #ffffff;
          padding: 13px 17px;
          font-family: 'Poppins', sans-serif;
          font-size: .93rem;
          border-radius: 10px;
          outline: none;
          transition: all .3s;
        }
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #18E3F3;
          background-color: rgba(24, 227, 243, 0.05);
        }
        .contact-textarea {
          width: 100%;
          min-height: 120px;
          background-color: rgba(255, 255, 255, 0.038);
          border: 1px solid rgba(24, 227, 243, 0.18);
          color: #ffffff;
          padding: 14px 17px;
          font-family: 'Poppins', sans-serif;
          font-size: .93rem;
          border-radius: 10px;
          outline: none;
          resize: vertical;
          transition: all .3s;
        }
        .contact-send {
          width: 100%;
          margin-top: 20px;
          padding: 15px;
          font-family: 'Poppins', sans-serif;
          font-size: .85rem;
          letter-spacing: .06em;
          text-transform: uppercase;
          font-weight: 600;
          background: linear-gradient(135deg, #18E3F3 0%, #40ecf8 100%);
          color: #170E17;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all .3s;
          box-shadow: 0 4px 24px rgba(24, 227, 243, 0.28);
        }

        /* --- RESPONSIVE MEDIA QUERIES --- */
        @media (max-width: 990px) {
          nav {
            padding: 15px 24px;
          }
          .nav-burger {
            display: flex;
          }
          .nav-links {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(23, 14, 23, 0.98);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 28px;
            z-index: 199;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-link-item {
            font-size: 0.85rem;
            letter-spacing: 0.15em;
          }
          .nav-cta {
            font-size: 0.9rem;
            padding: 14px 36px;
          }
          .lang-dropdown {
            margin-top: 16px;
          }
          .lang-menu {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }
          .hero {
            padding: 120px 22px 70px;
          }
          .trust-bar {
            padding: 22px 12px;
          }
          .trust-item {
            padding: 0 18px;
          }
          .trust-num {
            font-size: 1.8rem;
          }
          .trust-label {
            font-size: 0.55rem;
          }
          .how-grid {
            grid-template-columns: 1fr;
          }
          .learn-grid {
            grid-template-columns: 1fr;
          }
          .footer {
            padding: 26px 22px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      ` }} />

      {/* 1. HIEU UNG CUC QUANG DONG */}
      <div className="aurora-container">
        <div className="aurora-blob blob-1" />
        <div className="aurora-blob blob-2" />
        <div className="aurora-blob blob-3" />
        <div className="aurora-overlay" />
        <div className="aurora-vignette" />
      </div>

      {/* 2. THANH DIEU HUONG */}
      <nav className="glass-panel">
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="nav-logo-text">
            <span className="wm-detect">DETECT</span>
            <span className="wm-dot">.</span>
            <span className="wm-music">Music</span>
          </span>
        </a>

        <button
          className="nav-burger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="burger-line" style={{ transform: isMobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
          <span className="burger-line" style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></span>
          <span className="burger-line" style={{ transform: isMobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="nav-link-item">{t.howItWorks}</a>
          <a href="#learn" onClick={() => setIsMobileMenuOpen(false)} className="nav-link-item">{t.learn}</a>
          <a href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="nav-link-item">{t.enterprise}</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="nav-link-item">{t.faq}</a>
          <span onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }} className="nav-link-item">{t.contact}</span>
          <a href="#detect" onClick={() => setIsMobileMenuOpen(false)} className="nav-cta breathe-neon-btn">{t.tryCta}</a>

          <div className="lang-dropdown" id="langDropdown">
            <button className="lang-toggle" onClick={(e) => { e.stopPropagation(); setIsLangDropdownOpen(!isLangDropdownOpen); }}>
              <span>{currentLang === 'en' ? 'EN' : 'VI'}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l4 4 4-4"></path>
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className="lang-menu glass-panel">
                <button className="lang-option" style={{ color: currentLang === 'en' ? '#18E3F3' : '#7a9ab0' }} onClick={() => { setCurrentLang('en'); setIsLangDropdownOpen(false); }}>English</button>
                <button className="lang-option" style={{ color: currentLang === 'vi' ? '#18E3F3' : '#7a9ab0' }} onClick={() => { setCurrentLang('vi'); setIsLangDropdownOpen(false); }}>Tiếng Việt</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-line-left"></span>
          {t.heroBadge}
          <span className="eyebrow-line-right"></span>
        </div>
        <h1 className="hero-title">
          Bảo tồn Giai điệu <em>Nhân loại</em>
          <br />
          <strong>Chấm điểm Âm nhạc Dân tộc</strong>
        </h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-actions">
          <a href="#detect" className="btn-primary">Bắt đầu Thực hành</a>
          <a href="#how-it-works" className="btn-ghost">Tìm hiểu Giải thuật</a>
        </div>
      </section>

      {/* 4. TRUST BAR */}
      <div className="trust-bar glass-panel">
        <div className="trust-item">
          <span className="trust-num">6</span>
          <span className="trust-label">Nhạc Cụ Hỗ Trợ</span>
        </div>
        <div className="trust-item">
          <span className="trust-num">DTW</span>
          <span className="trust-label">Căn Chỉnh Trục Thời Gian</span>
        </div>
        <div className="trust-item">
          <span className="trust-num">Cents</span>
          <span className="trust-label">Thang Đo Cao Độ Chuẩn</span>
        </div>
      </div>

      {/* 5. INTERACTIVE EVALUATOR */}
      <section id="detect" className="detect-section">
        <div className="section-header-center">
          <span className="section-label">Live Evaluation Engine</span>
          <h2 className="section-title">Không gian <em>Thực hành</em> cao độ chuẩn xác</h2>
        </div>
        <div className="detect-card">
          <AudioRecorder />
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="how-section">
        <div className="how-inner">
          <span className="section-label">Giải thuật</span>
          <h2 className="section-title">Quy trình xử lý tín hiệu <em>Thông minh</em></h2>
          <div className="how-grid">
            <div className="how-step">
              <span className="how-num">01 / THU ÂM SẮC NÉT</span>
              <h3 className="how-name">Ghi âm trực tiếp</h3>
              <p className="how-desc">Hệ thống dùng Web Audio API để ghi lại phần trình diễn của bạn, sau đó chuẩn hóa tín hiệu để bảo lưu các chi tiết luyến láy của sáo và dây đàn khi phân tích.</p>
            </div>
            <div className="how-step">
              <span className="how-num">02 / DYNAMIC TIME WARPING</span>
              <h3 className="how-name">Căn chỉnh trục thời gian</h3>
              <p className="how-desc">Thuật toán co giãn phi tuyến trục thời gian để khớp giai điệu của học viên với giáo viên, loại bỏ sai số do việc vào nhịp chậm hay nhanh hơn.</p>
            </div>
            <div className="how-step">
              <span className="how-num">03 / ĐÁNH GIÁ THANG CENTS</span>
              <h3 className="how-name">Tính điểm cao độ</h3>
              <p className="how-desc">Quy đổi sai lệch tần số sang đơn vị cents của âm nhạc, đảm bảo công bằng cho cả nốt cực trầm và nốt cao vút thay vì so theo Hz tuyệt đối.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HERITAGE LEARN & RESOURCE */}
      <section id="learn" className="learn-section">
        <div className="learn-inner">
          <span className="section-label">Di sản Âm nhạc</span>
          <h2 className="section-title">Hệ thống nhạc cụ truyền thống <em>Việt Nam</em></h2>
          <div className="learn-grid">
            <div className="learn-card">
              <span className="learn-card-label">KỸ THUẬT ĐẶC TRƯNG</span>
              <h3 className="learn-card-title">Đàn Bầu &amp; Đàn Nhị</h3>
              <p className="learn-card-desc">Sự biến điệu bằng cần rung của đàn bầu hay các ngón miết của đàn nhị tạo ra các đường trượt cao độ liên tục. Hệ thống được nới dung sai phù hợp để bám sát và ghi nhận các nét hoa mỹ này.</p>
            </div>
            <div className="learn-card">
              <span className="learn-card-label">TẦN SỐ RÕ RÀNG</span>
              <h3 className="learn-card-title">Đàn Tranh &amp; Sáo Trúc</h3>
              <p className="learn-card-desc">Sử dụng các dải tần số tìm kiếm (fmin, fmax) hẹp và chính xác cho từng nhạc cụ, giúp thuật toán pYIN hạn chế bắt nhầm họa âm quãng tám trên đàn tranh và sáo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENTERPRISE INTEGRATION */}
      <section id="enterprise" className="enterprise-section">
        <div className="enterprise-card glass-panel">
          <span className="section-label">Enterprise</span>
          <h2 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>Học viện &amp; Đào tạo</h2>
          <p className="enterprise-desc">"Đưa công nghệ nhận diện và đánh giá âm nhạc truyền thống vào hệ thống quản lý học tập và giảng dạy tại các nhạc viện."</p>
          <div className="enterprise-features">
            <div className="ef">
              <span className="ef-check">✓</span>
              <span>Cung cấp API phân tích cao độ cho hệ thống đào tạo nội bộ.</span>
            </div>
            <div className="ef">
              <span className="ef-check">✓</span>
              <span>Bảng điểm chi tiết theo dõi tiến trình của từng học viên.</span>
            </div>
            <div className="ef">
              <span className="ef-check">✓</span>
              <span>Hỗ trợ tích hợp trực tiếp vào hệ thống LMS của nhạc viện.</span>
            </div>
          </div>
          <button className="btn-primary" onClick={() => setIsContactOpen(true)}>Liên hệ Hợp tác</button>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="faq-section">
        <div className="section-header-center">
          <span className="section-label">Giải đáp</span>
          <h2 className="section-title">Các câu hỏi <em>Thường gặp</em></h2>
        </div>
        <div className="faq-list">
          {[
            {
              q: 'Làm thế nào hệ thống nhận biết được các nhạc cụ khác nhau?',
              a: 'Mỗi nhạc cụ được cấu hình một dải tần số riêng (fmin, fmax) phù hợp với âm vực của nó, ví dụ sáo trúc dải tần cao, đàn bầu trầm hơn và có độ trượt. Bạn chỉ cần chọn đúng tên nhạc cụ trước khi chơi.',
            },
            {
              q: 'Tại sao tôi chơi đúng nốt nhưng vào nhịp hơi nhanh vẫn được điểm cao?',
              a: 'Đó là nhờ thuật toán căn chỉnh trục thời gian Dynamic Time Warping (DTW). Nó co giãn trục thời gian của bản thực hành sao cho khớp với bản mẫu của giáo viên rồi mới so khớp cao độ, nên lệch nhịp không bị trừ điểm oan.',
            },
            {
              q: 'Hệ thống có lưu trữ file âm thanh ghi âm của tôi không?',
              a: 'Không. Tệp ghi âm tạm thời của học viên được xóa khỏi máy chủ ngay sau khi quá trình phân tích hoàn tất.',
            },
          ].map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
              <div className="faq-q-container">
                <h3 className="faq-q">{faq.q}</h3>
                <span className="faq-arrow" style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'none' }}>▼</span>
              </div>
              <div className="faq-a-container" style={{
                maxHeight: activeFaq === index ? '220px' : '0px',
                opacity: activeFaq === index ? 1 : 0,
              }}>
                <p className="faq-a">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="footer glass-panel">
        <div className="footer-logo">
          <span className="nav-logo-text">
            <span className="wm-detect">DETECT</span>
            <span className="wm-dot">.</span>
            <span className="wm-music">Music</span>
          </span>
        </div>
        <div className="footer-note">
          © 2026 Detect.Music. Đã bảo lưu mọi quyền.<br />
          Thiết kế và vận hành hệ thống âm học truyền thống Việt Nam.
        </div>
        <button className="footer-contact" onClick={() => setIsContactOpen(true)}>Hỗ trợ Kỹ thuật &amp; Liên hệ</button>
      </footer>

      {/* 11. CONTACT FORM MODAL */}
      {isContactOpen && (
        <div className="contact-overlay" onClick={(e) => { if (e.target === e.currentTarget) setIsContactOpen(false); }}>
          <div className="contact-panel glass-panel">
            <div className="contact-panel-bar" />
            <div className="contact-panel-body">
              <button className="contact-close" onClick={() => setIsContactOpen(false)} aria-label="Đóng">✕</button>
              <h2 className="contact-title">Liên hệ với chúng tôi</h2>
              <p className="contact-sub">Gửi câu hỏi hoặc đề xuất của bạn. Hệ thống sẽ phản hồi trong 24 giờ làm việc.</p>

              <div className="contact-field">
                <label className="contact-label">Họ và tên <span className="contact-required">*</span></label>
                <input type="text" placeholder="Nguyễn Văn A" className="contact-input" required />
              </div>

              <div className="contact-field">
                <label className="contact-label">Địa chỉ Email <span className="contact-required">*</span></label>
                <input type="email" placeholder="example@domain.com" className="contact-input" required />
              </div>

              <div className="contact-field">
                <label className="contact-label">Nội dung lời nhắn <span className="contact-required">*</span></label>
                <textarea placeholder="Tôi muốn hỏi về giải pháp giáo dục..." className="contact-textarea" required />
              </div>

              <button className="contact-send" onClick={() => { alert('Lời nhắn của bạn đã được gửi thành công!'); setIsContactOpen(false); }}>
                Gửi lời nhắn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}