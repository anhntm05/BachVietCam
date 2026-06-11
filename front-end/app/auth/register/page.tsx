'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullname, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful! Please login.');
        router.push('/auth/login');
      } else {
        setError(data.error || 'Failed to register');
      }
    } catch (err) {
      setError('An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">


      <main className="flex-grow flex items-center justify-center px-5 md:px-0 pt-24 pb-12 relative">
        {/* Ambient Decorative Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-[-50px] right-[-50px] opacity-10 rotate-[-15deg] -z-10">
            <span className="material-symbols-outlined text-[400px] text-primary">filter_vintage</span>
          </div>
        </div>

        {/* Registration Bento Container */}
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch z-10">
          
          {/* Left Side: Cultural Inspiration (Desktop Only) */}
          <div className="hidden md:flex md:col-span-5 flex-col justify-between p-10 bg-surface-container-low rounded-xl border border-primary-container/20 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
              <h1 className="font-display-lg text-display-lg text-on-surface-variant leading-tight">Khởi đầu <br/><span className="text-primary italic">Hành trình</span></h1>
              <p className="mt-6 font-body-lg text-body-lg text-outline max-w-xs leading-relaxed">
                Tham gia cùng chúng tôi để khám phá những thanh âm huyền bí của dân tộc trong không gian số đương đại.
              </p>
            </div>
            <div className="mt-12 relative z-10">
              <div className="flex items-center gap-4 py-4 border-t border-outline-variant/40">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-xl">library_music</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Di sản số hóa</span>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form */}
          <div className="md:col-span-7 bg-white/40 backdrop-blur-md rounded-xl shadow-2xl shadow-primary/5 p-8 md:p-12 relative overflow-hidden border-t-2 border-primary">
            {/* Step Indicator */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</span>
                <span className="font-label-sm text-label-sm text-primary">Thông tin cá nhân</span>
              </div>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
              <div className="flex items-center gap-2 opacity-40">
                <span className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-xs font-bold">2</span>
                <span className="font-label-sm text-label-sm text-outline">Xác thực</span>
              </div>
            </div>

            <header className="mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Tạo tài khoản mới</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Vui lòng điền đầy đủ các thông tin bên dưới để bắt đầu.</p>
            </header>

            {error && <div className="mb-4 text-error font-bold">{error}</div>}

            <form className="space-y-6" onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="group">
                <label className="block font-label-sm text-label-sm text-outline mb-2 group-focus-within:text-primary transition-colors">Họ và Tên</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-body-md placeholder:text-outline-variant/60" 
                    placeholder="Nguyễn Văn A" 
                    required 
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline-variant group-focus-within:text-primary transition-colors">person</span>
                </div>
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="block font-label-sm text-label-sm text-outline mb-2 group-focus-within:text-primary transition-colors">Địa chỉ Email</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-body-md placeholder:text-outline-variant/60" 
                    placeholder="example@bachvietcam.vn" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline-variant group-focus-within:text-primary transition-colors">mail</span>
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <label className="block font-label-sm text-label-sm text-outline mb-2 group-focus-within:text-primary transition-colors">Mật khẩu</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-body-md placeholder:text-outline-variant/60" 
                    placeholder="••••••••" 
                    required 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-0 bottom-3 text-outline-variant hover:text-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                <p className="mt-2 text-[10px] text-outline uppercase tracking-wider">Tối thiểu 8 ký tự bao gồm chữ và số</p>
              </div>

              {/* Actions */}
              <div className="pt-6 space-y-4">
                <button 
                  className="w-full py-4 bg-primary-container text-on-primary-container font-bold rounded-lg shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Đang xử lý...' : 'Tiếp tục đăng ký'}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                
                <div className="flex items-center justify-center gap-3 py-2">
                  <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                  <span className="font-label-sm text-label-sm text-outline">Hoặc đăng ký bằng</span>
                  <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors" type="button">
                    <span className="font-label-sm text-label-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors" type="button">
                    <span className="font-label-sm text-label-sm">Apple</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Terms */}
            <p className="mt-10 text-center text-[11px] text-on-surface-variant leading-relaxed">
              Bằng việc đăng ký, bạn đồng ý với <a className="text-primary font-bold underline" href="#">Điều khoản dịch vụ</a> và <br/> <a className="text-primary font-bold underline" href="#">Chính sách bảo mật</a> của Bách Việt Cầm.
            </p>
          </div>
        </div>
      </main>


    </div>
  );
}
