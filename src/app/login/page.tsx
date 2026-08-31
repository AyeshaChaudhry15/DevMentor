'use client';

import { useState } from 'react';
import {
  Cat,
  Eye,
  EyeOff,
  Users,
  CalendarDays,
  Star,
CreditCard} from 'lucide-react';
import Link from 'next/link';
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1C2333] p-5">
      <div className="grid min-h-[650px] w-full max-w-[1100px] grid-cols-1 overflow-hidden shadow-2xl lg:grid-cols-[45%_55%]">
        <section className="flex flex-col bg-[#1C2333] px-8 py-8 lg:px-[54px]">
          <div className="mb-12 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-[4px] ">
              <CreditCard size={27} color="#52A898" /> 
            </div>
            <span className="text-xl font-semibold text-[#52A898]">
              DevMentor
            </span>
          </div>
          <div className="mb-5">
            <h1 className="text-[38px] leading-tight font-semibold text-[#E8EBF2]">
              Welcome back
            </h1>
            <p className="mt-2 text-[15px] text-[#A8B2C4]">
              Log in to continue your mentorship journey
            </p>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-3 rounded-lg border border-[#3C4F68] bg-[#2A3447] text-sm text-[#E8EBF2] transition hover:bg-[#334057]"
            >
              <Cat size={17} />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-3 rounded-lg border border-[#3C4F68] bg-[#2A3447] text-sm text-[#E8EBF2] transition hover:bg-[#334057]"
            >
              <span className="text-[17px] font-bold text-[#4285F4]">G</span>
              Continue with Google
            </button>
          </div>
          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#2F394B]" />
            <span className="text-xs whitespace-nowrap text-[#A8B2C4]">
              or continue with email
            </span>
            <div className="h-px flex-1 bg-[#2F394B]" />
          </div>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-xs text-[#E8EBF2]">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-10 w-full rounded-lg border border-[#3C4F68] bg-[#2A3447] px-3 text-sm text-[#E8EBF2] transition outline-none placeholder:text-[#A8B2C4] focus:border-[#52A898]"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-[#E8EBF2]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="h-10 w-full rounded-lg border border-[#3C4F68] bg-[#2A3447] px-3 pr-10 text-sm text-[#E8EBF2] transition outline-none placeholder:text-[#A8B2C4] focus:border-[#52A898]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[#A8B2C4] hover:text-[#E8EBF2]"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                href="/forgetpassword"
                className="text-xs text-[#6CA6E8] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-[#52A898] text-[15px] font-medium text-[#16202C] transition hover:bg-[#479889]"
            >
              Log In
            </button>
          </form>
          <p className="mt-5 text-center text-xs text-[#A8B2C4]">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-[#5B7FA6] hover:text-[#6CA6E8] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </section>
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#2A3447] px-8 py-12">
          <div className="absolute top-[170px] left-[110px] h-8 w-8 rounded-full bg-[#52A898]/20" />
          <div className="absolute top-[170px] left-[145px] h-8 w-8 rounded-full bg-[#52A898]/20" />
          <div className="relative z-10 w-full max-w-[450px] rounded-xl border border-[#3C4F68] bg-[#1C2333] p-5 shadow-xl">
            <div className="mb-3 text-3xl leading-none font-bold text-[#52A898]">
              “
            </div>
            <p className="text-lg leading-[1.7] font-semibold text-[#E8EBF2]">
              "DevMentor helped me land my first senior role. The AI code
              reviews alone saved me months of trial and error."
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#52A898] to-[#3C4F68] text-xs font-semibold text-white">
                SC
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#E8EBF2]">
                  Sarah Chen
                </h3>
                <p className="text-xs text-[#A8B2C4]">
                  Software Engineer at{' '}
                  <span className="text-[#6CA6E8]">TechFlow</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#3C4F68] bg-[#1C2333] px-4 py-2">
              <Users size={13} className="text-[#52A898]" />
              <span className="text-[11px] text-[#A8B2C4]">
                <span className="text-[#E8EBF2]">2,400+</span> Mentors
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#3C4F68] bg-[#1C2333] px-4 py-2">
              <CalendarDays size={13} className="text-[#52A898]" />
              <span className="text-[11px] text-[#A8B2C4]">
                <span className="text-[#E8EBF2]">18,000+</span> Sessions
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#3C4F68] bg-[#1C2333] px-4 py-2">
              <Star size={13} className="fill-[#D4A76A] text-[#D4A76A]" />
              <span className="text-[11px] text-[#A8B2C4]">
                <span className="text-[#E8EBF2]">4.9</span> Rating
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
