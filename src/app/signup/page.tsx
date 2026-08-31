"use client";

import { Sprout, Shield, Check, FileTerminal  } from "lucide-react";
import { useState } from "react";
import type { ElementType } from "react";
import Link from "next/link";
type Role = "junior" | "senior" | "both";
type RoleOption = {
    id: "junior" | "senior";
    title: string;
    description: string;
   icon: ElementType;
     points: string[];
};
export default function SignupPage() {
    const [selectedRole, setSelectedRole] = useState<Role>("junior");

const roles: RoleOption[] = [        {
            id: "junior" as const,
            title: "I'm a Junior Developer",
            description:
                "Find mentors, get code reviewed, build skills faster",
            icon: Sprout,
            points: [
                "Find experienced mentors",
                "Submit code for AI + human review",
                "Track your learning progress",
            ],
        },
        {
            id: "senior" as const,
            title: "I'm a Senior Developer",
            description:
                "Mentor juniors, review code, share your expertise",
            icon: Shield,
            points: [
                "Mentor developers at your pace",
                "Review and give feedback on code",
                "Build your mentor reputation",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-[#1C2333] text-[#E8EBF2]">
            <div className="mx-auto w-full max-w-[763px] px-4 pt-[38px] pb-8">
               <div className="flex justify-center items-center gap-[7px]">
                    <FileTerminal  size={20} className="text-[#52A898]"/>
                    <span className="text-[20px] leading-none font-semibold text-[#E8EBF2]">
                        DevMentor
                    </span>
                </div>
                <div className="flex justify-center items-center gap-[10px] mt-[18px]">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#52A898]" />
                    <span className="w-[7px] h-[7px] rounded-full bg-[#3C4F68]" />
                    <span className="w-[7px] h-[7px] rounded-full bg-[#3C4F68]" />
                    <span className="w-[7px] h-[7px] rounded-full bg-[#3C4F68]" />
                </div>
                <div className="text-center mt-[18px]">
                    <h1 className="text-[40px]  font-semibold tracking-[-1px] text-[#E8EBF2]">
                        Join DevMentor
                    </h1>
                   <p className="mt-[10px] text-[15px]  text-[#A8B2C4]">
                        First, tell us how you’ll use the platform
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[21px]">
                   {roles.map((role) => {
                   const Icon = role.icon;
                   const selected =
                   selectedRole === role.id || selectedRole === "both";
    return (
                 <button key={role.id} type="button" onClick={() => setSelectedRole(role.id)}
                 className={` relative w-full  h-[228px] rounded-[10px] border text-left px-[21px] pt-[20px] pb-[18px] transition-all duration-200
                  ${selected ? "border-[#52A898] bg-[#52A898]/[0.06]" : "border-[#3C4F68] bg-[#2A3447]"}`}>
                <div className="flex items-start justify-between">
                <div className={`w-[35px] h-[35px] rounded-[6px] flex items-center justify-center
                      ${selected ? "bg-[#52A898]/10" : "bg-[#1C2333]"}`}>
                   <Icon
                   size={18}  className={ role.id === "junior" ? "text-[#52A898]" : "text-[#A8B2C4]"} />
              </div>               
                <div
                    className={`mt-[1px] w-[17px] h-[17px] rounded-full border flex items-center justify-center
                      ${selected ? "border-[#52A898]": "border-[#3C4F68]" }`}>
                     {selected && ( <span className="w-[9px] h-[9px] rounded-full bg-[#52A898]"/>)}
                </div>
                </div>
                    <h2 className={` mt-[2px] text-[17px] font-semibold
                    ${selected ? "text-[#E8EBF2]" : "text-[#B8C0CE]"}`}>
                    {role.title}</h2>
                      <p className={` text-[12px]                 
                    ${selected ? "text-[#A8B2C4]" : "text-[#919BAB]"}`}>
                    {role.description}
                    </p>
                    <div className="space-y-[9px] mt-9">
                      {role.points.map((point) => (
                     <div key={point} className="flex items-center gap-[7px]" >
                         <span className={` w-[10px] h-[10px] rounded-full flex items-center justify-center
                          ${selected ? "bg-[#52A898]" : "bg-[#3C526C]" }`} >
                        <Check size={7}  className="text-[#1C2333]"/></span>
                          <span className={`text-[12px] ${selected  ? "text-[#A8B2C4]"  : "text-[#8994A7]"}`} >
                             {point}
                          </span>
                         </div> 
                        ))}
                        </div>
                        </button>
                        );
                    })}
                </div>

                <div className="text-center mt-[24px]">
                    <button type="button"  onClick={() => setSelectedRole("both")}  className={` text-[12px] underline underline-offset-[2px]
                     ${selectedRole === "both"
                     ? "text-[#52A898]"  : "text-[#5B7FA6]" }`}>
                        I want to do both
                    </button>
                </div>
                <div className="flex justify-center mt-[21px]">
                  <Link href="/step2">
                 <button type="button" className="w-[382px] max-w-full h-[45px] rounded-[6px] bg-[#52A898] hover:bg-[#479889] text-[#16202C] text-[16px] font-medium transition-colors">
                  <Link href={"/step2"}>Continue</Link>
                 </button>
                  </Link>
                </div>
                <p className="text-center mt-[21px] text-[12px]  text-[#A8B2C4]">
                    Already have an account?{" "}
                    <a
                        href="/login"
                      className="text-[#5B7FA6] hover:text-[#7194BA]">
                        Log in
                    </a>
                </p>

            </div>
        </main>
    );
}