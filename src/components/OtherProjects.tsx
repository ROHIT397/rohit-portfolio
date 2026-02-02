import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { OTHER_PROJECTS } from "../constants/other-projects";

export function OtherProjects() {
  return (
    <Section id="personal-projects" title="Personal Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {OTHER_PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
