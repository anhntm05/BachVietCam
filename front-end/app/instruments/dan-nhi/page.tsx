import React from 'react';
import HeroSection from '@/components/features/dan-nhi/HeroSection';
import ChronicleSection from '@/components/features/dan-nhi/ChronicleSection';
import ConstructionSection from '@/components/features/dan-nhi/ConstructionSection';
import TechniqueSection from '@/components/features/dan-nhi/TechniqueSection';
import GenresSection from '@/components/features/dan-nhi/GenresSection';
import InstrumentCTA from '@/components/features/instruments/InstrumentCTA';

export default function DanNhiPage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ChronicleSection />
      <ConstructionSection />
      <TechniqueSection />
      <GenresSection />
      <InstrumentCTA 
        instrumentName="đàn Nhị"
        instrumentId="dan_nhi"
        description="Bước vào Studio kỹ thuật số để trải nghiệm kéo đàn Nhị tương tác và khám phá các kỹ thuật biểu diễn cơ bản."
      />
    </main>
  );
}
