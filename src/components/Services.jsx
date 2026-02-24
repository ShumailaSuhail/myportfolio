import { Globe, Smartphone, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Globe size={28} strokeWidth={1.8} />,
      description:
        "Building scalable, performance-focused web applications with modern frontend architecture.",
    },
    {
      title: "Mobile Interfaces",
      icon: <Smartphone size={28} strokeWidth={1.8} />,
      description:
        "Designing responsive, mobile-first experiences that feel natural across devices.",
    },
    {
      title: "Creative Assets",
      icon: <Palette size={28} strokeWidth={1.8} />,
      description:
        "Designing visual assets that align with product identity and brand direction.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-18">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest opacity-60">
            What I Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-3">Services</h2>
          <p className="max-w-2xl mx-auto mt-6 text-base leading-relaxed opacity-70">
            I focus on building structured, scalable, and performance-driven
            digital products that solve real-world problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 opacity-80">{service.icon}</div>

              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

              <p className="text-sm leading-relaxed opacity-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
