import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-ivory relative">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sage/5 rounded-l-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">
              Therapy &amp; Healing
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              Specialized Wellness Programs
            </h2>
            <p className="text-earth/70 font-light text-lg">
              Tailored therapeutic approaches utilizing yogic science to address
              specific modern health challenges.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sageDark hover:text-charcoal transition-colors border-b border-sageDark pb-1 mt-6 md:mt-0 shrink-0"
          >
            Consult an Expert <i className="fas fa-arrow-right text-sm" />
          </a>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Foundation Yoga – large */}
          <Reveal className="sm:col-span-2 sm:row-span-2 rounded-3xl overflow-hidden relative group bento-hover cursor-pointer">
            <img
              src="/yoga.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Foundation Yoga"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4">
                <i className="fas fa-seedling text-xl" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">
                Foundation Yoga
              </h3>
              <p className="text-white/80 font-light text-sm hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                Build a robust core, improve flexibility, and master fundamental
                alignments essential for long-term well-being.
              </p>
            </div>
          </Reveal>

          {/* Stress Management */}
          <Reveal
            delay={100}
            className="bg-sand rounded-3xl p-6 relative overflow-hidden bento-hover flex flex-col justify-between group cursor-pointer"
          >
            <div className="absolute -right-4 -top-4 text-8xl text-white opacity-40 group-hover:scale-110 transition-transform pointer-events-none">
              <i className="fas fa-spa" />
            </div>
            <h3 className="text-xl font-serif text-charcoal relative z-10">
              Stress
              <br />
              Management
            </h3>
            <p className="text-earth/70 text-sm font-light relative z-10 mt-4">
              Techniques to calm the nervous system.
            </p>
          </Reveal>

          {/* Yoga Therapy */}
          <Reveal
            delay={150}
            className="bg-sage rounded-3xl p-6 relative overflow-hidden bento-hover flex flex-col justify-between group cursor-pointer"
          >
            <div className="absolute -right-4 -bottom-4 text-8xl text-white opacity-20 group-hover:scale-110 transition-transform pointer-events-none">
              <i className="fas fa-hands-holding-circle" />
            </div>
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white mb-4 relative z-10">
              <i className="fas fa-heart-pulse" />
            </div>
            <h3 className="text-xl font-serif text-white relative z-10">
              Yoga Therapy
            </h3>
          </Reveal>

          {/* Mental Wellness – wide */}
          <Reveal
            delay={200}
            className="sm:col-span-2 glass-panel rounded-3xl p-6 bento-hover flex items-center gap-6 cursor-pointer"
          >
            <div className="w-16 h-16 bg-charcoal rounded-full flex shrink-0 items-center justify-center text-white text-2xl">
              <i className="fas fa-brain" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-charcoal mb-1">
                Mental Wellness
              </h3>
              <p className="text-earth/70 text-sm font-light">
                Addressing anxiety and depression through guided meditation and
                mindfulness practices.
              </p>
            </div>
          </Reveal>

          {/* PCOD / PCOS */}
          <Reveal
            delay={250}
            className="bg-ivory border border-sand rounded-3xl p-6 bento-hover flex flex-col justify-center items-center text-center cursor-pointer"
          >
            <i className="fas fa-venus text-3xl text-gold mb-3" />
            <h3 className="text-lg font-serif text-charcoal">
              PCOD / PCOS
              <br />
              Management
            </h3>
          </Reveal>

          {/* Prenatal */}
          <Reveal
            delay={300}
            className="bg-earth rounded-3xl p-6 bento-hover flex flex-col justify-between cursor-pointer"
          >
            <h3 className="text-xl font-serif text-sand">
              Prenatal &amp;
              <br />
              Postnatal
            </h3>
            <div className="flex justify-end text-sand/50 text-3xl">
              <i className="fas fa-baby" />
            </div>
          </Reveal>

          {/* Arthritis – wide */}
          <Reveal
            delay={350}
            className="sm:col-span-2 bg-charcoal text-white rounded-3xl p-6 relative overflow-hidden bento-hover flex flex-col justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-4xl text-gold">
                <i className="fas fa-bone" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1">
                  Arthritis Management
                </h3>
                <p className="text-white/60 text-sm font-light">
                  Gentle joint mobilization and pain relief protocols.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sageDark border-b border-sageDark pb-1"
          >
            Consult an Expert <i className="fas fa-arrow-right text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
