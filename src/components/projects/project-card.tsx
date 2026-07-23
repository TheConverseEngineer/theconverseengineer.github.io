import Image from "next/image";
import Link from "next/link";

import { ProjectTag } from "@/components/projects/project-tag";
import type { ProjectCardData } from "@/data/projects";

type ProjectCardProps = ProjectCardData & {
  source?: "home";
};

export function ProjectCard({
  title,
  summary,
  tags,
  image,
  slug,
  source,
}: ProjectCardProps) {
  const href =
    source === "home" ? `/projects/${slug}?from=home` : `/projects/${slug}`;

  return (
    <Link
      className="group block h-full rounded-md text-foreground no-underline"
      href={href}
      aria-label={`View ${title} project`}
    >
      <article className="relative flex h-full flex-col rounded-md border border-border before:pointer-events-none before:absolute before:inset-0 before:rounded-md before:border before:border-transparent before:transition-[transform,border-color] before:duration-300 group-hover:z-10 group-hover:border-transparent group-hover:before:scale-[1.015] group-hover:before:border-accent motion-reduce:before:transform-none motion-reduce:before:transition-colors">
        <div className="relative aspect-[4/3]">
          <div className="absolute inset-8 overflow-hidden rounded-sm bg-background transition-[inset] duration-300 group-hover:inset-5 motion-reduce:inset-8 motion-reduce:transition-none">
            {image ? (
              <Image
                className="object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 47.999rem) calc(100vw - 4rem), (max-width: 75.999rem) calc(50vw - 5rem), 21rem"
              />
            ) : (
              <div className="flex h-full items-center justify-center border border-border text-center font-mono text-xs tracking-[0.08em] text-muted uppercase">
                Image forthcoming
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="m-0 text-[clamp(1.35rem,2.5vw,1.75rem)] leading-tight font-medium tracking-[-0.025em]">
            {title}
          </h3>
          <p className="mt-3 mb-8 max-w-prose text-sm leading-relaxed text-muted">
            {summary}
          </p>

          <ul
            className="mt-auto flex list-none flex-wrap gap-x-3 gap-y-2 pt-4 font-mono text-xs text-muted"
            aria-label={`${title} tags`}
          >
            {tags.map((tag) => (
              <li key={tag}>
                <ProjectTag label={tag} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
}
