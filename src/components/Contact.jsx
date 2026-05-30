import { useState } from "react";
import Reveal from "./Reveal";
import CustomDropdown from "./CustomDropdown";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", interest: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-sand overflow-hidden text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact.jpg"
          className="w-full h-full object-cover "
          alt="Incense smoke"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand/80 via-sand/60 to-sand/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <Reveal>
            <h2 className="text-4xl text-charcoal md:text-6xl font-serif mb-8">
              Begin Your
              <br />
              Journey Inward
            </h2>
            <p className="text-earth/70 mb-12 font-light text-lg max-w-md">
              Reach out to schedule a consultation, inquire about our courses,
              or simply say namaste.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: "fa-location-dot",
                  title: "Visit Us",
                  content: (
                    <p className="text-earth/70 font-light">
                      Dr. VKS Yoga &amp; Wellness Home
                      <br />
                      Kannur – 670663
                      <br />
                      Kerala, India
                    </p>
                  ),
                },
                {
                  icon: "fa-phone",
                  title: "Call Us",
                  content: (
                    <a
                      href="tel:+919746121075"
                      className="text-earth/70 font-light hover:text-earth transition-colors"
                    >
                      +91 9746121075
                    </a>
                  ),
                },
                {
                  icon: "fa-envelope",
                  title: "Email Us",
                  content: (
                    <a
                      href="mailto:chakiyarkandy@gmail.com"
                      className="text-earth/70 font-light hover:text-earth transition-colors"
                    >
                      chakiyarkandy@gmail.com
                    </a>
                  ),
                },
              ].map(({ icon, title, content }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 text-earth rounded-full border border-earth/20 flex items-center justify-center shrink-0 group-hover:bg-earth group-hover:text-sand transition-colors">
                    <i className={`fas ${icon}`} />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg mb-1 text-gold">
                      {title}
                    </h5>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={200}
            className="glass-panel-dark p-8 md:p-12 rounded-[40px]"
          >
            <h3 className="text-2xl font-serif mb-6">Request a Callback</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <i className="fas fa-check-circle text-4xl text-gold mb-4" />
                <p className="text-lg font-serif text-goldLight">Thank you!</p>
                <p className="text-earth/70 text-sm mt-2">
                  We will contact you shortly. Namaste 🙏
                </p>
                <button
                  className="mt-6 text-sm text-earth/50 hover:text-earth underline transition-colors"
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
                  />
                </div>
                <div>
                  <CustomDropdown
                    value={form.interest}
                    onChange={(value) => setForm({ ...form, interest: value })}
                    placeholder="Interested In…"
                    options={[
                      { value: "consultation", label: "Wellness Consultation" },
                      {
                        value: "junior_course",
                        label: "Junior Hata Yoga Course",
                      },
                      { value: "advanced_course", label: "Advanced Training" },
                      { value: "therapy", label: "Yoga Therapy" },
                    ]}
                  />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gold text-white rounded-full font-medium hover:bg-goldLight hover:text-charcoal transition-colors text-center shadow-lg shadow-gold/20"
                  >
                    Book a Consultation
                  </button>
                  <a
                    href="#courses"
                    className="flex-1 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white hover:text-charcoal transition-colors text-center"
                  >
                    Join a Course
                  </a>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
