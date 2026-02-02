import type { ExperienceData } from "../types/experience";

export const EXPERIENCE: ExperienceData = {
  current: {
    role: "Software Engineer – Backend",
    company: "Genpact India Pvt. Ltd.",
    period: "Aug 2023 – Present",
    projects: [
      {
        title: "Backend Engineering Responsibilities",
        bullets: [
          "Designed and maintained backend services using Java and Spring Boot in a production enterprise environment.",
          "Implemented validation, idempotency, and retry-safe processing to ensure data consistency and reliability.",
          "Built and exposed REST APIs for long-running workflows, enabling clear visibility into system state.",
          "Improved observability through structured logging, standardized error handling, and production monitoring.",
          "Worked closely with business stakeholders and client teams to translate domain requirements into backend logic.",
          "Contributed to CI/CD pipelines, improving release stability and reducing production regressions.",
        ],
      },
    ],
  },
  intern: {
    role: "Software Developer Intern",
    company: "Genpact India Pvt. Ltd.",
    period: "Feb 2023 – Jun 2023",
    bullets: [
      "Developed and maintained backend APIs using Spring Boot under guidance from senior engineers.",
      "Identified and fixed backend bugs and performance issues in existing services.",
      "Collaborated with team members using Git-based workflows and participated in code reviews.",
    ],
  },
};
