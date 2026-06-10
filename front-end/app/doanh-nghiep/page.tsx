import React from 'react';
import HeroSection from '@/components/features/company/HeroSection';
import MissionSection from '@/components/features/company/MissionSection';
import TeamSection from '@/components/features/company/TeamSection';
import ContactSection from '@/components/features/company/ContactSection';

export default function DoanhNghiepPage() {
  return (
    <main className="pt-32 pb-24">
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
