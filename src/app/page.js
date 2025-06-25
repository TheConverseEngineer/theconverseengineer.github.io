"use client";

import { Introduction } from "@/components/Introduction";
import { ExperienceSection } from "@/components/ExperienceSection";


export default function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-start gap-16">
      <Introduction />
      <ExperienceSection props="w-[80%] mx-w-[600px]"/>  
    </section>
  );
}
