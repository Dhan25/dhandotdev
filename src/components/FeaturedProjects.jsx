// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import uberCLone from "../assets/UberClone-bg.png";
import disneyClone from "../assets/disney-clone.png";

const projects = [
  {
    title: "SaaS Landing Page",
    description:
      "A beautiful landing page app using React and Tailwind.",
    image: uberCLone,
    tech: ["React", "TailwindCSS", "Supabase"],
    live: "#",
    github: "#",
  },
  {
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: disneyClone,
    tech: ["TypeScript", "D3.js", "Next.js"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: disneyClone,
    tech: ["React", "Node.js", "Stripe"],
    live: "#",
    github: "#",
  },
];

const FeaturedProjects = () => {
  return (
    // <section className="relative w-full px-3 overflow-hidden">

    //   {/* Cards */}
    //   <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //     {projects.map((project) => (
    //       <article
    //         key={project.title}
    //         className="
    //           group rounded-2xl bg-gray-100 dark:bg-black
    //           border border-white/5
    //           shadow-lg
    //           transition-all duration-500
    //           hover:-translate-y-3 hover:shadow-secondary/20
    //         "
    //       >
    //         {/* Image */}
    //         <div className="h-48 overflow-hidden rounded-t-2xl">
    //           <img
    //             src={project.image}
    //             alt={project.title}
    //             loading="lazy"
    //             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //           />
    //         </div>

    //         {/* Content */}
    //         <div className="p-6">
    //           {/* Tech */}
    //           <div className="mb-4 flex flex-wrap gap-2">
    //             {project.tech.map((item) => (
    //               <span
    //                 key={item}
    //                 className="
    //                   rounded-full border border-white/10
    //                   bg-white/5 px-3 py-1
    //                   text-xs font-medium text-slate-300
    //                 "
    //               >
    //                 {item}
    //               </span>
    //             ))}
    //           </div>

    //           {/* Title */}
    //           <h3 className="text-xl font-semibold text-white">
    //             {project.title}
    //           </h3>

    //           {/* Description */}
    //           <p className="mt-2 text-slate-400 text-sm leading-relaxed">
    //             {project.description}
    //           </p>

    //           {/* Links */}
    //           <div className="mt-6 flex gap-5 text-xl text-slate-400">
    //             <a
    //               href={project.live}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="hover:text-secondary transition-colors"
    //             >
    //               <FaExternalLinkAlt />
    //             </a>

    //             <a
    //               href={project.github}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="hover:text-secondary transition-colors"
    //             >
    //               <FaGithub />
    //             </a>
    //           </div>
    //         </div>
    //       </article>
    //     ))}
    //   </div>
    // </section>
    <div></div>
  );
};

export default FeaturedProjects;
