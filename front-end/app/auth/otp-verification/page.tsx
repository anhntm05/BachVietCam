'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: OTP, 2: Reset Pass
  const [newPassword, setNewPassword] = useState('');
  
  const [timeLeft, setTimeLeft] = useState(119);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('resetEmail');
    if (!storedEmail) {
      router.push('/auth/forgot-pass');
    } else {
      setEmail(storedEmail);
    }
  }, [router]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length !== 6) {
      setError('Vui lòng nhập đầy đủ mã 6 chữ số.');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: code }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep(2); // Proceed to reset password
      } else {
        setError(data.error || 'Mã OTP không hợp lệ hoặc đã hết hạn');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi hệ thống');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const code = otp.join('');
      const apiUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: code, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Đổi mật khẩu thành công! Vui lòng đăng nhập.');
        sessionStorage.removeItem('resetEmail');
        router.push('/auth/login');
      } else {
        setError(data.error || 'Không thể đổi mật khẩu');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi hệ thống');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
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
                <span className="material-symbols-outlined text-primary text-4xl">{step === 1 ? 'lock_person' : 'key_reset'}</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                {step === 1 ? 'Xác Thực OTP' : 'Đổi Mật Khẩu'}
              </h2>
              <p className="font-body-md text-on-surface-variant mb-10 max-w-sm">
                {step === 1 
                  ? 'Chúng tôi đã gửi mã xác thực gồm 6 chữ số đến email của bạn. Vui lòng kiểm tra và nhập mã vào bên dưới.' 
                  : 'Vui lòng nhập mật khẩu mới của bạn.'}
              </p>

              {error && <div className="mb-4 text-error font-bold">{error}</div>}

              {step === 1 ? (
                <form className="w-full mb-10" onSubmit={handleVerifyOtp}>
                  <div className="flex justify-between gap-2 md:gap-4 mb-8">
                    {otp.map((digit, index) => (
                      <input 
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-16 md:w-16 md:h-20 text-center text-2xl font-bold bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:outline-none text-primary rounded-t-lg transition-all" 
                        maxLength={1} 
                        type="text"
                      />
                    ))}
                  </div>

                  <button 
                    className="w-full py-4 bg-primary-container text-on-tertiary-fixed font-bold text-body-lg rounded-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70" 
                    type="submit"
                    disabled={loading}
                  >
                    <span>{loading ? 'Đang Xác Thực...' : 'Xác Nhận Mã'}</span>
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </form>
              ) : (
                <form className="w-full mb-10 text-left" onSubmit={handleResetPassword}>
                  <div className="relative mb-8">
                    <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider block ml-1 mb-2">Mật khẩu mới</label>
                    <div className="flex items-center border-b-2 border-outline-variant focus-within:border-primary transition-all py-2">
                      <span className="material-symbols-outlined text-outline mr-3">lock</span>
                      <input 
                        className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0" 
                        placeholder="••••••••" 
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <button 
                    className="w-full py-4 bg-primary-container text-on-tertiary-fixed font-bold text-body-lg rounded-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70" 
                    type="submit"
                    disabled={loading}
                  >
                    <span>{loading ? 'Đang Đổi...' : 'Đổi Mật Khẩu'}</span>
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                  </button>
                </form>
              )}

              {step === 1 && (
                <div className="flex flex-col items-center gap-2">
                  {timeLeft > 0 ? (
                    <p className="font-body-md text-on-surface-variant">
                      Gửi lại mã sau <span className="font-bold text-primary">{formatTime()}</span>
                    </p>
                  ) : (
                    <button className="text-primary font-bold font-label-sm uppercase tracking-wider hover:underline transition-all">
                      Gửi Lại Mã Ngay
                    </button>
                  )}
                </div>
              )}

              <button onClick={() => router.push('/auth/login')} className="mt-8 font-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
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
