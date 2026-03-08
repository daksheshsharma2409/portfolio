import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  Code2,
} from "lucide-react";
import leetcode from "../assets/images/leetcode.png";
import codeforces from "../assets/images/codeforces.png";

const socialLinks = [
  {
    href: "https://github.com/daksheshsharma2409/",
    icon: <Github size={20} />,
    label: "GitHub",
    handle: "@daksheshsharma2409",
  },
  {
    href: "https://www.linkedin.com/in/dakshesh-sharma-825378291/",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    handle: "Dakshesh Sharma",
  },
  {
    href: "https://www.instagram.com/_dakshesh_sharma/",
    icon: <Instagram size={20} />,
    label: "Instagram",
    handle: "@_dakshesh_sharma",
  },
  {
    href: "https://leetcode.com/u/daksheshsharma2007/",
    icon: (
      <img
        src={leetcode}
        className="w-5 h-5 object-contain"
        alt="LeetCode"
      />
    ),
    label: "LeetCode",
    handle: "daksheshsharma2007",
  },
  {
    href: "https://codeforces.com/profile/daksheshsharma2007",
    icon: (
      <img
        src={codeforces}
        className="w-5 h-5 object-contain"
        alt="Codeforces"
      />
    ),
    label: "Codeforces",
    handle: "daksheshsharma2007",
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose a mailto link with prefilled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:daksheshsharma2007@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      className="w-full min-h-screen py-28 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-start"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 100%, #f59e0b10 0%, transparent 60%), #080b16",
      }}
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-number">04. Contact</span>
          <h2 className="section-title mx-auto">
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto mt-4 text-base leading-relaxed">
            Whether you&apos;re interested in collaborating on a project,
            discussing a role, or just want to say hello — my inbox is always
            open.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact Form */}
          <div className="card flex-1 p-8 md:p-10">
            <h3 className="text-[#f3f4f6] font-bold text-lg mb-6 flex items-center gap-2">
              <Send size={18} className="text-[#f59e0b]" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
                <CheckCircle size={48} className="text-[#f59e0b]" />
                <p className="text-[#f3f4f6] font-semibold text-lg">
                  Message composed!
                </p>
                <p className="text-[#64748b] text-sm">
                  Your email client should have opened. Thanks for reaching out!
                </p>
                <button
                  className="btn-ghost text-sm mt-2"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-xs uppercase tracking-wider font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Dakshesh Sharma"
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-[#1a2235] border border-[#2a3550] rounded-xl px-4 py-3 text-[#f3f4f6] text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b40] focus:ring-1 focus:ring-[#f59e0b20] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#64748b] text-xs uppercase tracking-wider font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-[#1a2235] border border-[#2a3550] rounded-xl px-4 py-3 text-[#f3f4f6] text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b40] focus:ring-1 focus:ring-[#f59e0b20] transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#64748b] text-xs uppercase tracking-wider font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-[#1a2235] border border-[#2a3550] rounded-xl px-4 py-3 text-[#f3f4f6] text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b40] focus:ring-1 focus:ring-[#f59e0b20] transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Socials */}
          <div className="flex flex-col gap-6 lg:w-[360px]">
            {/* Direct Email */}
            <div className="card p-7">
              <h3 className="text-[#f3f4f6] font-bold text-base mb-1 flex items-center gap-2">
                <Mail size={17} className="text-[#f59e0b]" />
                Direct Email
              </h3>
              <p className="text-[#64748b] text-sm mb-5">
                Prefer email? Drop me a line directly.
              </p>
              <a
                href="mailto:daksheshsharma2007@gmail.com"
                className="btn-primary w-full justify-center"
              >
                <Mail size={16} />
                daksheshsharma2007@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="card p-7 flex-1">
              <h3 className="text-[#f3f4f6] font-bold text-base mb-5 flex items-center gap-2">
                <Code2 size={17} className="text-[#f59e0b]" />
                Find me online
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ href, icon, label, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-[#94a3b8] text-sm px-4 py-3 rounded-xl border border-[#2a3550] transition-all duration-200 hover:text-[#f59e0b] hover:border-[#f59e0b30] hover:bg-[#f59e0b08] group"
                  >
                    <span className="text-[#4b5563] group-hover:text-[#f59e0b] transition-colors">
                      {icon}
                    </span>
                    <div>
                      <p className="font-semibold text-xs text-[#f3f4f6] group-hover:text-[#f59e0b] transition-colors">
                        {label}
                      </p>
                      <p className="text-[#4b5563] text-[11px]">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#1a2235] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#2a3550] text-sm font-medium">
            © {new Date().getFullYear()} Dakshesh Sharma. Built with React &amp; ☕
          </p>
          <p className="text-[#2a3550] text-xs">
            Designed &amp; developed with ♥
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
