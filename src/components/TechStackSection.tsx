import React from 'react';

export const TechStackSection: React.FC = () => {
  const stack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "Postgres",
    "Supabase",
    "AWS",
    "Docker",
    "Framer Motion",
    "Tailwind",
    "GraphQL",
  ];

  return (
    <section id="stack" className="py-[100px] sm:py-[120px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: (02) STACK and 2-line Heading */}
        <div className="lg:col-span-5 space-y-3.5">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block">
            (02) STACK
          </span>

          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans max-w-[360px]">
            The tools I reach<br />for, day to day.
          </h2>
        </div>

        {/* Right Column: Pill Badges Grid */}
        <div className="lg:col-span-7 flex flex-wrap gap-2.5 sm:gap-3 items-center">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-[#E5E7EB] text-[13.5px] font-medium text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-neutral-400 hover:shadow-xs transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
