import { CheckCircle2, Gauge } from 'lucide-react';

const hero1 = () => {
  return (
    <div className="h-auto lg:h-180 w-full bg-[#1C2333]">
      <hr className="text-[#919CAD]" />
      <h1 className="pt-4 text-center text-sm text-[#919CAD]">
        MENTORS FROM TOP COMPANIES & EXPERTS IN
      </h1>
      <div className="flex h-auto sm:h-20 w-full flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-4 sm:py-0 text-lg sm:text-2xl font-bold text-[#93969D]">
        <span className='hover:text-[#52A898]'>TYPESCRIPT</span>
        <span className='hover:text-[#52A898]'>PYTHON</span>
        <span className='hover:text-[#52A898]'>REACT</span>
        <span className='hover:text-[#52A898]'>NEXT.JS</span>
        <span className='hover:text-[#52A898]'>DOCKER</span>
        <span className='hover:text-[#52A898]'>AWS</span>
      </div>
      <hr className="text-[#919CAD]" />

      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-10 lg:gap-25 px-6 py-16 lg:pt-20 lg:py-0">

        <div className="h-auto w-full max-w-130">
          <img src="/heroimg.png" alt="heroimg" className="h-auto w-full max-w-130" />
        </div>

        <div className="h-auto w-full max-w-150 px-0 sm:px-7 pt-4 lg:pt-10">
          <p className="text-[#52A898]">INSTANT FEEDBACK</p>
          <p className="text-2xl sm:text-3xl text-white pt-2">AI Code Review</p>
          <p className="w-full max-w-140 text-[#919CAD] pt-4 text-lg sm:text-xl">
            Dont wait for your next session. psh code and get immediate,
            context-aware architectural feedback from our custom trained models.
          </p>

          <div className="flex flex-col gap-6 pt-2">
            <div className="flex gap-3">
              <CheckCircle2 size={22} color="#52A898" className="mt-4 shrink-0" />
              <div>
                <h3 className="text-lg mt-4 font-semibold text-white">
                  Instant security audits
                </h3>
                <p className="text-md text-[#919CAD]">
                  Catch vulnerabilities before they merge.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Gauge size={22} color="#52A898" className="mt-2 shrink-0" />
              <div>
                <h3 className="text-lg mt-2 font-semibold text-white">
                  Performance optimization
                </h3>
                <p className="text-md text-[#919CAD]">
                  Identify memory leaks and slow queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero1;