import { useState, useEffect } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#programs", label: "Programs" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-6 md:px-12 ${
        scrolled
          ? "bg-sand/50 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        <a
          href="#home"
          className={`text-xl md:text-2xl font-serif font-semibold tracking-wide z-50 transition-colors duration-300 ${
            scrolled || menuOpen ? "text-charcoal" : "text-white drop-shadow-md"
          }`}
        >
          <div
            className={` ${scrolled ? "w-8 h-8 md:w-16 md:h-16" : "w-12 h-12 md:w-20 md:h-20"} overflow-hidden`}
          >
            <img
              src="/logo.png"
              alt="Dr. VKS Yoga & Wellness Home Logo"
              className="h-full w-full w-auto"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 bg-sand glass-panel px-8 py-3 rounded-full">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm uppercase tracking-widest text-charcoal hover:text-sageDark transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden z-50 focus:outline-none transition-colors duration-300 ${
            scrolled || menuOpen ? "text-charcoal" : "text-white drop-shadow-md"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-ivory/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            className="text-2xl font-serif text-charcoal hover:text-sage transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
