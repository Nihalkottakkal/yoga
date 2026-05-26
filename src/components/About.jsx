import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-sage rounded-t-full rounded-b-[40px] -translate-x-4 translate-y-4 opacity-20" />
            <img
              src="/about.jpg"
              alt="Yoga Studio Space"
              className="relative grayscale w-full h-[500px] md:h-[600px] object-cover rounded-t-full rounded-b-[40px] shadow-2xl"
            />
            <div className="absolute bottom-8 right-4 md:right-8 glass-panel px-5 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white text-xl shrink-0">
                <i className="fas fa-leaf" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  Established
                </p>
                <p className="text-xl font-serif text-earth">1999</p>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              Welcome to <br />
              Dr. VKS Yoga &amp; Wellness Home
            </h2>

            <div className="space-y-6 text-earth/80 font-light leading-relaxed text-lg">
              <p>
                Nestled in the serene landscapes of Kerala, Dr. VKS Yoga &amp;
                Wellness Home is a sanctuary for those seeking physical health,
                mental clarity, and spiritual evolution. We blend the ancient
                purity of traditional practices with modern scientific
                understanding.
              </p>
              <p>
                Our holistic approach creates a space where structural alignment
                meets energetic balance. Every breath, every movement is
                designed to harmonize your existence, offering a retreat from
                the chaos of modern life.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-sand flex items-center gap-6">
              <img
                src="/guru.jpeg"
                alt="Dr VKS"
                className="w-20 h-20 rounded-full object-cover grayscale opacity-80"
              />
              <div>
                <p className="font-serif text-xl text-charcoal">Dr. V.K.S</p>
                <p className="text-sm text-sageDark uppercase tracking-wider">
                  Founder &amp; Master Teacher
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
