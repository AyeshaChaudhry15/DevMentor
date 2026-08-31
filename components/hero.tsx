'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-fit lg:h-170 items-center justify-center gap-10 lg:gap-0 bg-[#1C2333] px-6 py-16 lg:px-0 lg:py-0">
      <div className="w-full max-w-150 lg:h-80">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center lg:text-left">
          Get Mentored by Senior Devs.{' '}
          <span className="text-[#52A898]">Reviewed by AI.</span>
        </h1>
        <p className="w-full max-w-130 pt-6 text-base sm:text-lg lg:text-xl text-[#919CAD] text-center lg:text-left mx-auto lg:mx-0">
          Accelerate your engineering career by pairing world-class human mentor
          ship with instant AI code analysis.Build Faster ,write better code and
          level up with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
          <Link
            href={'/signup'}
            className="rounded-lg bg-[#52A898] px-5 py-2 font-bold hover:scale-105 duration-300"
          >
            Find a Mentor
          </Link>

          <Link
            href={'/signup'}
            className="rounded-lg border-2 border-[#919CAD] px-4 py-2 text-white hover:scale-105 duration-300 hover:border-[#52A898] hover:text-[#52A898]"
          >
            Become a Mentor
          </Link>
        </div>
      </div>

      <div className="flex w-full max-w-150 lg:h-150 justify-center py-8">
        <div
          ref={cardRef}
          className="h-auto w-full max-w-[400px] rounded-2xl bg-[#2A3447] p-6"
        >
          <div className="mb-6 flex items-center gap-2">
            <span>
              <Cpu size={17} color="#52A898 " />
            </span>
            <div className="flex w-full justify-between">
              <span className="font-bold text-white">AI code analysis</span>
              <span className="text-[#919CAD]">auth_service.ts</span>
            </div>
          </div>
          <hr className="pb-4 text-[#919CAD]" />

          <div className="mb-6 flex justify-center">
            <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border-[3px] border-[#52A898] shadow-sm shadow-[#52A898]">
              <span className="text-3xl font-bold text-[#52A898]">87</span>
              <span className="text-[11px] text-[#919CAD]">SCORE</span>
            </div>
          </div>

          <div className="mb-1 flex justify-between text-sm">
            <span className="font-semibold text-white">Security</span>
            <span className="text-[#52A898]">92%</span>
          </div>
          <div className="mb-3 h-2 rounded bg-[#2E3648]">
            <div className="h-full w-[92%] rounded bg-[#52A898]" />
          </div>

          <div className="mb-1 flex justify-between text-sm">
            <span className="font-semibold text-white">Performance</span>
            <span className="text-[#FFDDB3]">78%</span>
          </div>
          <div className="mb-3 h-2 rounded bg-[#2E3648]">
            <div className="h-full w-[78%] rounded bg-[#FFDDB3]" />
          </div>

          <div className="mb-1 flex justify-between text-sm">
            <span className="font-semibold text-white">Maintainability</span>
            <span className="text-[#52A898]">89%</span>
          </div>
          <div className="mb-4 h-2 rounded bg-[#2E3648]">
            <div className="h-full w-[89%] rounded bg-[#52A898]" />
          </div>

          <div className="mt-8 rounded-lg bg-[#1C2333] p-3 font-mono text-xs text-[#C7CDD8]">
            <span className="text-[#F5C99B]">!</span> Line 42: Consider
            replacing <code className="text-white">jwt.verify</code> without
            explicit algorithm specification.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;