'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleForgotPass = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        // Pass email to OTP page via query params or session storage
        sessionStorage.setItem('resetEmail', email);
        router.push('/auth/otp-verification');
      } else {
        setError(data.error || 'Failed to send OTP');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">

      <main className="flex-grow flex items-center justify-center px-5 md:px-16 relative overflow-hidden">
        
        {/* Background Atmospheric Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 opacity-10 animate-[float_6s_ease-in-out_infinite]">
            <img alt="" className="w-full h-full object-contain filter grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHhDBOYw128QMebh4b6LEZvX3t1q3T6VKKGFN3gCTJUXsYLxbkSUCvUcqV-2dZrjdagBjWA2fHizReMA5xwwPAMYQTSORfJcqaSHZBF10Ari0V3QxKmthf-Kwsch7bx4Y61pmfgqxzBne-eiU3wwAkn6MPnLZTsA3tTiXgl4JTeOp2y8K9mKyTDkCCuf2_u_vWGtpjqiXGLvzRQ9qyLCSAj8cRMH08mkD6pGhL8-Mein5DocrbGMDvn-AEJKMwdROuUM0-jxuOnOj"/>
          </div>
          <div className="absolute bottom-[10%] right-[5%] w-80 h-80 opacity-10 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '-3s' }}>
            <img alt="" className="w-full h-full object-contain filter grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupZFps9EPrm4nS5ZwIlcRgvgcjfLtxTWzsyFkslxUgpJ5iTb8mQLQfeZ0PS1rBAq2ADf7nCSBqTzllyDscQulWMdk1yAqLyGPivveZwkFI4nTzAIBE2escN4tdM75Nra-yUFtHVGmcaKHuJ7cjPcsrZ0KEP93qtghxYUs6VEsZ79K5ed3pThJD02-RkKkJm2zRS-wx7CQ5BU9Xy4I6nCSS5O86NSUhsFCUEcZSEy-LoTQ6b138ZZr93-G7lhRgxUsBFg_68YXqTT0"/>
          </div>
        </div>

        <div className="w-full max-w-lg z-10">
          <div className="relative p-8 md:p-12 rounded-xl shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212, 175, 55, 0.2)', borderTop: '2px solid #D4AF37' }}>
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">key</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Quên Mật Khẩu</h2>
              <p className="font-body-md text-on-surface-variant mb-10 max-w-sm">
                Nhập địa chỉ email của bạn để nhận mã OTP lấy lại mật khẩu.
              </p>

              {error && <div className="mb-4 text-error font-bold">{error}</div>}

              <form className="w-full mb-10" onSubmit={handleForgotPass}>
                <div className="relative mb-8 text-left">
                  <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider block ml-1 mb-2">Email</label>
                  <div className="flex items-center border-b-2 border-outline-variant focus-within:border-primary transition-all py-2">
                    <span className="material-symbols-outlined text-outline mr-3">mail</span>
                    <input 
                      className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0" 
                      placeholder="example@bachvietcam.vn" 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  className="w-full py-4 bg-primary-container text-on-tertiary-fixed font-bold text-body-lg rounded-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70" 
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? 'Đang Gửi...' : 'Gửi Mã OTP'}</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </form>

              <button onClick={() => router.push('/auth/login')} className="mt-4 font-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">keyboard_backspace</span>
                <span>Quay lại trang đăng nhập</span>
              </button>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
