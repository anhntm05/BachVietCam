import React from 'react';
import Hero from '@/components/ui/Hero';

export default function Page() {
  return (
    <main className="flex-grow pt-[120px] pb-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-gutter z-10">
      <Hero />
    </main>
  );
}
