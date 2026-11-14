
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#30382b] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <Link to="/" className="text-xl font-bold tracking-[0.16em]">
              Tejas Nirmaan
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Thoughtful architecture, considered interiors, and spaces
              designed around the way people live.
            </p>
          </div>

          <div className="sm:justify-self-end">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-[#c3cbb7]">Home</Link>
              <Link to="/about" className="hover:text-[#c3cbb7]">About</Link>
              <Link to="/projects" className="hover:text-[#c3cbb7]">Projects</Link>
              <Link to="/contact" className="hover:text-[#c3cbb7]">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Tejas Nirmaan</p>
          <Link to="/" className="hover:text-white">Back to Home ↑</Link>
        </div>
      </div>
    </footer>
  );
}
