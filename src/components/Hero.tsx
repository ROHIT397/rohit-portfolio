import { Button } from "./Button";
import { Github, FileText, ArrowDown } from "lucide-react";

interface HeroContent {
  name: string;
  role: string;
  summary: string;
  resumeDriveLink: string;
  githubLink: string;
}

export function Hero() {
  const hero: HeroContent = {
    name: "Rohit Tiwari",
    role: "Software Engineer | Backend",
    summary:
      "Backend Software Engineer with experience building reliable, scalable enterprise systems using Java and Spring Boot, with a focus on API design, performance, and maintainability.",
    resumeDriveLink:
      "https://drive.google.com/file/d/1KrtCgX9bn2WffBlygnReKduvx9FZq1Ah/view?usp=sharing",
    githubLink: "https://github.com/ROHIT397",
    
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-textHeading mb-6">
          {hero.name}
        </h1>

        <p className="text-2xl text-accent mb-4">{hero.role}</p>

        <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
          {hero.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button variant="primary" href={hero.resumeDriveLink}>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Resume
            </div>
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="flex items-center gap-2">
              View Projects
              <ArrowDown className="w-4 h-4" />
            </div>
          </Button>

          <Button variant="secondary" href={hero.githubLink}>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </div>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-textMuted mx-auto" />
        </div>
      </div>
    </section>
  );
}
