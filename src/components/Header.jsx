import profileImg from "../assets/profile-img.jpeg";
import { ArrowRight, Download } from "lucide-react";
import handIcon from "../assets/hand-icon.png";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profileImg} alt="Profile" className="rounded-full w-32" />

      <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Shumaila Suhail
        <img src={handIcon} alt="Hand Icon" className="w-6 h-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer based in Pakistan.
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from Pakistan, with experience in building
        responsive and user-friendly websites.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me
          <ArrowRight size={16} strokeWidth={2} />
        </a>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          my resume
          <Download size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
