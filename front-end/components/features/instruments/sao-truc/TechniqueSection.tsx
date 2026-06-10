import React from 'react';

export default function TechniqueSection() {
  return (
    <section className="px-margin-desktop py-12 max-w-container-max mx-auto reveal mb-20">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-10 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">psychology</span> Lý thuyết &amp; Kỹ thuật
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="text-center group p-6 glass-panel rounded-2xl border-none shadow-sm">
          <div className="mb-4 inline-block p-4 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary-container">air</span>
          </div>
          <h4 className="font-bold mb-2">Cách lấy hơi</h4>
          <p className="text-sm text-on-surface-variant">Kỹ thuật lấy hơi bụng sâu giúp duy trì những nốt ngân dài và ổn định âm sắc.</p>
        </div>
        <div className="text-center group p-6 glass-panel rounded-2xl border-none shadow-sm">
          <div className="mb-4 inline-block p-4 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary-container">waves</span>
          </div>
          <h4 className="font-bold mb-2">Rung (Vibrato)</h4>
          <p className="text-sm text-on-surface-variant">Sử dụng hơi hoặc ngón tay linh hoạt tạo ra độ rung truyền cảm đặc trưng cho tiếng sáo.</p>
        </div>
        <div className="text-center group p-6 glass-panel rounded-2xl border-none shadow-sm">
          <div className="mb-4 inline-block p-4 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary-container">fingerprint</span>
          </div>
          <h4 className="font-bold mb-2">Vuốt ngón</h4>
          <p className="text-sm text-on-surface-variant">Sự uyển chuyển của các đầu ngón tay tạo ra những luyến láy mềm mại như dòng nước.</p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-surface-container-highest/30 rounded-xl border-l-4 border-primary italic text-on-surface-variant">
        "Tiếng sáo trúc hay không chỉ ở kỹ thuật, mà còn ở cái tâm của người thổi hòa vào từng nốt nhạc."
      </div>
    </section>
  );
}
