import { useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest opacity-50">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-3">
            Let’s Work Together
          </h2>
          <p className="mt-6 opacity-70 max-w-2xl mx-auto">
            If you’re building something ambitious and need a structured
            frontend engineer, I’d love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-md space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Reach Me Directly</h3>
              <p className="opacity-60 text-sm">
                Available for freelance, collaboration, and full-time roles.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com/ShumailaSuhail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border rounded-lg px-5 py-4 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} />
                  <span>GitHub</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ShumailaSuhail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border rounded-lg px-5 py-4 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </div>
              </a>

              <a
                href="mailto:shumailasuhail053@gmail.com"
                className="flex items-center justify-between border rounded-lg px-5 py-4 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>shumailasuhail053@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="max-w-lg w-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-10 rounded-2xl border bg-white dark:bg-neutral-900"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border rounded-lg px-4 py-3 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Professional Email"
                  required
                  className="border rounded-lg px-4 py-3 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full border rounded-lg px-4 py-3 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full cursor-pointer py-3 font-medium transition bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white hover:opacity-90"
              >
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
