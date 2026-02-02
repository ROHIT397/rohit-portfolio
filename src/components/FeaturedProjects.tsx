import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { FEATURED_PROJECTS } from "../constants/featured-projects";

export function FeaturedProjects() {
  return (
    <Section id="projects" title="Company Projects">
      <div className="grid md:grid-cols-1 gap-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} featured />
        ))}
      </div>
    </Section>
  );
}
