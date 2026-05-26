export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] justify-center items-center py-8 text-center border-t border-white/10">
      <p className="text-white/40 text-sm font-light">
        © {new Date().getFullYear()} Dr. VKS Yoga &amp; Wellness Home. All
        rights reserved. Om Shanti.
      </p>
      <div className="mt-6">
        <a
          href="https://www.logai.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            className="
                  inline-block whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium
                  bg-gradient-to-r from-white/30 via-white to-white/30
                  bg-[length:200%_100%]
                  bg-clip-text text-transparent
                  animate-text-shimmer
                  transition hover:opacity-80 hover:outline hover:outline-white/50
                "
          >
            powered by LogAI
          </span>
        </a>
      </div>
    </footer>
  );
}
