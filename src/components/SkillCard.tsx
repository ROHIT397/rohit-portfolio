interface SkillCardProps {
  title: string;
  skills: string[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200">
      <h3 className="text-lg font-semibold text-textHeading mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-textSecondary flex items-start"
          >
            <span className="text-accent mr-2">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
