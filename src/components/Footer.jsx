import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Shumaila Suhail</h3>
            <p className="text-sm opacity-70 mt-1">
              Frontend Developer • React & UI Engineering
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/ShumailaSuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <img src={github} alt="GitHub" className="w-10 h-10" />
            </a>
            <a
              href="https://linkedin.com/in/ShumailaSuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <img src={linkedIn} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="mailto:shumailasuhail053@gmail.com"
              className="hover:opacity-70 transition"
            >
              <img src={gmail} alt="Gmail" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm opacity-60 mt-10">
          © {new Date().getFullYear()} Shumaila Suhail. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
