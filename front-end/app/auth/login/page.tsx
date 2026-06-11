'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        Cookies.set('token', data.token, { expires: 1 });
        if (data.user.role === 'Admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      } else {
        setError(data.error || 'Failed to login');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed font-body-md text-on-surface bg-[#f9f9f8]">
      {/* Background Atmospheric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 opacity-10 animate-[float_6s_ease-in-out_infinite]">
          <img alt="" className="w-full h-full object-contain filter grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHhDBOYw128QMebh4b6LEZvX3t1q3T6VKKGFN3gCTJUXsYLxbkSUCvUcqV-2dZrjdagBjWA2fHizReMA5xwwPAMYQTSORfJcqaSHZBF10Ari0V3QxKmthf-Kwsch7bx4Y61pmfgqxzBne-eiU3wwAkn6MPnLZTsA3tTiXgl4JTeOp2y8K9mKyTDkCCuf2_u_vWGtpjqiXGLvzRQ9qyLCSAj8cRMH08mkD6pGhL8-Mein5DocrbGMDvn-AEJKMwdROuUM0-jxuOnOj"/>
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 opacity-10 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '-3s' }}>
          <img alt="" className="w-full h-full object-contain filter grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupZFps9EPrm4nS5ZwIlcRgvgcjfLtxTWzsyFkslxUgpJ5iTb8mQLQfeZ0PS1rBAq2ADf7nCSBqTzllyDscQulWMdk1yAqLyGPivveZwkFI4nTzAIBE2escN4tdM75Nra-yUFtHVGmcaKHuJ7cjPcsrZ0KEP93qtghxYUs6VEsZ79K5ed3pThJD02-RkKkJm2zRS-wx7CQ5BU9Xy4I6nCSS5O86NSUhsFCUEcZSEy-LoTQ6b138ZZr93-G7lhRgxUsBFg_68YXqTT0"/>
        </div>
      </div>



      {/* Main Auth Content */}
      <main className="relative z-30 flex-grow flex items-center justify-center px-5 md:px-0 py-20">
        <div className="w-full max-w-[480px] p-10 md:p-12 rounded-xl shadow-sm relative" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212, 175, 55, 0.2)', borderTop: '2px solid #D4AF37' }}>
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">login</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Chào Mừng Trở Lại</h2>
              <p className="font-body-md text-on-surface-variant">Tiếp tục hành trình khám phá di sản âm nhạc dân tộc</p>
            </div>
          {error && <div className="mb-4 text-error text-center font-bold">{error}</div>}

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Username/Email */}
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider block ml-1">Email</label>
              <div className="relative flex items-center border-b border-outline-variant py-2 transition-all focus-within:border-primary">
                <span className="material-symbols-outlined text-outline mr-3">person</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface placeholder:text-outline/50 p-0" 
                  placeholder="username@email.com" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-end">
                <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider block ml-1">Mật khẩu</label>
                <button type="button" onClick={() => router.push('/auth/forgot-pass')} className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors mb-1">Quên mật khẩu?</button>
              </div>
              <div className="relative flex items-center border-b border-outline-variant py-2 transition-all focus-within:border-primary">
                <span className="material-symbols-outlined text-outline mr-3">lock</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface placeholder:text-outline/50 p-0" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  className="text-outline hover:text-primary transition-colors" 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button 
              className="w-full py-4 bg-primary-container text-on-tertiary-fixed font-bold text-body-lg rounded-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70" 
              type="submit"
              disabled={loading}
            >
              <span>{loading ? 'Đang Xử Lý...' : 'Đăng Nhập'}</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/50"></div>
              </div>
              <span className="relative px-4 bg-transparent backdrop-blur-md font-label-sm text-label-sm text-outline uppercase tracking-widest">Hoặc đăng nhập với</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors" type="button">
                <span className="font-label-sm text-label-sm text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors" type="button">
                <span className="font-label-sm text-label-sm text-on-surface">Apple</span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-10 text-center border-t border-outline-variant pt-8">
            <p className="font-body-md text-body-md text-on-surface-variant">Chưa có tài khoản?</p>
            <button 
              onClick={() => router.push('/auth/register')} 
              className="inline-block mt-2 font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest border-b-2 border-transparent hover:border-primary-container transition-all"
            >
              Đăng ký ngay
            </button>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
