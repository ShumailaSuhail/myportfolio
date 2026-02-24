import userImage from "../assets/user-image.jpeg";
import vscode from "../assets/vscode.png";
import firebase from "../assets/firebase.png";
import mongodb from "../assets/mongodb.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import supabase from "../assets/supabase.png";

import { Code2, GraduationCap, FolderKanban } from "lucide-react";

export default function About() {
  const tools = [
    { name: "VS Code", icon: vscode },
    { name: "Firebase", icon: firebase },
    { name: "MongoDB", icon: mongodb },
    { name: "Figma", icon: figma },
    { name: "GitHub", icon: github },
    { name: "Supabase", icon: supabase },
  ];

  const highlights = [
    {
      title: "Technical Stack",
      icon: <Code2 size={22} strokeWidth={1.8} />,
      description:
        "React, Tailwind, TypeScript, NestJS, modern frontend tooling.",
    },
    {
      title: "Education",
      icon: <GraduationCap size={22} strokeWidth={1.8} />,
      description:
        "BS Software Engineering — strong foundation in systems & architecture.",
    },
    {
      title: "Experience",
      icon: <FolderKanban size={22} strokeWidth={1.8} />,
      description:
        "Built scalable UI systems and product-focused web applications.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Structured creativity, product-focused thinking.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div>
            <img src={userImage} alt="Profile" className="w-80 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-10">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              I design and build frontend systems that balance visual creativity
              with strong structural architecture. My approach focuses on
              maintainability, performance, and user clarity.
            </p>

            {/* Highlights */}
            <ul className="space-y-6">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 border-l pl-6"
                >
                  <div className="mt-1 opacity-70">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">
                Tools I Use
              </p>

              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="w-12 h-12 flex items-center justify-center border rounded-lg hover:-translate-y-1 transition"
                  >
                    <img src={tool.icon} alt={tool.name} className="w-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
