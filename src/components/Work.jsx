import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";

import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "Frontend Architecture",
      image: work1,
      category: "React + Tailwind",
    },
    {
      title: "Geo-based Application",
      image: work2,
      category: "Mobile UI",
    },
    {
      title: "Photography Platform",
      image: work3,
      category: "Web Experience",
    },
    {
      title: "Design System Project",
      image: work4,
      category: "UI Engineering",
    },
  ];

  return (
    <section id="work" className="scroll-mt-24 py-18">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-3">
            Selected Work
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-base opacity-70">
            A curated collection of projects demonstrating structured frontend
            engineering and product-focused design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.category}</p>
                </div>

                <ArrowUpRight size={20} strokeWidth={1.8} />
              </div>
            </div>
          ))}
        </div>
        {/* 
        
        <div className="flex justify-center mt-20">
          <button className="flex items-center gap-2 rounded-full border px-8 py-3 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            View More Projects
            <ArrowRight size={18} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
