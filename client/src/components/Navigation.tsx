import { useEffect, useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

/**
 * Navigation Component
 * - Sticky header, transparent on load
 * - Becomes frosted glass (blur + dark bg) on scroll
 * - Logo in Playfair Display (serif)
 * - Links: Work, About, Contact
 */
export default function Navigation({ scrollY }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-black/75 backdrop-blur-[20px] border-b border-white/6'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="display-serif text-white text-lg font-normal tracking-widest cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SomeOne Studio
        </div>

        {/* Nav Links */}
        <div className="flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('work')}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
