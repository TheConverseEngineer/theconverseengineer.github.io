"use client";

import { useState } from "react";

import { FilterDropdown } from "@/components/projects/filter-dropdown";
import { ProjectCard } from "@/components/projects/project-card";
import {
  projectCategories,
  projectLanguages,
  type ProjectCardData,
  type ProjectTag,
} from "@/data/projects";

type ProjectFilterProps = {
  projects: readonly ProjectCardData[];
};

function hasTag(project: ProjectCardData, tag: ProjectTag) {
  return project.tags.includes(tag);
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [language, setLanguage] = useState<ProjectTag | "">("");
  const [category, setCategory] = useState<ProjectTag | "">("");

  const availableLanguages = category
    ? projectLanguages.filter((option) =>
        projects.some(
          (project) =>
            hasTag(project, category) && hasTag(project, option),
        ),
      )
    : projectLanguages;

  const availableCategories = language
    ? projectCategories.filter((option) =>
        projects.some(
          (project) =>
            hasTag(project, language) && hasTag(project, option),
        ),
      )
    : projectCategories;

  const filteredProjects = projects.filter(
    (project) =>
      (!language || hasTag(project, language)) &&
      (!category || hasTag(project, category)),
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
        <form
          className="flex flex-wrap items-center gap-4"
          aria-label="Filter projects"
          onSubmit={(event) => event.preventDefault()}
        >
          <FilterDropdown
            label="Language"
            allLabel="All languages"
            options={availableLanguages}
            value={language}
            onChange={(nextLanguage) => {
              setLanguage(nextLanguage);

              if (
                nextLanguage &&
                category &&
                !projects.some(
                  (project) =>
                    hasTag(project, nextLanguage) &&
                    hasTag(project, category),
                )
              ) {
                setCategory("");
              }
            }}
          />

          <FilterDropdown
            label="Category"
            allLabel="All categories"
            options={availableCategories}
            value={category}
            onChange={(nextCategory) => {
              setCategory(nextCategory);

              if (
                nextCategory &&
                language &&
                !projects.some(
                  (project) =>
                    hasTag(project, nextCategory) &&
                    hasTag(project, language),
                )
              ) {
                setLanguage("");
              }
            }}
          />

          {(language || category) && (
            <button
              className="min-h-11 rounded-md border border-border px-3 font-mono text-xs font-medium text-muted transition-[border-color,color,transform] duration-150 hover:-translate-y-px hover:border-accent hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none"
              type="button"
              onClick={() => {
                setLanguage("");
                setCategory("");
              }}
            >
              Reset
            </button>
          )}
        </form>

        <p className="m-0 font-mono text-xs text-muted" aria-live="polite">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-x-6 gap-y-14 min-[48rem]:grid-cols-2 min-[76rem]:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      ) : (
        <p className="border border-border px-5 py-12 text-center text-sm text-muted">
          No projects match both filters.
        </p>
      )}
    </>
  );
}
