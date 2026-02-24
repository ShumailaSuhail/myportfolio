import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useTheme from "../hooks/useTheme";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Shumaila Suhail
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:opacity-70 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle (UNCHANGED) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-lg cursor-pointer"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Button (REPLACED ☰) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white dark:bg-neutral-900
        transform transition-transform duration-500 md:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-8 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
