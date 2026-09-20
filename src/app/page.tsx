import { Hero } from "@/components/sections/hero";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Capabilities } from "@/components/sections/capabilities";
import { SelectedWork } from "@/components/sections/selected-work";
import { EngineeringExperience } from "@/components/sections/engineering-experience";
import { Skills } from "@/components/sections/skills";
import { GithubStats } from "@/components/sections/github-stats";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";

/**
 * Single-page composition.
 *
 * Sections are declared in order — to reorder, just rearrange the JSX below.
 * Each section is self-contained: it pulls its own data, renders its own header,
 * and respects the shared Section primitive for consistent rhythm.
 *
 * The page is a Server Component. Client-side interactivity (tabs, dialogs,
 * reveals, theme toggle) is scoped inside the sections that need it.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <CurrentlyBuilding />
      <Capabilities />
      <SelectedWork />
      <EngineeringExperience />
      <Skills />
      <GithubStats />
      <Writing />
      <Contact />
    </>
  );
}
