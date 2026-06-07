import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-8 flex flex-col items-start">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background relative z-10">
        Studio Luyện Tập
      </h1>

      {/* 3D Lotus Placeholder Image */}
      <div className="absolute right-0 top-0 w-32 h-32 opacity-80 pointer-events-none hidden md:block">
        <img 
          className="w-full h-full object-cover mix-blend-multiply opacity-50 rounded-full" 
          alt="A highly detailed 3D rendering of a pristine white lotus flower with delicate gold accents." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLF8wltQtV8LdA5myVJKO-UF76CRErqafqEfnDtK3DZNaqkwIEjlGzplTQt0Yy8DZ_mBiFN_0-MB5F6iUD80rEZgaTigxpKgxh87Ak5HyQvJUIIoPrDutNHrMVXr16v3gf0uoMZ0isV51Tw_uCPPd71dqpMxCdHtSKawBbogKawTYOLHfxJKbgKkwlQ17_UtBYI3O6gx3DkH17MMFvprZMukE2kumofmLUc0bHdS-j8e14rfLVV-OZu6vvOjy-t5KBRswoDBabdC3f" 
        />
      </div>
    </section>
  );
}
