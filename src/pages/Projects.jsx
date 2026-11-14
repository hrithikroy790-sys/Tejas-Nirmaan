
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const filters = [
  "All",
  "Architecture",
  "Interior",
  "Construction",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main>
      <section className="bg-[#e9ebe3] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Tejas nirmaan / Portfolio
          </p>

          <h1 className="font-display mt-5 text-5xl sm:text-7xl">
            Selected Projects.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#686b61]">
            Explore our architectural designs, interiors and
            construction-related work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`border px-5 py-3 text-sm transition ${
                activeFilter === filter
                  ? "border-[#30382b] bg-[#30382b] text-white"
                  : "border-black/15 hover:border-[#69785b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69785b]"
            >
              <div className="overflow-hidden bg-[#e9ebe3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[340px]"
                />
              </div>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <h2 className="text-lg font-semibold transition group-hover:text-[#69785b]">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#73746c]">
                    {project.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs uppercase tracking-wide text-[#69785b]">
                  {project.category}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                <span className="text-xs text-[#92938b]">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm transition-transform group-hover:translate-x-1">
                  View Project ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
