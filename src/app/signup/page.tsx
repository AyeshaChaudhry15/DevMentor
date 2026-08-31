"use client";

import { useRef, useState } from "react";
import {
  ChevronRight,
  Upload,
  AtSign,
  Cat,
  CreditCard,
  Sprout,
  Shield,
  Check,
} from "lucide-react";



export default function SignupPage() {
  const [step, setStep] = useState(1); 

  const [selectedRole, setSelectedRole] = useState("junior");

  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    role: "",
    company: "",
    location: "",
    github: "",
    linkedin: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const ALL_SKILLS = [
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "NestJS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Redis",
    "GraphQL",
    "Prisma",
    "Git",
    "Linux",
    "Nginx",
  ];
  const EXPERIENCE_LEVELS = [
    { key: "junior", icon: "🌱", name: "Junior", range: "0-2 yrs" },
    { key: "mid", icon: "💼", name: "Mid-level", range: "2-5 yrs" },
    { key: "senior", icon: "🎖️", name: "Senior", range: "5+ yrs" },
  ];
  const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const SLOTS = ["Morning", "Afternoon", "Evening"];
  const DEFAULT_AVAILABILITY = {
    "Afternoon-SAT": true,
    "Afternoon-SUN": true,
    "Evening-MON": true,
    "Evening-TUE": true,
    "Evening-WED": true,
    "Evening-FRI": true,
  };

  const [selectedSkills, setSelectedSkills] = useState(
    new Set(["TypeScript", "React", "NestJS"])
  );
  const [customSkills, setCustomSkills] = useState([]);
  const [customInput, setCustomInput] = useState("");
  const [experience, setExperience] = useState("senior");
  const [availability, setAvailability] = useState(DEFAULT_AVAILABILITY);
  const [timezone, setTimezone] = useState("PST · Pacific Standard Time");
  const [sessionPref, setSessionPref] = useState("1on1");

  const toggleSkill = (skill) => {
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

  const toggleCell = (slot, day) => {
    const key = `${slot}-${day}`;
    setAvailability((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const finishSetup = () => {
    console.log({ selectedRole, formData, photo, selectedSkills, experience, availability, timezone, sessionPref });
    alert("Setup complete!");
  };

 
  if (step === 1) {
    const roles = [
      {
        id: "junior",
        title: "I'm a Junior Developer",
        description: "Find mentors, get code reviewed, build skills faster",
        icon: Sprout,
        points: [
          "Find experienced mentors",
          "Submit code for AI + human review",
          "Track your learning progress",
        ],
      },
      {
        id: "senior",
        title: "I'm a Senior Developer",
        description: "Mentor juniors, review code, share your expertise",
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
            <CreditCard size={27} className="text-[#52A898]" />
            <span className="text-[20px] leading-none font-semibold text-[#52A898]">
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
            <h1 className="text-[40px] font-semibold tracking-[-1px] text-[#E8EBF2]">
              Join DevMentor
            </h1>
            <p className="mt-[10px] text-[15px] text-[#A8B2C4]">
              First, tell us how you&rsquo;ll use the platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[21px]">
            {roles.map((role) => {
              const Icon = role.icon;
              const selected =
                selectedRole === role.id || selectedRole === "both";
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`relative w-full h-[228px] rounded-[10px] border text-left px-[21px] pt-[20px] pb-[18px] transition-all duration-200 ${
                    selected
                      ? "border-[#52A898] bg-[#52A898]/[0.06]"
                      : "border-[#3C4F68] bg-[#2A3447]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-[35px] h-[35px] rounded-[6px] flex items-center justify-center ${
                        selected ? "bg-[#52A898]/10" : "bg-[#1C2333]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          role.id === "junior"
                            ? "text-[#52A898]"
                            : "text-[#A8B2C4]"
                        }
                      />
                    </div>
                    <div
                      className={`mt-[1px] w-[17px] h-[17px] rounded-full border flex items-center justify-center ${
                        selected ? "border-[#52A898]" : "border-[#3C4F68]"
                      }`}
                    >
                      {selected && (
                        <span className="w-[9px] h-[9px] rounded-full bg-[#52A898]" />
                      )}
                    </div>
                  </div>

                  <h2
                    className={`mt-[2px] text-[17px] font-semibold ${
                      selected ? "text-[#E8EBF2]" : "text-[#B8C0CE]"
                    }`}
                  >
                    {role.title}
                  </h2>
                  <p
                    className={`text-[12px] ${
                      selected ? "text-[#A8B2C4]" : "text-[#919BAB]"
                    }`}
                  >
                    {role.description}
                  </p>

                  <div className="space-y-[9px] mt-9">
                    {role.points.map((point) => (
                      <div key={point} className="flex items-center gap-[7px]">
                        <span
                          className={`w-[10px] h-[10px] rounded-full flex items-center justify-center ${
                            selected ? "bg-[#52A898]" : "bg-[#3C526C]"
                          }`}
                        >
                          <Check size={7} className="text-[#1C2333]" />
                        </span>
                        <span
                          className={`text-[12px] ${
                            selected ? "text-[#A8B2C4]" : "text-[#8994A7]"
                          }`}
                        >
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
            <button
              type="button"
              onClick={() => setSelectedRole("both")}
              className={`text-[12px] underline underline-offset-[2px] ${
                selectedRole === "both" ? "text-[#52A898]" : "text-[#5B7FA6]"
              }`}
            >
              I want to do both
            </button>
          </div>

          <div className="flex justify-center mt-[21px]">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-[382px] max-w-full h-[45px] rounded-[6px] bg-[#52A898] hover:bg-[#479889] text-[#16202C] text-[16px] font-medium transition-colors"
            >
              Continue
            </button>
          </div>

          <p className="text-center mt-[21px] text-[12px] text-[#A8B2C4]">
            Already have an account?{" "}
            <a href="/login" className="text-[#5B7FA6] hover:text-[#7194BA]">
              Log in
            </a>
          </p>
        </div>
      </main>
    );
  }

 
  return (
    <div className="min-h-screen bg-[#1C2333] text-[#E8EBF2]">
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <aside className="hidden w-[260px] shrink-0 bg-[#2A3447] md:block">
          <div className="flex items-center gap-2 px-7 py-6">
            <CreditCard size={27} color="#52A898" />
            <span className="text-sm font-semibold text-[#52A898]">
              DevMentor
            </span>
          </div>

          <div className="px-7 pt-8">
            <SidebarStep
              number={1}
              title="Choose Role"
              completed
              onClick={() => setStep(1)}
            />
            <SidebarStep
              number={2}
              title="Your Profile"
              active={step === 2}
              completed={step > 2}
              onClick={() => setStep(2)}
            />
            <SidebarStep
              number={3}
              title="Skills & Experience"
              active={step === 3}
              last
            />
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">
          {step === 2 && (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 lg:px-16">
                <div className="mb-7">
                  <h1 className="text-xl font-semibold text-[#E8EBF2] md:text-2xl">
                    Set up your profile
                  </h1>
                  <p className="mt-1 text-sm text-[#A8B2C4]">
                    This is what mentors and mentees will see
                  </p>
                </div>

                <div className="mb-8 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="group relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-dashed border-[#52A898] bg-[#2A3447] transition hover:bg-[#334158]"
                  >
                    {photo ? (
                      <img
                        src={photo}
                        alt="Profile"
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload
                          size={27}
                          strokeWidth={1.8}
                          className="mb-2 text-[#E8EBF2]"
                        />
                        <span className="text-xs font-medium text-[#E8EBF2]">
                          Upload a photo
                        </span>
                      </div>
                    )}
                  </button>
                  <p className="mt-2 text-xs text-[#A8B2C4]">
                    JPG, PNG or GIF up to 5MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    onChange={handlePhoto}
                    className="hidden"
                  />
                </div>

                <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="e.g. Alex Rivera"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Username / handle"
                    name="username"
                    placeholder="alex_dev"
                    value={formData.username}
                    onChange={handleChange}
                    icon={<AtSign size={15} />}
                  />
                  <InputField
                    label="Current Role / Title"
                    name="role"
                    placeholder="e.g. Backend Developer"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Company or University"
                    name="company"
                    placeholder="e.g. TechNova"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Location"
                    name="location"
                    placeholder="e.g. San Francisco, CA"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <InputField
                    label="GitHub profile URL"
                    name="github"
                    placeholder="github.com/username"
                    value={formData.github}
                    onChange={handleChange}
                    icon={<Cat size={15} />}
                  />
                  <InputField
                    label="LinkedIn URL"
                    name="linkedin"
                    placeholder="linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleChange}
                    icon={<Cat size={15} />}
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[13px] text-[#A8B2C4]">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell mentors a bit about yourself and what you're working on..."
                    rows={4}
                    className="w-full resize-none rounded-lg border border-[#3C4F68] bg-[#2A3447] px-4 py-3 text-sm text-[#E8EBF2] outline-none placeholder:text-[#A8B2C4] focus:border-[#52A898]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#3C4F68] bg-[#1C2333] px-6 py-4 md:px-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-md border border-[#3C4F68] px-5 py-2 text-sm text-[#E8EBF2] transition hover:bg-[#2A3447]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 rounded-md bg-[#52A898] px-5 py-2 text-sm font-medium text-[#16202C] transition hover:bg-[#479889]"
                >
                  Save & Continue
                  <ChevronRight size={16} />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="w-full flex-1 px-6 pt-8 pb-6 md:px-10">
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
                        className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors select-none ${
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
                      className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors select-none ${
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
                          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#52A898] text-[#05140f]">
                            <CheckIcon />
                          </span>
                        )}
                        <div className="mb-2 text-lg opacity-80">
                          {level.icon}
                        </div>
                        <div className="text-[13px] font-semibold">
                          {level.name}
                        </div>
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
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 text-[13px] font-semibold text-[#8b93a7] hover:text-[#e7eaf0]"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={finishSetup}
                  className="flex items-center gap-2 rounded-lg bg-[#52A898] px-5 py-2.5 text-[13px] font-bold text-[#05140f] hover:brightness-110"
                >
                  Finish Setup ✓
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}


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

function SidebarStep({
  number,
  title,
  active = false,
  completed = false,
  last = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full gap-3 text-left"
    >
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${
            completed || active
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
    </button>
  );
}

function InputField({ label, name, placeholder, value, onChange, icon }) {
  return (
    <div>
      <label className="mb-2 block text-[13px] text-[#A8B2C4]">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-0 top-0 flex h-full w-10 items-center justify-center border-r border-[#3C4F68] text-[#A8B2C4]">
            {icon}
          </div>
        )}
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-[43px] w-full rounded-lg border border-[#3C4F68] bg-[#2A3447] text-sm text-[#E8EBF2] outline-none placeholder:text-[#A8B2C4] focus:border-[#52A898] ${
            icon ? "pl-12 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}