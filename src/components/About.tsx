import { Section } from "./Section";

interface AboutContent {
  paragraphs: string[];
}

export function About() {
  const about: AboutContent = {
    paragraphs: [
      "Backend Software Engineer with experience building reliable and scalable services using Java and Spring Boot. I work on backend systems where concurrency, data consistency, and performance are key considerations.",
      "I focus on designing clean APIs and backend logic that behave predictably under load, handle failures gracefully, and remain easy to maintain over time. I value simple designs that scale well and are practical to operate in real production environments.",
    ],
  };

  return (
    <Section id="about" title="About">
      <div className="bg-surface border border-border rounded-lg p-6 max-w-3xl">
        {about.paragraphs.map((text, index) => (
          <p
            key={index}
            className={`text-lg text-textSecondary leading-relaxed ${
              index !== about.paragraphs.length - 1 ? "mb-4" : ""
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
