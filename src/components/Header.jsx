import profileImg from "../assets/profile-img.jpeg";
import { ArrowRight, Download } from "lucide-react";

export default function Header() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 mt-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile */}
        <img
          src={profileImg}
          alt="Shumaila Suhail"
          className="w-28 sm:w-32 rounded-full mx-auto mb-6"
        />

        {/* Small Intro Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4">
          Frontend Engineer
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold leading-tight tracking-tight mb-6">
          Designing structured,
          <br className="hidden sm:block" />
          scalable web experiences.
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10">
          I build thoughtful, performance-focused interfaces with clean
          architecture and modern frontend tooling.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 hover:opacity-90 transition"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>

          <a
            href="/Shumaila Suhail-Software Engineer.docx .pdf"
            download
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2"
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
