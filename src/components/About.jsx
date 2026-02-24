import userImage from "../assets/user-image.jpeg";
import circularText from "../assets/circular-text.png";
import devIcon from "../assets/dev-icon.png";
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
      title: "Languages",
      icon: <Code2 size={24} strokeWidth={1.8} />,
      description: "HTML, CSS, JavaScript, Reactjs, Nestjs",
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} strokeWidth={1.8} />,
      description: "BS Software Engineering from Air University",
    },
    {
      title: "Projects",
      icon: <FolderKanban size={24} strokeWidth={1.8} />,
      description: "Built some cool projects, check out my work section!",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Introduction
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-3">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="relative">
            <img
              src={userImage}
              alt="Profile"
              className="w-72 sm:w-80 rounded-3xl"
            />

            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/3 bg-white dark:bg-neutral-900 rounded-full w-40 h-40 flex items-center justify-center shadow-xl">
              <img
                src={circularText}
                alt=""
                className="absolute w-full animate-spin_slow"
              />
              <img src={devIcon} alt="Developer Icon" className="w-12" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 max-w-2xl">
            <p className="text-base leading-relaxed opacity-80 mb-12">
              I’m a full stack web developer focused on building clean,
              scalable, and high-performance web applications. I care deeply
              about structure, performance, and thoughtful design systems.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-3 gap-6 mb-12">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="border rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-4 opacity-80">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
              Tools I Use
            </p>

            <ul className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="w-14 h-14 flex items-center justify-center border rounded-lg hover:-translate-y-1 transition-transform duration-300"
                >
                  <img src={tool.icon} alt={tool.name} className="w-6" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
