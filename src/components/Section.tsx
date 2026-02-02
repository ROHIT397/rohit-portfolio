interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-textHeading mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
