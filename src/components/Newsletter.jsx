import React from "react";
import { useId } from "react";
import { FiSend } from "react-icons/fi";

export default function Newsletter() {
  return (
    (<div className="mx-auto w-full xs:px-4 sm:px-4 bg-gray-50 flex flex-col justify-center items-center py-16 gap-16">
      <div
        className="">
          <div
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 md:px-24 md:py-12 rounded-3xl overflow-hidden w-full">
            <Grid size={20} />
            <h3
              className="text-base font-bold dark:text-white relative z-20 font-lato text-black xs:text-3xl sm:text-4xl md:text-5xl text-center w-full">
              Subscribe to our newsletter
            </h3>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-light relative z-20 font-inter text-center">
              Subscribe to our newsletter for updates on the Legal Industry and Trends.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center">
                <input 
                    className="font-inter outline-none p-4 bg-blue-50 w-full"
                    placeholder="Enter your email"
                />
                <div className='bg-primary-blue flex items-center justify-center p-4'>
                    <FiSend className="w-6 h-6  text-primary-shade" />
                </div>
            </div>
          </div>
      </div>
    </div>)
  );
}

const grid = [
  {
    title: "Explainer Videos on Legal Matters",
    description:
      "Insightful and Well-crafted explainer videos on Case studies, Legal reports and Concepts. "
  },
  {
    title: "Detailed Articles and Blogs",
    description:
      "Indepth write-ups to educate you on issues on legal relevance.",
  },
  {
    title: "Up to date Case studies and Legal Reports",
    description:
      "Get relevant and up to date case studies and Legal Reports at your fingertips - anywhere, anytime.",
  },
  {
    title: "Legal Reasearch AI Assistant",
    description:
      "If you need insightful responses from an erudite friend, you can ask D'Law AI. it understands and answer legal questions. it can generate ans summmarize legal documents.",
  },
  {
    title: "Speak to a real Lawyer",
    description:
      "You can connect to a real Lawyer to get wealth of experience and knowledge",
  },
  {
    title: "A feed of engaging content",
    description:
      "Have access to a Feed of insisghtful, engaging & entertaining legal content curated for you.",
  },
];

export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    (<div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10" />
      </div>
    </div>)
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    (<svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>)
  );
}
