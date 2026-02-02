import { Section } from "./Section";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../constants/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-12">
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 w-2 h-2 bg-accent rounded-full -translate-x-[3px]"></div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-textHeading flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent" />
                    {EXPERIENCE.current.role}
                  </h3>
                  <p className="text-accent mt-1">
                    {EXPERIENCE.current.company}
                  </p>
                </div>

                <span className="text-sm text-accent">
                  {EXPERIENCE.current.period}
                </span>
              </div>

              <div className="space-y-4">
                {EXPERIENCE.current.projects.map((project) => (
                  <div key={project.title}>
                    <h4 className="text-base font-medium text-textHeading mb-2">
                      {project.title}
                    </h4>

                    <ul className="space-y-1 text-sm text-textSecondary">
                      {project.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-1 w-2 h-2 bg-accent rounded-full -translate-x-[3px]"></div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-textHeading flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent" />
                    {EXPERIENCE.intern.role}
                  </h3>
                  <p className="text-accent mt-1">
                    {EXPERIENCE.intern.company}
                  </p>
                </div>

                <span className="text-sm text-accent">
                  {EXPERIENCE.intern.period}
                </span>
              </div>

              <ul className="space-y-1 text-sm text-textSecondary">
                {EXPERIENCE.intern.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {bullet}
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
