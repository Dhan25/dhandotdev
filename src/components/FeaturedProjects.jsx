import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import uberCLone from "../assets/UberClone-bg.png";
import disneyClone from "../assets/disney-clone.png";
import weatherApp from "../assets/weather-app.png";

const projects = [
  {
    title: "Uber Technologies",
    description: "A responsive Uber clone built with React.js and Tailwind CSS.",
    image: uberCLone,
    tech: ["React", "TailwindCSS", "Vite", "React Router"],
    live: "https://uber-technologies-clone.vercel.app/",
    github: "http://github.com/Dhan25/uber-technologies-clone",
  },
  {
    title: "Disney+ Clone",
    description: "A Disney+ clone built with React.js and Tailwind CSS.",
    image: disneyClone,
    tech: ["React", "Tailwind CSS", "Vite", "TMDB API"],
    live: "https://disney-clone-1gqr.vercel.app/",
    github: "https://github.com/Dhan25/Disney-Clone",
  },
  {
    title: "Weather app",
    description:
      "A responsive weather application built with React and Tailwind CSS.",
    image: weatherApp,
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://weather-app-one-eta-82.vercel.app/",
    github: "https://github.com/Dhan25/weather-app",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative w-full px-3 overflow-hidden">
      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              group rounded-2xl
              bg-gradient-to-br from-slate-900 via-slate-950 to-black
              border border-white/10
              shadow-xl shadow-black/40
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-secondary/30"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tech */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      px-3 py-1
                      text-[10px]
                      sm:text-xs
                      lg:text-[11px]
                      xl:text-xs
                      font-medium
                      border border-slate-300 dark:border-white/10
                      bg-slate-100 dark:bg-white/5
                      text-slate-700 dark:text-slate-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="
                  font-semibold
                  text-base
                  sm:text-lg
                  lg:text-xl
                  xl:text-2xl
                  text-slate-100
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  text-sm
                  sm:text-base
                  lg:text-sm
                  xl:text-base
                  leading-relaxed
                  text-slate-600 dark:text-slate-400
                "
              >
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-6 flex gap-5 text-xl text-slate-400">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-lg
                      sm:text-xl
                      lg:text-lg
                      xl:text-xl
                      text-slate-500 dark:text-slate-400
                      transition-colors duration-300
                      hover:text-secondary
                    "
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-lg
                      sm:text-xl
                      lg:text-lg
                      xl:text-xl
                      text-slate-500 dark:text-slate-400
                      transition-colors duration-300
                      hover:text-secondary
                    "
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
