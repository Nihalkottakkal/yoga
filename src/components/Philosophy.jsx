import Reveal from './Reveal'

const KOSHAS = [
  {
    name: 'Annamaya Kosha',
    subtitle: 'Physical Body',
    desc: 'Purification and strengthening through Asanas and dietary discipline.',
    color: 'gold',
    borderColor: 'border-t-gold',
    textColor: 'text-goldLight',
    icon: 'fa-child',
    rings: 1,
  },
  {
    name: 'Pranamaya Kosha',
    subtitle: 'Energy Body',
    desc: 'Balancing vital life force through precise Pranayama techniques.',
    color: 'sage',
    borderColor: 'border-t-sage',
    textColor: 'text-sage',
    icon: 'fa-wind',
    rings: 2,
  },
  {
    name: 'Manomaya Kosha',
    subtitle: 'Mind Body',
    desc: 'Calming mental fluctuations through Pratyahara and Dharana.',
    color: 'sand',
    borderColor: 'border-t-sand',
    textColor: 'text-sand',
    icon: 'fa-brain',
    rings: 3,
  },
  {
    name: 'Vijnanamaya Kosha',
    subtitle: 'Wisdom Body',
    desc: 'Awakening intellect and intuition through deep Dhyana (Meditation).',
    color: 'goldLight',
    borderColor: 'border-t-goldLight',
    textColor: 'text-goldLight',
    icon: null,
    rings: 4,
  },
  {
    name: 'Anandamaya Kosha',
    subtitle: 'Bliss Body',
    desc: 'Realizing pure, unadulterated joy and connection to the universal self.',
    color: 'white',
    borderColor: 'border-t-white',
    textColor: 'text-white',
    icon: 'fa-star-of-life',
    rings: 0,
    glow: true,
  },
]

function KoshaRing({ rings, icon, glow }) {
  if (glow) {
    return (
      <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-white/30 flex items-center justify-center kosha-ring relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
        <i className={`fas ${icon} text-2xl text-white relative z-10`} />
      </div>
    )
  }

  const borders = ['border-gold/30', 'border-sage/30', 'border-sand/30', 'border-goldLight/30']
  const innerBorders = [
    ['border-gold/50'],
    ['border-sage/50', 'border-sage'],
    ['border-sand/50', 'border-sand/70', 'border-sand'],
    ['border-goldLight/50', 'border-goldLight/70', 'border-goldLight/90'],
  ]

  return (
    <div
      className={`w-20 h-20 mx-auto mb-6 rounded-full border ${borders[rings - 1] || 'border-white/20'} flex items-center justify-center kosha-ring relative overflow-hidden`}
    >
      {(innerBorders[rings - 1] || []).map((cls, i) => (
        <div
          key={i}
          className={`absolute rounded-full border ${cls}`}
          style={{ inset: `${(i + 1) * 8}px` }}
        />
      ))}
      {rings === 4 ? (
        <div className="absolute rounded-full bg-goldLight" style={{ inset: '32px' }} />
      ) : (
        icon && <i className={`fas ${icon} text-2xl relative z-10 text-${rings === 1 ? 'goldLight' : rings === 2 ? 'sage' : 'sand'}`} />
      )}
    </div>
  )
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-charcoal text-white relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal className="text-center mb-20">
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Ancient Science</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Yogic Science of Evolvement</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Understanding the multi-dimensional nature of human existence through the Pancha Koshas (Five Sheaths).
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {KOSHAS.map((k, i) => (
            <Reveal
              key={k.name}
              delay={i * 100}
              className={`kosha-card glass-panel-dark p-8 rounded-2xl text-center border-t-4 ${k.borderColor}`}
            >
              <KoshaRing rings={k.rings} icon={k.icon} glow={k.glow} />
              <h3 className={`font-serif text-xl mb-2 ${k.textColor}`}>{k.name}</h3>
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4">{k.subtitle}</p>
              <p className="text-white/70 text-sm font-light leading-relaxed">{k.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
