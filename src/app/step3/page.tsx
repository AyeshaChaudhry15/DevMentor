
"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard } from "lucide-react";

const ALL_SKILLS = [
  "TypeScript", "JavaScript", "Python", "React", "NestJS", "Docker", "PostgreSQL",
  "MongoDB", "AWS", "Redis", "GraphQL", "Prisma", "Git", "Linux", "Nginx",
];

const EXPERIENCE_LEVELS = [
  { key: "junior", icon: "🌱", name: "Junior", range: "0-2 yrs" },
  { key: "mid", icon: "💼", name: "Mid-level", range: "2-5 yrs" },
  { key: "senior", icon: "🎖️", name: "Senior", range: "5+ yrs" },
];

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const SLOTS = ["Morning", "Afternoon", "Evening"];

const DEFAULT_AVAILABILITY: Record<string, boolean> = {
  "Afternoon-SAT": true,
  "Afternoon-SUN": true,
  "Evening-MON": true,
  "Evening-TUE": true,
  "Evening-WED": true,
  "Evening-FRI": true,
};

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
    <path
      d="M3 8l3.5 3.5L13 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Step = ({
  number,
  title,
  active = false,
  completed = false,
  last = false,
}: {
  number: number;
  title: string;
  active?: boolean;
  completed?: boolean;
  last?: boolean;
}) => (
  <div className="flex gap-3">
    <div className="flex flex-col items-center">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${
          active || completed
            ? "border-[#52A898] bg-[#52A898] text-[#05140f]"
            : "border-[#3C4F68] text-[#8b93a7]"
        }`}
      >
        {completed ? "✓" : number}
      </div>

{!last && <div className="h-10 w-px bg-[#3C4F68]" />}
    </div>

    <div className="pt-1">
      <p
        className={`text-[13px] font-semibold ${
          active ? "text-[#E8EBF2]" : "text-[#8b93a7]"
        }`}
      >
        {title}
      </p>
    </div>
  </div>
);

export default function SkillsExperiencePage() {
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(
    new Set(["TypeScript", "React", "NestJS"])
  );
  const [customSkills, setCustomSkills] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [experience, setExperience] = useState("senior");
  const [availability, setAvailability] = useState<Record<string, boolean>>(
    DEFAULT_AVAILABILITY
  );
  const [timezone, setTimezone] = useState("PST · Pacific Standard Time");
  const [sessionPref, setSessionPref] = useState<"1on1" | "group">("1on1");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      const next = new Set(prev);
      next.has(skill) ? next.delete(skill) : next.add(skill);
      return next;
    });
  };

  const addCustomSkill = () => {
    const val = customInput.trim();
    if (!val) return;
    setCustomSkills((prev) => [...prev, val]);
    setSelectedSkills((prev) => new Set(prev).add(val));
    setCustomInput("");
  };

  const toggleCell = (slot: string, day: string) => {
    const key = `${slot}-${day}`;
    setAvailability((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex min-h-screen bg-[#1C2333] text-[#e7eaf0]">
      <aside className="hidden w-[260px] shrink-0 bg-[#2A3447] md:block">
        <div className="flex items-center gap-2 px-7 py-6">
          <CreditCard size={27} color="#52A898" />

          <span className="text-sm font-semibold text-[#52A898]">
            DevMentor
          </span>
        </div>

        <div className="px-7 pt-8">
        <Step
  number={1}
  title="Choose Role"
  completed
/>

<Step
  number={2}
  title="Your Profile"
  completed
/>

<Step
  number={3}
  title="Skills & Experience"
  last
  active
/>
        </div>
      </aside>

      <main className="w-full flex-1 px-6 pb-6 pt-8 md:px-10">
        <div className="mb-1 text-[13px] font-bold tracking-wide text-[#52A898]">
          Complete Your Profile
        </div>
        <p className="mb-6 text-[13px] text-[#8b93a7]">
          Let mentees know what you excel at and when you&apos;re free.
        </p>

        <div className="mb-5 rounded-2xl border border-[#232b3a] bg-[#2A3447] p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <span className="text-[#52A898]">{"</>"}</span>
            What technologies do you work with?
          </div>

          <div className="mb-2 flex flex-wrap gap-2">
            {ALL_SKILLS.map((skill) => {
              const active = selectedSkills.has(skill);
              return (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`select-none rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                    active
                      ? "border-[#52A898] bg-[#34d3990f] text-[#8b93a7]"
                      : "border-[#2a3346] bg-[#1a2232] text-[#8b93a7] hover:text-[#e7eaf0]"
                  }`}
                >
                  {skill}
                </button>
              );
            })}

            {customSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`select-none rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                  selectedSkills.has(skill)
                    ? "border-[#52A898] bg-[#34d3991f] text-[#52A898]"
                    : "border-[#2a3346] bg-[#1a2232] text-[#8b93a7] hover:text-[#e7eaf0]"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="mt-3.5 flex gap-2 border-t border-[#232b3a] pt-3.5">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
              placeholder="Add custom skill..."
              className="flex-1 rounded-lg border border-[#2a3346] bg-[#161c29] px-3 py-2 text-[13px] text-[#e7eaf0] outline-none placeholder:text-[#5b6478] focus:border-[#34d39966]"
            />
            <button
              onClick={addCustomSkill}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#2a3346] bg-[#161c29] text-[#8b93a7] hover:border-[#52A898] hover:text-[#52A898]"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-[#232b3a] bg-[#2A3447] p-6">
          <div className="mb-3 text-[13px] font-semibold">
            Total Industry Experience
          </div>

          <div className="grid grid-cols-3 gap-3">
            {EXPERIENCE_LEVELS.map((level) => {
              const active = experience === level.key;
              return (
                <button
                  key={level.key}
                  onClick={() => setExperience(level.key)}
                  className={`relative rounded-xl border p-4 text-center transition-colors ${
                    active
                      ? "border-[#52A898] bg-[#34d3990f]"
                      : "border-[#2a3346] bg-[#161c29]"
                  }`}
                >
                  {active && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#52A898] text-[#05140f]">
                      <CheckIcon />
                    </span>
                  )}

                  <div className="mb-2 text-lg opacity-80">{level.icon}</div>
                  <div className="text-[13px] font-semibold">{level.name}</div>
                  <div className="mt-0.5 text-[11.5px] text-[#5b6478]">
                    {level.range}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-[#232b3a] bg-[#2A3447] p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <span>📅</span>
            When are you available?
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[90px]" />

                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="pb-3 text-center text-xs font-semibold text-[#f0a742]"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {SLOTS.map((slot) => (
                <tr key={slot}>
                  <td className="text-[12.5px] font-medium text-[#8b93a7]">
                    {slot}
                  </td>

                  {DAYS.map((day) => {
                    const on = !!availability[`${slot}-${day}`];

                    return (
                      <td key={day} className="p-1 text-center">
                        <button
                          onClick={() => toggleCell(slot, day)}
                          className={`flex h-[30px] w-full items-center justify-center rounded-md border text-xs transition-colors ${
                            on
                              ? "border-[#34d399] bg-[#34d39924] text-[#52A898]"
                              : "border-[#2a3346] bg-[#161c29] hover:bg-[#1b2233]"
                          }`}
                        >
                          {on ? "✓" : ""}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block text-xs font-semibold">
                Timezone
              </span>

              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="min-w-[220px] rounded-lg border border-[#2a3346] bg-[#161c29] px-3 py-2 text-[13px] text-[#e7eaf0] outline-none"
              >
                <option>PST · Pacific Standard Time</option>
                <option>MST · Mountain Standard Time</option>
                <option>CST · Central Standard Time</option>
                <option>EST · Eastern Standard Time</option>
                <option>PKT · Pakistan Standard Time</option>
                <option>GMT · Greenwich Mean Time</option>
              </select>
            </div>

            <div>
              <span className="mb-2 block text-xs font-semibold">
                Session Preferences
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setSessionPref("1on1")}
                  className={`flex items-center gap-1.5 rounded-lg border px-4 py-2 text-[12.5px] font-semibold ${
                    sessionPref === "1on1"
                      ? "border-[#34d39966] bg-[#34d3991f] text-[#52A898]"
                      : "border-[#2a3346] bg-[#161c29] text-[#8b93a7]"
                  }`}
                >
                  👤 1 on 1
                </button>

                <button
                  onClick={() => setSessionPref("group")}
                  className={`flex items-center gap-1.5 rounded-lg border px-4 py-2 text-[12.5px] font-semibold ${
                    sessionPref === "group"
                      ? "border-[#34d39966] bg-[#34d3991f] text-[#52A898]"
                      : "border-[#2a3346] bg-[#161c29] text-[#8b93a7]"
                  }`}
                >
                  👥 Group
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-[#232b3a] pt-5">
          <Link
            href="/step2"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-[#8b93a7] hover:text-[#e7eaf0]"
          >
            ← Back
          </Link>

          <Link
            href="/step4"
            className="flex items-center gap-2 rounded-lg bg-[#52A898] px-5 py-2.5 text-[13px] font-bold text-[#05140f] hover:brightness-110"
          >
            Finish Setup ✓
          </Link>
        </div>
      </main>
    </div>
  );
}

