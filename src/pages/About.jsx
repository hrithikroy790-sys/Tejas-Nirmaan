
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Architectural planning, design development and project documentation.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Thoughtful interior spaces shaped around function, material and detail.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Construction and turnkey project services from design through execution.",
  },
  {
    number: "04",
    title: "Landscape Design",
    description:
      "Landscape planning that connects buildings with their surroundings.",
  },
];

export default function About() {
  return (
    <main>
      <section className="bg-[#e9ebe3] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Archastu Design Studio / About Us
          </p>

          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-tight sm:text-7xl">
            Design, planning and spaces made meaningful.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#686b61] sm:text-lg">
            A multidisciplinary design consultancy based in Patna,
            Bihar, bringing architecture, interiors and construction
            together.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Our Studio
          </p>

          <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
            A collaborative approach to design.
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-[#686b61] sm:text-base">
            <p>
              Archastu Design Studio is a multidisciplinary design
              consultancy founded in 2017 by Ar. Vivek Kumar Saha.
              Based in Patna, Bihar, the studio works across
              architectural design, interior design, planning and
              turnkey projects.
            </p>

            <p>
              The studio's design language draws inspiration from
              natural materials such as exposed brick, concrete and
              terracotta. Its approach combines creative exploration
              with practical utility.
            </p>

            <p>
              The portfolio describes a collaborative team of
              architects, interior designers, civil engineers,
              visual artists and landscape designers.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary residential design"
            className="h-[350px] w-full object-cover sm:h-[520px]"
            loading="lazy"
          />

          <div className="mt-5 flex items-center justify-between border-b border-black/15 pb-4">
            <p className="text-sm text-[#73746c]">
              Based in Patna, Bihar
            </p>
            <p className="text-sm font-semibold text-[#69785b]">
              Est. 2017
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#30382b] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c3cbb7]">
            What We Do
          </p>

          <h2 className="font-display mt-5 max-w-2xl text-4xl sm:text-5xl">
            From the first idea to the finished space.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="border-t border-white/20 pt-5"
              >
                <p className="text-sm text-[#c3cbb7]">
                  {service.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Explore Our Work
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Discover the portfolio.
          </h2>
        </div>

        <Link
          to="/projects"
          className="w-fit bg-[#30382b] px-7 py-4 text-sm text-white hover:bg-[#59664a]"
        >
          View Projects ↗
        </Link>
      </section>
    </main>
  );
}
