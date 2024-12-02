import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    (<div className="">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 max-w-7xl mx-auto px-4">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
            <Grid size={20} />
            <p
              className="text-base font-bold text-neutral-800 dark:text-white relative z-20 font-lato">
              {feature.title}
            </p>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-light relative z-20 font-inter">
              {feature.description}
            </p>
          </div>
        ))}
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
