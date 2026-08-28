"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedData) return;

    const newOtp = [...otp];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    if (timer !== 0) return;

    setTimer(45);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();

    console.log("Verification email resent");
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length !== 6) {
      alert("Please enter the 6-digit verification code.");
      return;
    }

    console.log("OTP:", code);

  };

  return (
    <main className="min-h-screen  flex items-center justify-center px-4 relative overflow-hidden">

    

      
      <div className="relative z-10 w-full max-w-[480px]">

        
        <div className="text-center mb-5">
          <Link
            href="/"
            className="text-[#52A898] text-[18px] font-semibold"
          >
            DevMentor
          </Link>
        </div>

        <div className="w-full bg-[#2A3447] border border-[#3C4F68] rounded-[12px] px-7 py-6 shadow-xl">

          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#52A898]/10 border border-[#52A898]/20 flex items-center justify-center">
              <Mail
                size={28}
                strokeWidth={1.5}
                className="text-[#52A898]"
              />
            </div>
          </div>

          <h1 className="text-center text-[22px] font-semibold text-[#E8EBF2]">
            Check your inbox
          </h1>

          <p className="text-center text-[14px] leading-5 text-[#A8B2C4] mt-2">
            We sent a verification link to{" "}
            <span className="text-[#E8EBF2] font-medium">
              zohaib@email.com
            </span>{" "}
            — click it to activate your account or enter the code below.
          </p>

          <div className="flex justify-center gap-2 mt-7">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                onPaste={handlePaste}
                className={`
                  w-[48px] h-[52px]
                  bg-[#1C2333]
                  border rounded-[6px]
                  text-center
                  text-[22px]
                  font-mono
                  text-[#E8EBF2]
                  outline-none
                  transition-all
                  ${
                    digit
                      ? "border-[#52A898]"
                      : "border-[#3C4F68]"
                  }
                  focus:border-[#52A898]
                  focus:ring-1
                  focus:ring-[#52A898]/30
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleVerify}
            className="
              w-full
              h-[45px]
              mt-6
              rounded-[6px]
              bg-[#52A898]
              hover:bg-[#479889]
              text-[#16202C]
              text-[14px]
              font-medium
              transition-colors
            "
          >
            Verify Email
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-[#3C4F68] flex-1" />
            <span className="text-[#A8B2C4] text-[12px]">
              or
            </span>
            <div className="h-px bg-[#3C4F68] flex-1" />
          </div>

          <p className="text-center text-[13px] text-[#A8B2C4]">
            Didn&apos;t receive it?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={timer !== 0}
              className={`
                transition-colors
                ${
                  timer === 0
                    ? "text-[#5B7FA6] hover:text-[#6CA6E8] hover:underline cursor-pointer"
                    : "text-[#5B7FA6]/50 cursor-not-allowed"
                }
              `}
            >
              Resend email
            </button>
          </p>

          <p className="text-center text-[12px] text-[#A8B2C4] mt-2">
            {timer > 0
              ? `Resend available in 0:${timer
                  .toString()
                  .padStart(2, "0")}`
              : "You can resend the email now"}
          </p>

          <div className="text-center mt-5">
            <Link
              href="/signup"
              className="text-[12px] text-[#A8B2C4] hover:text-[#E8EBF2] transition-colors"
            >
              ← Wrong email? Go back
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}