import { ExternalLink, Building2, Target, Layers } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company?: string;
  client?: string;
  description: string;
  impact: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  company,
  client,
  description,
  impact,
  tech,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg p-6 transition-colors duration-200
        hover:border-accent ${featured ? "shadow-sm" : ""}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-textHeading mb-1">
            {title}
          </h3>

          {company && (
            <p className="text-sm text-accent flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {company}
              {client && (
                <span className="text-textMuted"> | Client: {client}</span>
              )}
            </p>
          )}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-accent transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      <p className="text-textSecondary mb-4 leading-relaxed">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-textHeading mb-2 flex items-center gap-1">
          <Target className="w-4 h-4 text-accent" />
          Impact
        </h4>

        <ul className="space-y-1">
          {impact.map((item, index) => (
            <li
              key={index}
              className="text-sm text-textSecondary flex items-start"
            >
              <span className="text-accent mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-bg border border-border text-accent text-xs rounded-full flex items-center gap-1"
          >
            <Layers className="w-3 h-3" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
