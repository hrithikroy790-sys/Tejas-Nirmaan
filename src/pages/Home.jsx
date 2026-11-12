
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Architecture",
    text: "Thoughtful spaces shaped by form, function and light.",
  },
  {
    title: "Interior Design",
    text: "Comfortable interiors with a considered sense of detail.",
  },
  {
    title: "Construction",
    text: "Bringing design concepts into reality with careful planning.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#69785b]">
            <span className="h-px w-8 bg-[#69785b]" />
            Architecture · Interiors · Construction
          </p>

          <h1 className="animate-fade-up mt-7 text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Spaces that
            <span className="font-display mt-2 block italic text-[#788568]">
              inspire living.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#73746c] sm:text-lg">
            We create thoughtful architectural spaces and interiors that
            bring together functionality, timeless design and everyday life.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-[#30382b] px-7 py-4 text-sm text-white transition hover:bg-[#59664a]"
            >
              Explore Projects ↗
            </Link>
            <Link
              to="/about"
              className="border border-black/15 px-7 py-4 text-sm transition hover:border-[#69785b]"
            >
              About Our Studio
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
            alt="Contemporary residential architecture"
            fetchPriority="high"
            className="h-[400px] w-full object-cover sm:h-[540px]"
          />
          <div className="absolute bottom-5 left-5 bg-[#f8f7f3] p-5 sm:bottom-8 sm:left-8">
            <p className="text-xs uppercase tracking-widest text-[#69785b]">
              Our philosophy
            </p>
            <p className="font-display mt-2 text-xl italic">
              Designed with purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9ebe3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69785b]">
            What We Do
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            Design with intention.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <article key={item.title} className="border-t border-black/15 pt-5">
                <p className="text-sm text-[#69785b]">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#73746c]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#69785b]">
            Have a project in mind?
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Let's create something meaningful.
          </h2>
        </div>
        <Link
          to="/contact"
          className="w-fit bg-[#30382b] px-7 py-4 text-sm text-white hover:bg-[#59664a]"
        >
          Contact Our Studio ↗
        </Link>
      </section>
    </main>
  );
}
