import { CreditCard } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="flex h-15 items-center justify-around border-b-1 border-[#919CAD] bg-[#1C2333]">
        <div className="flex gap-2">
          <Link href={"/"}>
            <CreditCard size={27} color="#52A898" />
          </Link>
          <Link href={'/'}>
            <span className="text-lg font-bold text-[#52A898]">DevMentor</span>
          </Link>
        </div>
        <ul className="flex w-[450px] items-center justify-around text-[#919CAD]">
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

        <div className="flex items-center gap-4">
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
      </nav>
    </div>
  );
};

export default Navbar;
