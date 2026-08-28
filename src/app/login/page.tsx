"use client";

import { useState } from "react";
import { Cat, Eye, EyeOff, Users, CalendarDays, Star, FileTerminal, } from "lucide-react";
import Link from "next/link";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen bg-[#1C2333] flex items-center justify-center p-5">
            <div className="w-full max-w-[1100px] min-h-[650px] grid grid-cols-1 lg:grid-cols-[45%_55%] overflow-hidden shadow-2xl">
                <section className="bg-[#1C2333] px-8 py-8 lg:px-[54px] flex flex-col">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-7 h-7 rounded-[4px] bg-[#52A898] flex items-center justify-center">
                            <FileTerminal size={17} className="text-[#1C2333]" />
                        </div>
                        <span className="text-[#E8EBF2] text-xl font-semibold">
                            DevMentor
                        </span>
                    </div>
                    <div className="mb-5">
                        <h1 className="text-[38px] leading-tight font-semibold text-[#E8EBF2]">
                            Welcome back
                        </h1>
                        <p className="text-[#A8B2C4] mt-2 text-[15px]">
                            Log in to continue your mentorship journey
                        </p>
                    </div>
                    <div className="space-y-3">
                        <button
                            type="button"
                            className="w-full h-10 rounded-lg bg-[#2A3447] border border-[#3C4F68] text-[#E8EBF2] text-sm flex items-center justify-center gap-3 hover:bg-[#334057] transition" >
                            <Cat size={17} />
                            Continue with GitHub
                        </button>
                        <button
                            type="button"
                            className="w-full h-10 rounded-lg bg-[#2A3447] border border-[#3C4F68] text-[#E8EBF2] text-sm flex items-center justify-center gap-3 hover:bg-[#334057] transition">
                            <span className="font-bold text-[17px] text-[#4285F4]">
                                G
                            </span>
                            Continue with Google
                        </button>
                    </div>
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-px bg-[#2F394B] flex-1" />
                        <span className="text-[#A8B2C4] text-xs whitespace-nowrap">
                            or continue with email
                        </span>
                        <div className="h-px bg-[#2F394B] flex-1" />
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-[#E8EBF2] text-xs mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full h-10 rounded-lg border border-[#3C4F68] bg-[#2A3447] px-3 text-sm text-[#E8EBF2] placeholder:text-[#A8B2C4] outline-none focus:border-[#52A898] transition" />
                        </div>
                        <div>
                            <label className="block text-[#E8EBF2] text-xs mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full h-10 rounded-lg border border-[#3C4F68] bg-[#2A3447] px-3 pr-10 text-sm text-[#E8EBF2] placeholder:text-[#A8B2C4] outline-none focus:border-[#52A898] transition" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8B2C4] hover:text-[#E8EBF2]" >
                                    {showPassword ? (
                                        <EyeOff size={17} />
                                    ) : (
                                        <Eye size={17} />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                          <Link
  href="/forgot-password"
  className="text-[#6CA6E8] text-xs hover:underline"
>
  Forgot password?
</Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full h-10 rounded-lg bg-[#52A898] text-[#16202C] font-medium text-[15px] hover:bg-[#479889] transition">
                            Log In
                        </button>
                    </form>
                    <p className="text-center text-[#A8B2C4] text-xs mt-5">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-[#5B7FA6] hover:text-[#6CA6E8] hover:underline">
                            Sign up
                        </Link>
                    </p>
                </section>
                <section className="bg-[#2A3447] relative flex flex-col items-center justify-center px-8 py-12 overflow-hidden">
                    <div className="absolute top-[170px] left-[110px] w-8 h-8 rounded-full bg-[#52A898]/20" />
                    <div className="absolute top-[170px] left-[145px] w-8 h-8 rounded-full bg-[#52A898]/20" />
                    <div className="relative z-10 w-full max-w-[450px] rounded-xl border border-[#3C4F68] bg-[#1C2333] p-5 shadow-xl">
                        <div className="text-[#52A898] text-3xl font-bold leading-none mb-3">
                            “
                        </div>
                        <p className="text-[#E8EBF2] text-lg font-semibold leading-[1.7]">
                            "DevMentor helped me land my first senior role. The AI code
                            reviews alone saved me months of trial and error."
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#52A898] to-[#3C4F68] flex items-center justify-center text-xs font-semibold text-white">
                                SC
                            </div>
                            <div>
                                <h3 className="text-[#E8EBF2] font-semibold text-sm">
                                    Sarah Chen
                                </h3>
                                <p className="text-[#A8B2C4] text-xs">
                                    Software Engineer at{" "}
                                    <span className="text-[#6CA6E8]">
                                        TechFlow
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-12">
                        <div className="flex items-center gap-2 rounded-full bg-[#1C2333] border border-[#3C4F68] px-4 py-2">
                            <Users size={13} className="text-[#52A898]" />
                            <span className="text-[#A8B2C4] text-[11px]">
                                <span className="text-[#E8EBF2]">
                                    2,400+
                                </span>{" "}
                                Mentors
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-[#1C2333] border border-[#3C4F68] px-4 py-2">
                            <CalendarDays size={13} className="text-[#52A898]" />
                            <span className="text-[#A8B2C4] text-[11px]">
                                <span className="text-[#E8EBF2]">
                                    18,000+
                                </span>{" "}
                                Sessions
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-[#1C2333] border border-[#3C4F68] px-4 py-2">
                            <Star size={13} className="text-[#D4A76A] fill-[#D4A76A]" />
                            <span className="text-[#A8B2C4] text-[11px]">
                                <span className="text-[#E8EBF2]">
                                    4.9
                                </span>{" "}
                                Rating
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}