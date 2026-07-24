import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ProjectBackLink } from "@/components/projects/project-back-link";
import { ProjectBackLinkContent } from "@/components/projects/project-back-link-content";
import { ProjectTag } from "@/components/projects/project-tag";
import { projects, type Project } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Vraj Parikh`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-304 px-5 pt-[clamp(2.25rem,6svh,5rem)] pb-[clamp(4rem,8vw,7rem)] max-[35rem]:px-4 min-[61rem]:px-10">
      <article>
        <header className="pb-[clamp(1.75rem,4svh,3rem)]">
          <div className="flex flex-col items-start gap-3 min-[40rem]:flex-row min-[40rem]:justify-between min-[40rem]:gap-5">
            <div className="order-2 min-w-0 min-[40rem]:order-1">
              <h1 className="m-0 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.97] font-[520] tracking-[-0.05em] text-accent">
                {project.title}
              </h1>
            </div>

            <div className="order-1 text-base min-[40rem]:order-2">
              <Suspense
                fallback={
                  <ProjectBackLinkContent
                    href="/projects"
                    label="Back to all projects"
                  />
                }
              >
                <ProjectBackLink />
              </Suspense>
            </div>
          </div>

          <ul
            className="mt-7 mb-0 flex list-none flex-wrap gap-2 p-0 font-mono"
            aria-label={`${project.title} tags`}
          >
            {project.tags.map((tag) => (
              <li key={tag}>
                <ProjectTag label={tag} />
              </li>
            ))}
          </ul>
        </header>

        <div>
          <div className="relative h-[clamp(10rem,30svh,22rem)] overflow-hidden rounded-sm bg-background">
            {project.image ? (
              <Image
                className="object-cover"
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 75.999rem) calc(100vw - 4rem), 70rem"
              />
            ) : (
              <div className="flex h-full items-center justify-center border border-border text-center font-mono text-xs tracking-[0.08em] text-muted uppercase">
                Image forthcoming
              </div>
            )}
          </div>

          <a
            className="group mt-5 inline-flex min-h-11 items-center gap-3 rounded-md border border-border px-4 font-mono text-base text-foreground no-underline transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-accent hover:text-accent motion-reduce:transform-none motion-reduce:transition-none"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
            <svg
              className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <div className="py-10 min-[48rem]:py-14">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            {project.details.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
