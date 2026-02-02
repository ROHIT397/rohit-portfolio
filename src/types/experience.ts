export interface ExperienceProject {
  title: string;
  bullets: string[];
}

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  projects?: ExperienceProject[];
  bullets?: string[];
}

export interface ExperienceData {
  current: ExperienceRole;
  intern: ExperienceRole;
}
