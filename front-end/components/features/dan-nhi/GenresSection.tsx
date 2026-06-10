import React from 'react';

export default function GenresSection() {
  return (
    <section className="py-24 bg-inverse-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary-fixed mb-2">Hồn Nhạc Trong Từng Thể Loại</h2>
          <div className="section-divider opacity-30"></div>
          <p className="text-surface-variant mt-4 font-body-md">Từ cung đình trang nghiêm đến hè phố mộc mạc</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Hát Xẩm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVuYwfHAVAtS-9DZ7RzgzrEofOimOmxPSmZ8BjvjQfdXoROFO8JpX84yx_ktXNcpNMfDYcFAem0A2B6uqpiuTvkUSeMxkBjTd-JnLUVt6IyCEIVIyav4VhawV5ldIFdLSyUQ3_qDjUebcJVar_ucWBXpdFpHZA4y7LYvzlD-Q8s3WxqiULJ9-yJWmzxOEUuzyN_Fnaww4Jhd92nNY9s6E1whEfKaImOy03a1T0CnieWjOljPFpWDlUPaFXPADDGfXfcGhDOQC9H0xk" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-headline-sm text-white mb-3">Hát Xẩm</h3>
              <p className="text-white/70 font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">Người bạn tri kỷ của những nghệ sĩ hát xẩm trên các nẻo đường quê Việt.</p>
            </div>
          </div>
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Nhã Nhạc" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEyxNUox8SHhjtVeezxEbgW7SBA7H2WZNn0sLps5KT5fMnfZojH2Fm5nl1H_BPwPkeoYXjh5Xpx-NDs-djs8IQ36cbpb1_QwvDHQ1EFB9-Nm2lnJolIYatOhHb_5avohfHVx8-hW4ZjyGQMQElSWRSQrYkItGsdEVEpACmfpC-fAebJ2NMm8pOjAI0LElVATnICmORt305rEY3O2LkjFcJOrZ63ULyIE80Q6E9qAFx7Nrq9HpOZm8PfO_mUy1wU1Zsb9XFEYf46YN" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-headline-sm text-white mb-3">Nhã Nhạc</h3>
              <p className="text-white/70 font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">Giữ vai trò chủ đạo trong việc dẫn dắt giai điệu của các đại nhạc cung đình.</p>
            </div>
          </div>
          <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Chèo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt3dCPLG9E7-YkwSbKT_fgZR4WSNpMB2JjkDyVytgeEfw86tts37HAZ3_a3EpSVgt3iii_sNzJNwJLt6eXkfDGGGTEMYKlEyJvarm_LV91029GR5Hcrj0j1UYf1PGEoxHOcp3fMFKWgOH06flRykURC0XtRN9urE7KcGdUHpXE2y67pvFEkUCSX0WiW37ZGdZpnnXlkGuB4lNPBUCfIuraV3VghInTxM0U1DZACzqQ_b4L-ivLXgQmmtRzjZK7Bq83YEPdSEGoYfW9" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline-sm text-headline-sm text-white mb-3">Chèo &amp; Cải Lương</h3>
              <p className="text-white/70 font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">Âm sắc mặn mà, luyến láy đặc trưng cho các vở kịch hát truyền thống.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
