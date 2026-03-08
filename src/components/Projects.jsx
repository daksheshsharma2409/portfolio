import React from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Bridgr",
    description:
      "A full-stack campus peer-to-peer collaboration platform. Features Google OAuth via Supabase, real-time messaging, skill matching, a karma system, and a kanban-style task board.",
    tags: ["React", "Supabase", "TailwindCSS", "PostgreSQL", "Vite"],
    github: "https://github.com/daksheshsharma2409/",
    live: null,
    featured: true,
  },
  {
    number: "02",
    title: "AI Voice Engine",
    description:
      "A custom Python-based TTS voice engine integrated with real-time computer vision using OpenCV. Converts user gestures and screen inputs into synthesized voice output.",
    tags: ["Python", "OpenCV", "TTS", "Computer Vision"],
    github: "https://github.com/daksheshsharma2409/",
    live: null,
    featured: false,
  },
  {
    number: "03",
    title: "Data Analytics Dashboard",
    description:
      "An interactive web dashboard built with Django and Matplotlib. Pulls raw CSV datasets, processes them with Pandas, and visualizes trends through dynamic charts and tables.",
    tags: ["Django", "Pandas", "Matplotlib", "Python", "Bootstrap"],
    github: "https://github.com/daksheshsharma2409/",
    live: null,
    featured: false,
  },
  {
    number: "04",
    title: "This Portfolio",
    description:
      "A personal developer portfolio built from scratch with React + Vite. Features smooth scroll navigation, typewriter effect, dark theme with amber accents, and fully responsive design.",
    tags: ["React", "Vite", "TailwindCSS", "Lucide"],
    github: "https://github.com/daksheshsharma2409/portfolio",
    live: null,
    featured: false,
  },
];

const ProjectCard = ({ project }) => (
  <div
    className={`card p-7 flex flex-col gap-5 group ${
      project.featured ? "lg:col-span-2 bg-[#111827]" : "bg-[#111827]"
    }`}
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="font-hero text-5xl text-[#1a2235] leading-none select-none">
        {project.number}
      </span>
      <div className="flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#4b5563] p-2 rounded-lg border border-[#2a3550] transition-all duration-200 hover:text-[#f59e0b] hover:border-[#f59e0b40] hover:bg-[#f59e0b08]"
            title="GitHub"
          >
            <Github size={16} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-[#4b5563] p-2 rounded-lg border border-[#2a3550] transition-all duration-200 hover:text-[#f59e0b] hover:border-[#f59e0b40] hover:bg-[#f59e0b08]"
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>

    {/* Title */}
    <div>
      <h3 className="font-hero text-2xl text-[#f3f4f6] group-hover:text-[#f59e0b] transition-colors duration-300 flex items-center gap-2">
        {project.title}
        {project.featured && (
          <span className="text-[10px] text-[#f59e0b] bg-[#f59e0b18] border border-[#f59e0b30] rounded-full px-2.5 py-0.5 font-sans font-bold tracking-wider uppercase align-middle">
            Featured
          </span>
        )}
      </h3>
      <p className="text-[#64748b] text-sm leading-relaxed mt-2">
        {project.description}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag) => (
        <span key={tag} className="tech-pill">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      className="w-full min-h-screen py-28 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-start"
      style={{ background: "#0a0d1a" }}
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-number">03. Projects</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-title">
              Things I&apos;ve
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Built
              </span>
            </h2>
            <a
              href="https://github.com/daksheshsharma2409/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#94a3b8] text-sm font-medium hover:text-[#f59e0b] transition-colors group"
            >
              View all on GitHub
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
