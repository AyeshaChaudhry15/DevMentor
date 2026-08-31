'use client';

import { useState } from 'react';
import { CreditCard, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex h-15 items-center justify-between md:justify-around border-b-1 border-[#919CAD] bg-[#1C2333] px-4 md:px-0">
        <div className="flex gap-2 items-center">
          <Link href={'/'}>
            <CreditCard size={27} color="#52A898" />
          </Link>
          <Link href={'/'}>
            <span className="text-lg font-bold text-[#52A898]">DevMentor</span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex w-[450px] items-center justify-around text-[#919CAD]">
          <Link
            href={'/howitworks'}
            className="duration-300 hover:scale-105 hover:text-[#52A898]"
          >
            How It Works
          </Link>
          <Link
            href={'/findmentors'}
            className="duration-300 hover:scale-105 hover:text-[#52A898]"
          >
            Find Mentors
          </Link>
          <Link
            href={'/aireviews'}
            className="duration-300 hover:scale-105 hover:text-[#52A898]"
          >
            AI Reviews
          </Link>
          <Link
            href={'/pricing'}
            className="duration-300 hover:scale-105 hover:text-[#52A898]"
          >
            Pricing
          </Link>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={'/login'}
            className="text-[#919CAD] duration-300 hover:scale-105"
          >
            Login
          </Link>

          <Link
            href={'/signup'}
            className="rounded-lg bg-[#52A898] px-4 py-2 duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-[#919CAD]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 border-b-1 border-[#919CAD] bg-[#1C2333] px-4 py-6 text-[#919CAD]">
          <Link
            href={'/howitworks'}
            className="duration-300 hover:text-[#52A898]"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href={'/findmentors'}
            className="duration-300 hover:text-[#52A898]"
            onClick={() => setIsOpen(false)}
          >
            Find Mentors
          </Link>
          <Link
            href={'/aireviews'}
            className="duration-300 hover:text-[#52A898]"
            onClick={() => setIsOpen(false)}
          >
            AI Reviews
          </Link>
          <Link
            href={'/pricing'}
            className="duration-300 hover:text-[#52A898]"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>

          <div className="flex flex-col gap-3 pt-2 border-t border-[#919CAD]/30">
            <Link
              href={'/login'}
              className="text-[#919CAD] duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href={'/signup'}
              className="rounded-lg bg-[#52A898] px-4 py-2 text-center duration-300 text-black"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;