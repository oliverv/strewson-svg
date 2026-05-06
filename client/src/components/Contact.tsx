import { useEffect, useRef, useState } from 'react';

/**
 * Contact Section
 * - Centered minimal layout
 * - Large email display
 * - Contact form (Name, Email, Message)
 * - Social links + location
 * - Scroll-triggered animations
 */
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-black px-6"
    >
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        {/* Eyebrow */}
        <div
          className={`text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Let's talk
        </div>

        {/* Heading */}
        <h2
          className={`display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Start a conversation.
        </h2>

        {/* Description */}
        <p
          className={`text-white/60 text-base sm:text-lg md:text-xl mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Whether you have a venture to build, a strategy to sharpen,
          <br />
          or simply a question worth asking.
        </p>

        {/* Email */}
        <a
          href="mailto:hola@someonestudio.com"
          className={`inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white hover:text-white/80 transition-colors duration-200 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          hola@someonestudio.com
        </a>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto mb-12 transition-all duration-700 delay-400 px-4 sm:px-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
            />

            {/* Message */}
            <textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>

        {/* Social Links & Location */}
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/60 text-xs sm:text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <span>Barcelona, Catalonia</span>
        </div>
      </div>
    </section>
  );
}
