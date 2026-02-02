import { Github, Linkedin, Mail } from "lucide-react";

interface FooterContent {
  name: string;
  role: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  copyright: string;
}

export function Footer() {
  const footer: FooterContent = {
    name: "Rohit Tiwari",
    role: "Software Engineer - Backend",
    email: "rohittiwari397@gmail.com",
    githubUrl: "https://github.com/ROHIT397",
    linkedinUrl: "https://www.linkedin.com/in/rohit397/",
    copyright:
      "© 2026 Rohit Tiwari. Built with React, TypeScript, and Tailwind CSS.",
  };

  return (
    <footer className="bg-bg border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-textHeading mb-2">
              {footer.name}
            </h3>
            <p className="text-accent">{footer.role}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${footer.email}`}
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{footer.email}</span>
            </a>

            <a
              href={footer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-textMuted">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
