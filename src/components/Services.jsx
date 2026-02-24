import { Globe, Smartphone, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Globe size={28} strokeWidth={1.8} />,
      description:
        "Currently working as a Junior Software Engineer, developing scalable MERN-based applications with React, Express, NestJS, MongoDB, and Supabase. Focused on structured architecture, responsive UI systems, and production-ready frontend development.",
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
    <section id="services" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Services
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            I focus on building structured, scalable, and performance-driven
            digital products that solve real-world problems.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured Card */}
          <div className="lg:col-span-2 border rounded-2xl p-10 hover:shadow-xl transition-all duration-300">
            <div className="mb-6 opacity-80">{services[0].icon}</div>

            <h3 className="text-2xl font-semibold mb-6">{services[0].title}</h3>

            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
              {services[0].description}
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-neutral-700 mb-8" />

            {/* Capability List */}
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <li>• React, Tailwind, TypeScript</li>
              <li>• Express & NestJS APIs</li>
              <li>• MongoDB & Supabase</li>
              <li>• Responsive UI Systems</li>
              <li>• Clean Architecture</li>
              <li>• Production Deployment</li>
            </ul>
          </div>

          {/* Secondary Services */}
          <div className="flex flex-col gap-8">
            {services.slice(1).map((service) => (
              <div
                key={service.title}
                className="border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 opacity-80">{service.icon}</div>

                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
