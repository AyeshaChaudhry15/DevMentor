import { Lock, Mail } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import Link from 'next/link';

const states = [
  {
    badge: 'STATE 01',
    step: 'Step 1: Request Reset',
    content: (
      <>
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#1C2333]">
          <Lock className="h-5 w-5 text-[#52A898]" strokeWidth={2} />
        </div>
        <h3 className="mb-1 text-center font-semibold text-lg">Reset your password</h3>
        <p className="mb-5 text-center text-sm text-gray-400">
          Enter your email and we'll send you a reset link
        </p>

        <div className="mb-4 flex items-center gap-2 rounded-lg border border-[#2a3042] bg-[#1a1e2b] px-3 py-2.5">
          <Mail className="h-4 w-4 text-gray-500" />
          <span className="text-md text-gray-300">zohaib@email.com</span>
        </div>

        <Link
          href="/forgetpassword2"
          className="mb-4 flex w-full items-center justify-center rounded-lg bg-[#52A898] py-2.5 text-md font-semibold text-black transition duration-300 hover:scale-105"
        >
          Send Reset Link →
        </Link>

        <a href="/login" className="block text-center text-md text-[#52A898]">
          ← Back to login
        </a>
      </>
    ),
  },
];

export default function ForgotPasswordFlow() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#1C2333] px-4 py-10 text-white sm:px-9">
      <div className="mx-auto w-full max-w-220">

        <div className="grid grid-cols-1 mt-6 w-120 max-w-220 mx-auto">
          {states.map((state, index) => (
            <div key={index} className="text-center">
              <h2 className="mb-3 text-sm font-semibold">{state.step}</h2>

              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md">
                  <CreditCard className="w-80 text-[#52A898]" />
                </div>
                <span className="font-semibold text-[#52A898]">DevMentor</span>
              </div>

              <div className="rounded-xl border border-t-2 border-[#52A898] border-[#232838] bg-[#2A3447] p-6 text-left">
                {state.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}