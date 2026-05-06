import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

/**
 * Design Philosophy: Elegancia Oscura Cinematográfica
 * - Full-viewport sections with cinematic hero images
 * - Editorial serif (Playfair Display) + geometric sans (DM Sans)
 * - Scroll-triggered animations: fade-in + parallax
 * - Dark base (#080808) with accent colors per project
 * - Glass morphism nav, smooth transitions, no bounces
 */
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Philosophy />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
