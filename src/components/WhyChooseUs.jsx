import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: "fa-microscope",
    title: "Scientific Methodology",
    desc: "Practices rooted in anatomical logic and physiological safety.",
    bg: "bg-sage/20",
    text: "text-sageDark",
    hoverBg: "group-hover:bg-sage",
    hoverText: "group-hover:text-white",
  },
  {
    icon: "fa-chalkboard-user",
    title: "Experienced Mentors",
    desc: "Guided by masters with decades of dedicated teaching experience.",
    bg: "bg-sand",
    text: "text-earth",
    hoverBg: "group-hover:bg-earth",
    hoverText: "group-hover:text-sand",
  },
  {
    icon: "fa-user-doctor",
    title: "Personalized Support",
    desc: "Individual attention ensuring practices meet your specific body needs.",
    bg: "bg-gold/10",
    text: "text-gold",
    hoverBg: "group-hover:bg-gold",
    hoverText: "group-hover:text-white",
  },
  {
    icon: "fa-infinity",
    title: "Lives Transformed",
    desc: "Join thousands who have found healing and peace through our doors.",
    bg: "bg-charcoal/5",
    text: "text-charcoal",
    hoverBg: "group-hover:bg-charcoal",
    hoverText: "group-hover:text-white",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-sand relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            The VKS Experience
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(
            ({ icon, title, desc, bg, text, hoverBg, hoverText }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="p-8 bg-ivory rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center ${text} mb-6 ${hoverBg} ${hoverText} transition-colors duration-300`}
                >
                  <i className={`fas ${icon} text-xl`} />
                </div>
                <h4 className="text-xl font-serif text-charcoal mb-3">
                  {title}
                </h4>
                <p className="text-earth/70 text-sm font-light">{desc}</p>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
