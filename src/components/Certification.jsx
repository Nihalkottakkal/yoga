import Reveal from "./Reveal";

export default function Certification() {
  return (
    <section className="py-16 bg-sand border-y border-sand">
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center border border-sand">
          <i className="fas fa-award text-3xl text-gold" />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-earth/60 mb-2 font-semibold">
          Accredited &amp; Certified By
        </p>
        <h3 className="text-2xl font-serif text-charcoal">
          Foundation for Quality (India), Bangalore
        </h3>
      </Reveal>
    </section>
  );
}
