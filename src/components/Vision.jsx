import Reveal from './Reveal'

export default function Vision() {
  return (
    <section className="py-24 bg-sand relative overflow-hidden pattern-bg">
      <Reveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <i className="fas fa-om text-5xl text-gold/40 mb-8 block" />
        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-10">
          Preserving Tradition.<br />Transforming Society.
        </h2>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
          <div className="absolute -top-4 -left-4 text-6xl text-gold opacity-20 font-serif select-none">
            "
          </div>
          <p className="text-xl md:text-2xl text-earth font-serif italic leading-relaxed">
            Our vision is to preserve the authentic essence of traditional yoga while making
            its profound benefits accessible to the modern world. We aim to foster a community
            where holistic well-being is not just a practice, but a continuous journey of
            self-evolvement.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
