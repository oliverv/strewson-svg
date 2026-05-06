import { useEffect, useRef, useState } from 'react';

/**
 * About Section
 * - Split layout: studio about (left) + personal CV card (right)
 * - Stacks vertically on mobile
 * - Scroll-triggered animations
 * - CV card with glass morphism effect
 */
export default function About() {
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
      id="about"
      className="relative py-24 md:py-32 bg-black px-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Studio About */}
          <div>
            {/* Eyebrow */}
            <div
              className={`text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              About SomeOne Studio
            </div>

              {/* Heading */}
            <h2
              className={`display-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              A one-person studio
              <br />
              with no excuses.
            </h2>

            {/* Description */}
            <p
              className={`text-white/60 text-base sm:text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              SomeOne Studio was founded by Fernando Sancho Ramírez — a technologist,
              strategist, and builder with a background spanning Microsoft, Cisco, and a
              decade of independent ventures. The studio operates without hierarchy or
              bloat: from whitepaper to working prototype, from commercial strategy to
              deployed product.
            </p>

            <p
              className={`text-white/60 text-base sm:text-lg leading-relaxed mt-6 font-semibold transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              We don't pitch decks. We build things.
            </p>
          </div>

          {/* Right: CV Card */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div
              className="rounded-2xl p-8 md:p-10 backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Avatar */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center display-serif text-2xl font-bold text-white"
                  style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '2px solid #D4AF37',
                  }}
                >
                  FS
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="display-serif text-2xl font-bold text-white text-center mb-1">
                Fernando Sancho Ramírez
              </h3>
              <p className="text-white/60 text-center text-sm mb-6">
                Founder · CAIO · CTO
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Experience */}
              <div className="mb-6">
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-3">
                  Experience
                </p>
                <ul className="space-y-2">
                  <li className="text-white/70 text-sm">→ Microsoft</li>
                  <li className="text-white/70 text-sm">→ Cisco</li>
                  <li className="text-white/70 text-sm">→ SomeOne Studio (Founder, 2016–present)</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Areas */}
              <div className="mb-6">
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-3">
                  Areas
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  AI Strategy · SaaS Architecture · Hardware & Deeptech
                  <br />
                  Luxury Real Estate Ventures · Theoretical Cosmology (independent)
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Location */}
              <div className="mb-8">
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-3">
                  Based in
                </p>
                <p className="text-white/70 text-sm">Barcelona, Catalonia</p>
              </div>

              {/* CTA Button */}
              <button
                className="w-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-6 py-3 text-sm font-medium transition-all duration-200"
                style={{
                  color: '#D4AF37',
                  borderColor: '#D4AF37',
                }}
              >
                Download CV ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
