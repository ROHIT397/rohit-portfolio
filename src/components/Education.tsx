import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  specialization: string;
  institute: string;
  period: string;
  cgpa: string;
}

export function Education() {
  const education: EducationItem = {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Computer Science & Engineering",
    institute: "National Institute of Technology, Jamshedpur",
    period: "2020 – 2023",
    cgpa: "8.63 / 10.0",
  };

  return (
    <Section id="education" title="Education">
      <div className="bg-surface border border-border rounded-lg p-6 max-w-2xl">
        <div className="flex items-start gap-4">
          <div className="bg-bg p-3 rounded-lg">
            <GraduationCap className="w-6 h-6 text-accent" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-textHeading mb-1">
              {education.institute}
            </h3>

            <p className="text-textSecondary mb-1">
              {education.specialization}
            </p>

            <p className="text-accent mb-3">
              {education.degree}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-accent">
                {education.period}
              </span>

              <span className="text-textMuted">•</span>

              <span className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full text-accent">
                CGPA {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
