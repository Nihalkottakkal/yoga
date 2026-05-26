import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      if (window.scrollY < window.innerHeight) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imgRef}
          src="/hero.jpg"
          alt="Serene Sunrise Yoga"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* fade bottom to page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-ivory" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <Reveal>
          <span className="block text-goldLight tracking-[0.2em] uppercase text-sm mb-6">
            Kerala, India
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Ancient Yogic Wisdom
            <br />
            <span className="italic text-white/90">for Modern Life</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            Transform your body, mind, and inner well-being through authentic
            traditional yoga practices guided by experienced teachers and rooted
            in scientific Hata Yoga.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium tracking-wide hover:bg-white hover:text-charcoal transition-all duration-300 w-full sm:w-auto text-center group"
            >
              Start Your Wellness Journey
              <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#courses"
              className="px-8 py-4 bg-gold text-white rounded-full font-medium tracking-wide hover:bg-gold/80 transition-all duration-300 shadow-lg shadow-gold/20 w-full sm:w-auto text-center"
            >
              Explore Courses
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block">
        <a
          href="#about"
          className="text-white/50 hover:text-white transition-colors"
        >
          <i className="fas fa-chevron-down text-2xl" />
        </a>
      </div>
    </header>
  );
}
