import React from 'react';
import StudioWorkspace from '@/components/features/StudioWorkspace';

export default function StudioPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-gutter z-10">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed-dim">Studio Luyện Tập</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
          Ghi âm phần biểu diễn của bạn hoặc tải lên file âm thanh. AI của Bách Việt Cầm sẽ phân tích và đối chiếu với bản chuẩn của giáo viên.
        </p>
      </div>
      <StudioWorkspace />
    </main>
  );
}
