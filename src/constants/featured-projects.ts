import type { Project } from "../types/projects";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Bulk Upload System",
    company: "Genpact India Pvt. Ltd.",
    description:
      "A backend system designed to ingest large datasets using asynchronous batch processing. The system decouples user-facing uploads from long-running background jobs while ensuring data quality, reliability, and consistency.",
    impact: [
      "Reduced downstream data quality issues by ~40% through comprehensive business and technical validation checks",
      "Enabled partial batch success with record-level failure handling, reducing full batch reprocessing by ~30%",
      "Ensured safe handling of duplicate uploads and retries using idempotent and retry-safe processing mechanisms",
      "Improved visibility into long-running jobs via REST APIs exposing processing status and outcomes",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Spring Scheduling",
      "REST APIs",
      "PostgreSQL",
      "AWS S3",
      "Docker",
      "Openshift"
    ],
  },
  {
    title: "Novus Analytics Platform",
    company: "Genpact India Pvt. Ltd.",
    description:
      "An internal analytics platform built to replace licensed third-party reporting tools. Supports multiple dashboards using standardized backend data access and configurable reporting logic.",
    impact: [
      "Supported 30+ dashboards using reusable backend APIs and configuration-driven logic",
      "Improved reporting consistency and reduced maintenance effort across analytics workflows",
      "Collaborated with frontend and product teams to validate metrics and ensure accurate reporting",
      "Delivered approximately $16K in annual cost savings by reducing reliance on third-party tools",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "JSON Configuration",
    ],
  },
];
