import { useEffect, useRef, useState } from 'react';

/**
 * Philosophy Section
 * - Dark background, centered text
 * - Display heading + body description
 * - Three horizontal stat items with dividers
 * - Scroll-triggered fade-in animation
 */
export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-24 md:py-32 bg-black px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Our approach
        </div>

        {/* Main Heading */}
        <h2
          className={`display-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Strategy is nothing
          <br />
          without execution.
        </h2>

        {/* Description */}
        <p
          className={`text-white/60 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          We work at the intersection of technological possibility and business reality.
          Every project in our portfolio exists because someone was willing to build
          it from scratch — with rigor, taste, and a bias for shipping.
        </p>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Stat 1 */}
          <div className="border-r border-white/10 pr-8 md:pr-12">
            <div className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              7 Sectors
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Active across consulting, SaaS, hardware, deeptech, luxury real estate, telecom, biotech
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-r border-white/10 pr-8 md:pr-12">
            <div className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              10 Ventures
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              From MVP to deployed product
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              Barcelona
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Operating globally from Catalonia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
