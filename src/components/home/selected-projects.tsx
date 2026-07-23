import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  return (
    <section className="mt-24 min-[61rem]:mt-32" aria-labelledby="projects-heading">
      <div className="mb-8 flex items-baseline justify-between gap-6">
        <h2
          id="projects-heading"
          className="m-0 text-2xl font-medium tracking-[-0.025em] text-accent"
        >
          Selected projects
        </h2>
        <Link
          className="group inline-flex min-h-11 items-center font-mono text-sm text-muted no-underline transition-[color,transform] duration-150 hover:-translate-y-px hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none"
          href="/projects"
        >
          <span className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current motion-reduce:transition-none">
            View all projects
          </span>
        </Link>
      </div>

      <div className="grid gap-x-6 gap-y-14 min-[48rem]:grid-cols-2 min-[76rem]:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} source="home" />
        ))}
      </div>
    </section>
  );
}
