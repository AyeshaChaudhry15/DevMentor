import { Users, Code2, UserCircle, CheckCircle2 } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Find a Mentor',
    desc: 'Browse 2,400+ senior developers ready to help',
    button: 'Browse Mentors',
  },
  {
    icon: Code2,
    title: 'Submit Code for Review',
    desc: 'Get instant AI feedback on your first snippet',
    button: 'Start Review',
  },
  {
    icon: UserCircle,
    title: 'Complete Your Profile',
    desc: 'Add your GitHub, bio, and portfolio links',
    button: 'Edit Profile',
  },
];

export default function Welcome() {
  return (
    <div className="mx-auto min-h-screen w-full bg-[#1C2333] px-10 pt-11 pb-8 text-center text-white">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#52A898]">
        <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={3} />
      </div>

      <h1 className="mb-2 text-xl font-bold">You're all set, Zohaib! 🎉</h1>
      <p className="mb-8 text-sm text-gray-400">
        Your DevMentor profile is live. Here's what you can do next.
      </p>

      <div className="grid gap-4 text-left md:grid-cols-3 h-50 w-260 mx-auto">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-[#2A3447] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#232838] text-[#52A898]">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <h3 className="mb-1.5 text-md font-semibold">{item.title}</h3>
              <p className="mb-4 flex-grow text-xs leading-relaxed text-gray-400">
                {item.desc}
              </p>
              <button className="rounded-lg border border-[#52A898] py-2 text-sm text-[#52A898] transition hover:bg-[#52A898] hover:text-black">
                {item.button}
              </button>
            </div>
          );
        })}
      </div>

      <a href="#" className="my-6 block text-center text-sm text-[#52A898]">
        Go to Dashboard
      </a>

    <div className="mx-auto flex w-[720px] max-w-full items-center gap-3 text-xs text-gray-400">
  <span>Profile Completion</span>

  <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#262b3a]">
    <div
      className="h-full bg-[#52A898]"
      style={{ width: "60%" }}
    />
  </div>

  <span>60%</span>
</div>
    </div>
  );
}
