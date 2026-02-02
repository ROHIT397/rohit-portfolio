import { Section } from './Section';
import { SkillCard } from './SkillCard';

interface Capability {
  title: string;
  skills: string[];
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Backend Engineering',
    skills: [
      'Java, Spring Boot',
      'REST APIs, validation, error handling',
      'Async & batch processing',
      'Idempotency and retries'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL, MySQL',
      'Schema design & indexing',
      'Query optimization'
    ]
  },
  {
    title: 'System Design & LLD',
    skills: [
      'SOLID & OOP',
      'Scalable backend design',
      'Concurrency & failure handling'
    ]
  },
  {
    title: 'Tooling & Observability',
    skills: [
      'Docker, OpenShift',
      'Prometheus, Grafana',
      'AWS S3',
      'Git, GitHub, CI/CD'
    ]
  }
];

export function TechnicalCapabilities() {
  return (
    <Section id="capabilities" title="Technical Capabilities" className="bg-bg">
      <div className="grid md:grid-cols-2 gap-6">
        {CAPABILITIES.map((capability) => (
          <SkillCard key={capability.title} {...capability} />
        ))}
      </div>
    </Section>
  );
}
