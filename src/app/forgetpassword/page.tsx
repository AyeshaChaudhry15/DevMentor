import { Lock, CheckCircle2, Mail, Code2 } from "lucide-react";

const states = [
  {
    badge: "STATE 01",
    step: "Step 1: Request Reset",
    content: (
      <>
        <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-[#20263a] flex items-center justify-center">
          <Lock className="w-5 h-5 text-[#52A898]" strokeWidth={2} />
        </div>
        <h3 className="text-center font-semibold mb-1">Reset your password</h3>
        <p className="text-center text-xs text-gray-400 mb-5">
          Enter your email and we'll send you a reset link
        </p>

        <div className="flex items-center gap-2 bg-[#1a1e2b] border border-[#2a3042] rounded-lg px-3 py-2.5 mb-4">
          <Mail className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-300">zohaib@email.com</span>
        </div>

        <button className="w-full bg-[#52A898]  transition text-[#0c0f16] text-sm font-semibold py-2.5 rounded-lg mb-4 hover:scale-105 duration-300">
          Send Reset Link →
        </button>

        <a href="/login" className="block text-center text-xs text-[#52A898]">
          ← Back to login
        </a>
      </>
    ),
  },
  {
    badge: "STATE 02",
    step: "Step 2: Link Sent",
    content: (
      <>
        <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-[#20263a] flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-[#52A898]" strokeWidth={2} />
        </div>
        <h3 className="text-center font-semibold mb-1">Reset link sent</h3>
        <p className="text-center text-xs text-gray-400 mb-5 px-2">
          Check your email at{" "}
          <span className="text-white font-medium">zohaib@email.com</span>.
          The link expires in 15 minutes.
        </p>

        <div className="flex gap-3 mb-5 ">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#52A898] text-gray-200 text-sm py-2.5 rounded-lg hover:bg-[#1a1e2b] transition ">
            <Mail className="w-4 h-4" /> Open Gmail
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#52A898] text-gray-200 text-sm py-2.5 rounded-lg hover:bg-[#1a1e2b] transition">
            <Mail className="w-4 h-4" /> Open Outlook
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 ">
          Didn't receive the email?
        </p>
        <a href="#" className="block text-center text-xs text-[#52A898] pt-2 ">
          Click to resend
        </a>
        <a href="/login" className="block text-center text-xs text-[#52A898] pt-3">
          ← Back to login
        </a>
      </>
    ),
  },
];

export default function ForgotPasswordFlow() {
  return (
      <div className="w-full mx-auto bg-[#0c0f16] px-9 pt-10 pb-10 text-white h-150">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="font-bold text-base">Forgot Password Flow</h1>
            <p className="text-xs text-gray-500">State Reference Guide</p>
          </div>
          <div className="flex items-center gap-1 text-[#52A898] text-xs">
            <Code2 className="w-3.5 h-3.5" />
            DEVMENTOR COMPONENT LIBRARY
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 w-220 mx-auto">
          {states.map((state, index) => (
            <div key={index} className="text-center">
              <span className="inline-block text-[10px] tracking-wide border border-[#2a3042] rounded-full px-3 py-2 mb-3 text-[#52A898]">
                {state.badge}
              </span>
              <h2 className="text-sm font-semibold mb-3">{state.step}</h2>

              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-[#52A898] flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5 text-[#0c0f16]" />
                </div>
                <span className="font-semibold">DevMentor</span>
              </div>

              <div className="bg-[#2A3447] border border-[#232838] rounded-xl p-6 text-left border-t-2 border-[#52A898]">
                {state.content}
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
}