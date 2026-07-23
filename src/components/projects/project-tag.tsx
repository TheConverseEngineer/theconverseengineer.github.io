import {
  projectTagTones,
  type ProjectTag as ProjectTagLabel,
} from "@/data/projects";

const toneStyles = {
  coral: "text-[var(--tag-coral)]",
  gold: "text-[var(--tag-gold)]",
  cyan: "text-[var(--tag-cyan)]",
  blue: "text-[var(--tag-blue)]",
  violet: "text-[var(--tag-violet)]",
  rose: "text-[var(--tag-rose)]",
  orange: "text-[var(--tag-orange)]",
  teal: "text-[var(--tag-teal)]",
  magenta: "text-[var(--tag-magenta)]",
  red: "text-[var(--tag-red)]",
  yellow: "text-[var(--tag-yellow)]",
  umber: "text-[var(--tag-umber)]",
  indigo: "text-[var(--tag-indigo)]",
  mint: "text-[var(--tag-mint)]",
} as const;

type ProjectTagProps = {
  label: ProjectTagLabel;
};

export function ProjectTag({ label }: ProjectTagProps) {
  const tone = projectTagTones[label];

  return (
    <span
      className={`inline-flex rounded-md bg-surface px-2.5 py-1 font-medium ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
