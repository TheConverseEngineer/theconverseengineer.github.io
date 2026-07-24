import type { Metadata } from "next";

import { ProjectFilter } from "@/components/projects/project-filter";
import {
  projects,
  type Project,
  type ProjectCardData,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Vraj Parikh",
  description:
    "Selected machine learning, robotics, and systems projects by Vraj Parikh.",
};

const projectCards: readonly ProjectCardData[] = (
  projects as readonly Project[]
).map(({ slug, title, summary, tags, image }) => ({
  slug,
  title,
  summary,
  tags,
  image,
}));

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-304 px-5 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(4rem,10vw,8rem)] max-[35rem]:px-4 min-[61rem]:px-10 min-[61rem]:pt-[clamp(3rem,8svh,7rem)]">
      <h1 className="mt-0 mb-8 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.97] font-[520] tracking-[-0.05em] text-accent">
        Projects
      </h1>
      <ProjectFilter projects={projectCards} />
    </main>
  );
}
