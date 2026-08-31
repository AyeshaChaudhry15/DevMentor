"use client";

import { useRef, useState } from "react";
import {
  Check,
  ChevronRight,
  Upload,
  AtSign,
  Cat,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
export default function ProfileSetup() {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const [photo, setPhoto] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2333] text-[#E8EBF2] p-4 md:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-[1400px] overflow-hidden rounded-lg border border-[#3C4F68] bg-[#1C2333]">

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
              active
            />

            <Step
              number={3}
              title="Skills & Experience"
            />

            <Step
              number={4}
              title="Availability"
              last
            />

          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">

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
<Link
  href="/signup"
  className="rounded-md border border-[#3C4F68] px-5 py-2 text-sm text-[#E8EBF2] transition hover:bg-[#2A3447]"
>
  Back
</Link>

         <Link
  href="/step3"
  className="flex items-center gap-2 rounded-md bg-[#52A898] px-5 py-2 text-sm font-medium text-[#16202C] transition hover:bg-[#479889]"
>
  Save & Continue
  <ChevronRight size={16} />
</Link>

          </div>

        </main>
      </div>
    </div>
  );
}
function Step({
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
}) {
  return (
    <div className="relative flex gap-4">

      {!last && (
        <div className="absolute left-[14px] top-[30px] h-[55px] w-px bg-[#3C4F68]" />
      )}

      <div
        className={`relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-xs font-medium
          ${
            active
              ? "bg-[#52A898] text-[#16202C]"
              : completed
              ? "bg-[#111827] text-[#52A898]"
              : "border border-[#53647D] bg-[#1C2333] text-[#E8EBF2]"
          }
        `}
      >
        {completed ? <Check size={15} /> : number}
      </div>

      <div className="pb-10 pt-1">
        <p
          className={`text-xs ${
            active
              ? "font-semibold text-[#52A898]"
              : "text-[#E8EBF2]"
          }`}
        >
          Step {number}
        </p>

        <p
          className={`mt-0.5 text-xs ${
            active
              ? "font-semibold text-[#E8EBF2]"
              : "text-[#A8B2C4]"
          }`}
        >
          {title}
        </p>
      </div>

    </div>
  );
}




function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  icon,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-2 block text-[13px] text-[#A8B2C4]">
        {label}
      </label>

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