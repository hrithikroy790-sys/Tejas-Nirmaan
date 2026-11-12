
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="px-5 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#69785b]">
          Project Not Found
        </p>

        <h1 className="font-display mt-5 text-4xl">
          This project doesn't exist.
        </h1>

        <Link
          to="/projects"
          className="mt-8 inline-block bg-[#30382b] px-6 py-3 text-sm text-white"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-[#e9ebe3] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="text-sm text-[#69785b] hover:underline"
          >
            ← Back to Projects
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#69785b]">
            {project.category} / Project Details
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#686b61]">
            {project.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[720px] min-h-[280px] w-full object-cover"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
              Project Overview
            </p>

            <h2 className="font-display mt-4 text-3xl sm:text-4xl">
              A closer look.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#73746c]">
              {project.overview}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/15 pt-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#92938b]">
                  Category
                </p>
                <p className="mt-2 text-sm font-medium">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#92938b]">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium">
                  {project.location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#92938b]">
                  Year
                </p>
                <p className="mt-2 text-sm font-medium">
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0e9] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Visual Gallery
          </p>

          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            Explore the details.
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <figure
                key={image}
                className="overflow-hidden bg-white"
              >
                <img
                  src={image}
                  alt={`${project.title} - gallery image ${index + 1}`}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[380px]"
                />

                <figcaption className="px-4 py-3 text-xs text-[#73746c]">
                  {project.title} / View {String(index + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {project.floorPlans.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Technical Drawings
          </p>

          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            Floor Plans
          </h2>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {project.floorPlans.map((plan, index) => (
              <figure key={plan}>
                <img
                  src={plan}
                  alt={`${project.title} floor plan ${index + 1}`}
                  loading="lazy"
                  className="w-full border border-black/10 bg-white object-contain"
                />

                <figcaption className="mt-3 text-sm text-[#73746c]">
                  Floor Plan {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="bg-[#30382b] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c3cbb7]">
              Have a project in mind?
            </p>

            <h2 className="font-display mt-4 text-3xl sm:text-4xl">
              Let's discuss your vision.
            </h2>
          </div>

          <Link
            to="/contact"
            className="w-fit bg-[#f8f7f3] px-7 py-4 text-sm text-[#30382b] hover:bg-[#e9ebe3]"
          >
            Start an Enquiry ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
