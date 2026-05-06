import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  name: string;
  sector: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Nexo 360',
    sector: 'B2B SaaS',
    tagline: 'The operating system for premium fleet operators.',
    description:
      'Nexo 360 is a SaaS platform purpose-built for VTC and luxury fleet operators. From dispatch and driver management to real-time analytics and client reporting, it replaces disconnected tools with a single intelligent layer — built from eight months of direct field experience inside a live operation.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663357237947/TGMNjxvgFu6bWMx7YyfCMo/project-nexo360-4g48dDHNxQWRfRicL4E2C2.webp',
    accentColor: '#3B82F6',
  },
  {
    id: 2,
    name: 'DIPA',
    sector: 'EdTech · AI',
    tagline: 'AI education, designed for the generation growing up with it.',
    description:
      'DIPA is an adaptive learning platform for teenagers navigating a world shaped by artificial intelligence. It delivers structured, age-appropriate AI literacy — blending conceptual understanding with hands-on practice — preparing young people not just to use AI, but to think critically about it.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663357237947/TGMNjxvgFu6bWMx7YyfCMo/project-dipa-aTaL7gkCmqqw2rbxV7Fqzs.webp',
    accentColor: '#8B5CF6',
  },
  {
    id: 3,
    name: 'Aevum',
    sector: 'Silver Economy · AI',
    tagline: 'Technology that grows with you, not past you.',
    description:
      'Aevum addresses one of the most underserved markets in tech: adults over 60. The platform provides AI-assisted services — health tracking, social connection, cognitive engagement — designed with genuine empathy for the lived experience of aging. Not a utility. A companion.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663357237947/TGMNjxvgFu6bWMx7YyfCMo/project-aevum-5srz75nBADmZLuMvWrFuA2.webp',
    accentColor: '#F59E0B',
  },
  {
    id: 4,
    name: 'Sanctum Prime',
    sector: 'Ultra-Luxury · Real Estate',
    tagline: 'Sovereign residences for those who require absolute privacy.',
    description:
      'Sanctum Prime is a co-venture targeting the ultra-high-net-worth residential market — a membership model for individuals with net worth above $500M who require security, discretion, and architectural excellence at a scale that no conventional real estate product can provide. Built in partnership with a Pritzker-lineage architectural studio.',
    image:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663357237947/TGMNjxvgFu6bWMx7YyfCMo/project-sanctum-prime-bphhrUgkKnofqHRoJEvTT9.webp',
    accentColor: '#D4AF37',
  },
];

/**
 * Projects Section
 * - Each project is a full-viewport section
 * - Image on right with gradient overlay, content on left
 * - Accent color per project (tags, accents)
 * - Scroll-triggered animations
 */
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects((prev) => {
              if (!prev.includes(projectId)) {
                return [...prev, projectId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative bg-black">
      {projects.map((project, index) => (
        <div
          key={project.id}
          data-project-id={project.id}
          className="relative min-h-screen w-full flex items-center overflow-hidden"
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Gradient Overlay - diagonal */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 100%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
            <div className="max-w-2xl">
              {/* Project Number */}
              <div
                className={`text-white/30 text-xs font-medium tracking-widest uppercase mb-4 transition-all duration-700 ${visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {String(project.id).padStart(2, '0')}
              </div>

              {/* Sector Tag */}
              <div
                className={`inline-block mb-6 transition-all duration-700 delay-100 ${visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <span
                  className="text-xs font-medium tracking-widest uppercase px-3 py-2 border rounded-full"
                  style={{
                    borderColor: project.accentColor,
                    color: project.accentColor,
                  }}
                >
                  {project.sector}
                </span>
              </div>

              {/* Project Name */}
              <h2
                className={`display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-200 ${visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {project.name}
              </h2>

              {/* Tagline */}
              <p
                className={`text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 transition-all duration-700 delay-300 ${visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                className={`text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-400 ${visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {project.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className={`inline-block text-sm font-medium transition-all duration-700 delay-500 ${
                  visibleProjects.includes(project.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ color: project.accentColor }}
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
