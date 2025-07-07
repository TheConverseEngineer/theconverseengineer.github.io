"use client";

import { Introduction } from "@/components/Introduction";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Badge } from "../components/ui/badge";
import { Card } from "@/components/ui/card";

const LANGUAGES = ['C/C++', 'Python', 'Rust', 'JavaScript/TypeScript', 'Java', 'SQL (Postgres + SQLite)'];
const SKILLS = ['PyTorch', 'React + TailwindCSS', 'Django', 'RAG/GenAI', 'Full-Stack Development', 'Systems Design'];


export default function Home() {
  return (
    <section className="h-fit min-h-screen flex flex-col items-center justify-start gap-6">
      <Introduction />
      <div className="flex items-top gap-6 flex-col xl:gap-0 xl:flex-row-reverse items-top mb-40">
        <div className="flex flex-col gap-6 items-center mx-6">
          <Card classes="max-w-xl h-fit" title="Languages" content={(
            <div className="flex flex-wrap justify-center gap-4 m-4">{
              LANGUAGES.map((item, index) => {
                return <Badge variant='secondary' key={index}>{item}</Badge>
              })
            }</div>
          )}/>

          <Card classes="max-w-xl h-fit" title="Skills" content={(
            <div className="flex flex-wrap justify-center gap-4 m-4">{
              SKILLS.map((item, index) => {
                return <Badge variant='secondary' key={index}>{item}</Badge>
              })
            }</div>
          )}/>
        </div>
        <ExperienceSection/>  
      </div>
    </section>
  );
}
