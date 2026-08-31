import { Lock, CheckCircle2, Mail } from "lucide-react";
import { CreditCard } from "lucide-react";

const states = [
  {
    badge: "STATE 02",
    step: "Step 2: Link Sent",
    content: (
      <>
        <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-[#1C2333] flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-[#52A898]" strokeWidth={2} />
        </div>
        <h3 className="text-center font-semibold mb-1">Reset link sent</h3>
        <p className="text-center text-md text-gray-400 mb-5 px-2">
          Check your email at{" "}
          <span className="text-white font-medium text-md">zohaib@email.com</span>.
          The link expires in 15 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-5 ">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#52A898] text-gray-200 text-md py-2.5 rounded-lg hover:bg-[#334057] transition ">
            <Mail className="w-4 h-4" /> Open Gmail
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#52A898] text-gray-200 text-md py-2.5 rounded-lg hover:bg-[#334057] transition">
            <Mail className="w-4 h-4" /> Open Outlook
          </button>
        </div>

        <p className="text-center text-md text-gray-400 ">
          Didn't receive the email?
        </p>
        <a href="" className="block text-center text-md text-[#52A898] pt-2 ">
          Click to resend
        </a>
        <a href="/login" className="block text-center text-md text-[#52A898] pt-3">
          ← Back to login
        </a>
      </>
    ),
  },
];

export default function ForgotPasswordFlow() {
  return ( 

    <div className="flex min-h-screen w-full items-center justify-center bg-[#1C2333] px-4 sm:px-9 pt-10 pb-10 text-white">
      <div className="w-full mx-auto h-auto">
        <div className="grid grid-cols-1 mt-6 w-120 max-w-220 mx-auto">
          {states.map((state, index) => (
            <div key={index} className="text-center">
              <h2 className="text-md font-semibold mb-3">{state.step}</h2>

              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md  flex items-center justify-center">
                  <CreditCard className="w-80 text-[#52A898] " />
                </div>
                <span className="font-semibold text-[#52A898]">DevMentor</span>
              </div>

              <div className="bg-[#2A3447] border border-[#232838] rounded-xl p-6 text-left border-t-2 border-[#52A898]">
                {state.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}