import React from 'react';
import InstrumentsHero from '@/components/features/instruments/general/InstrumentsHero';
import InstrumentsDirectory from '@/components/features/instruments/general/InstrumentsDirectory';
import InstrumentsShowcase from '@/components/features/instruments/general/InstrumentsShowcase';
import InstrumentsCTA from '@/components/features/instruments/general/InstrumentsCTA';

export const metadata = {
  title: 'Kho Tàng Nhạc Cụ - Bách Việt Cầm',
  description: 'Nơi lưu giữ linh hồn của âm nhạc Việt. Khám phá các loại nhạc cụ truyền thống Việt Nam.',
};

export default function InstrumentsPage() {
  return (
    <main className="pt-24 min-h-screen">
      <InstrumentsHero />
      <InstrumentsDirectory />
      <InstrumentsShowcase />
      <InstrumentsCTA />
    </main>
  );
}
