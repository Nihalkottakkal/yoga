import Reveal from './Reveal'

const MODULES = [
  { label: 'Pranayama',          style: 'glass-panel' },
  { label: 'Soorya Namaskar',    style: 'glass-panel' },
  { label: 'Saptha Chakra Dhyana', style: 'glass-panel' },
  { label: 'Panchabootha Dhyan', style: 'glass-panel' },
  { label: 'Yoga Nidra Sessions', style: 'glass-panel' },
  { label: 'Yoga for Kids',      style: 'glass-panel' },
  { label: 'Corporate Yoga',     style: 'bg-sage/20 border border-sage/30' },
  { label: 'Yoga for Professionals', style: 'bg-sage/20 border border-sage/30' },
]

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32 bg-sand relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            Training &amp; Certification
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </Reveal>

        {/* Main certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Junior */}
          <Reveal className="bg-ivory rounded-[40px] p-8 md:p-12 shadow-xl shadow-black/5 group hover:shadow-2xl hover:shadow-sage/20 transition-all duration-500">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-sand px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-earth">
                Foundation
              </div>
              <span className="text-3xl font-serif text-gold">40H</span>
            </div>
            <h3 className="text-3xl font-serif text-charcoal mb-4 group-hover:text-sageDark transition-colors">
              Junior Level <br />Hata Yoga Practice
            </h3>
            <p className="text-earth/80 mb-8 font-light leading-relaxed">
              A comprehensive introduction to classical Hata Yoga. Perfect for beginners aiming to
              establish a strong, safe, and scientifically grounded personal practice.
            </p>
            <button className="w-full py-4 border border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors duration-300 font-medium">
              View Curriculum
            </button>
          </Reveal>

          {/* Advanced */}
          <Reveal
            delay={100}
            className="bg-charcoal rounded-[40px] p-8 md:p-12 shadow-xl shadow-black/10 group hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="bg-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-goldLight">
                Professional
              </div>
              <span className="text-3xl font-serif text-goldLight">100H</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-goldLight transition-colors">
              Advanced Level <br />Training
            </h3>
            <p className="text-white/60 mb-8 font-light leading-relaxed">
              Deepen your understanding of anatomy, philosophy, and advanced asana logic. Designed
              for serious practitioners and aspiring teachers.
            </p>
            <button className="w-full py-4 bg-gold text-white rounded-full hover:bg-white hover:text-charcoal transition-colors duration-300 font-medium">
              Apply Now
            </button>
          </Reveal>

        </div>

        {/* Modules */}
        <Reveal>
          <h4 className="text-xl font-serif text-center text-charcoal mb-8">
            Specialized Modules &amp; Sessions
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {MODULES.map(({ label, style }) => (
              <span
                key={label}
                className={`px-6 py-3 rounded-full text-sm font-medium text-earth hover:bg-white transition-colors cursor-pointer ${style}`}
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
