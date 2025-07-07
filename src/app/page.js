"use client";

import { Introduction } from "@/components/Introduction";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Badge } from "../components/ui/badge";

const LANGUAGES = ['C/C++', 'Python', 'Rust', 'JavaScript/TypeScript', 'Java', 'SQL (Postgres + SQLite)'];
const SKILLS = ['PyTorch', 'React + TailwindCSS', 'Django', 'RAG/GenAI', 'Full-Stack Development', 'Systems Design'];


export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-start gap-6">
      <Introduction />
      <div className="flex items-top gap-6 flex-col xl:gap-0 xl:flex-row-reverse items-cen">
        <div className="flex flex-col gap-6 items-center mx-6">
          <div className="border-[.5px] border-gray-800 rounded-xl bg-background shadow-2xl max-w-xl w-fit h-fit">
              <div className="rounded-t-xl text-white text-xl text-center px-6 pt-2"> Languages </div>
              <div className="flex flex-wrap justify-center gap-4 m-4">
                  {LANGUAGES.map((item, index) => {
                      return <Badge variant='secondary' key={index}>{item}</Badge>
                  })}
            </div>
          </div>
          <div className="border-[.5px] border-gray-800 rounded-xl bg-background shadow-2xl max-w-xl w-fit h-fit">
              <div className="rounded-t-xl text-white text-xl text-center px-6 pt-2"> Skills </div>
              <div className="flex flex-wrap justify-center gap-4 m-4">
                  {SKILLS.map((item, index) => {
                      return <Badge variant='secondary' key={index}>{item}</Badge>
                  })}
            </div>
          </div>
        </div>
        <ExperienceSection/>  
      </div>
    </section>
  );
}
