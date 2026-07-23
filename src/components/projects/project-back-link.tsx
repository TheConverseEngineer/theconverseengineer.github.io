"use client";

import { useSearchParams } from "next/navigation";

import { ProjectBackLinkContent } from "@/components/projects/project-back-link-content";

export function ProjectBackLink() {
  const searchParams = useSearchParams();
  const cameFromHomepage = searchParams.get("from") === "home";
  const href = cameFromHomepage ? "/" : "/projects";
  const label = cameFromHomepage
    ? "Back to homepage"
    : "Back to all projects";

  return <ProjectBackLinkContent href={href} label={label} />;
}
