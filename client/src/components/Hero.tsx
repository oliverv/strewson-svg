import { useEffect, useState } from 'react';

/**
 * Hero Section
 * - Full viewport (100vh)
 * - Background: cinematographic image with gradient overlay
 * - Content: left-aligned, generous margin
 * - Scroll indicator: animated descending line
 */
export default function Hero() {
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 300);
      setScrollIndicatorOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663357237947/TGMNjxvgFu6bWMx7YyfCMo/hero-background-SHDCXgfAoxq82VxAuCcbjH.webp)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        {/* Eyebrow Label */}
        <div className="text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in-up">
          Technology & AI Strategy
        </div>

        {/* Main Heading */}
        <h1 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-bold text-white leading-tight max-w-3xl mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          We build what
          <br />
          others imagine.
        </h1>

        {/* Description */}
        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          SomeOne Studio is an independent technology and AI strategy consultancy.
          We design, build, and deploy ventures across AI, SaaS, hardware, and
          deep technology — from first concept to live product.
        </p>

        {/* CTA Button */}
        <button className="border border-white text-white px-6 sm:px-9 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-200 mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Explore our work →
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-white/0 animate-pulse" />
      </div>
    </section>
  );
}
