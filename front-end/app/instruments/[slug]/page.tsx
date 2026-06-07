import React from 'react';
import Link from 'next/link';

export default function InstrumentPage({ params }: { params: { slug: string } }) {
  // Un-kebab-case the slug for display
  const instrumentName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <main className="flex-grow pt-[120px] pb-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-gutter z-10 text-center items-center justify-center">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">{instrumentName}</h1>
      <p className="text-on-surface-variant max-w-2xl mt-4">
        Chi tiết về {instrumentName} đang được xây dựng.
      </p>
      <Link href="/studio" className="mt-8 bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
        Mở Studio Luyện Tập
      </Link>
    </main>
  );
}
