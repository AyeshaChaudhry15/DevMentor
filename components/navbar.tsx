import { CreditCard } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="flex h-15 items-center justify-around bg-[#1C2333] border-b-1 border-[#919CAD]">
        <div className="flex gap-2">
          <CreditCard size={27} color="#52A898" />
          <span className="text-lg font-bold text-[#52A898]">DevMentor</span>
        </div>
        <ul className="flex  w-[450px] items-center justify-around text-[#919CAD]">
          <Link href={'/howitworks'} className='hover:scale-105 duration-300 hover:text-[#52A898]'>How It Works</Link>
          <Link href={'/findmentors'} className='hover:scale-105 duration-300 hover:text-[#52A898]'>Find Mentors</Link>
          <Link href={'/aireviews'} className='hover:scale-105 duration-300 hover:text-[#52A898]'>AI Reviews</Link>
          <Link href={'/pricing'} className='hover:scale-105 duration-300 hover:text-[#52A898]'>Pricing</Link>
        </ul>

        <div className="flex items-center gap-4">
          <Link href={'/login'} className="text-[#919CAD] hover:scale-105 duration-300 ">
            Login
          </Link>

          <Link href={'/signup'} className="rounded-lg bg-[#52A898] py-2 px-4 hover:scale-105 duration-300 ">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
