import { Introduction } from "@/components/home/introduction";
import { SelectedProjects } from "@/components/home/selected-projects";
import { WorkExperience } from "@/components/home/work-experience";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-304 px-5 py-[clamp(4rem,10vw,8rem)] max-[35rem]:px-4 min-[61rem]:px-10">
      <div className="grid gap-16 min-[61rem]:grid-cols-[minmax(0,0.85fr)_minmax(28rem,1.15fr)] min-[61rem]:gap-[clamp(4rem,8vw,8rem)]">
        <Introduction />
        <WorkExperience />
      </div>
      <SelectedProjects />
    </main>
  );
}
