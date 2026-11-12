import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f7f3]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="Archastu Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </NavLink>

        <button
          type="button"
          className="border border-black/15 px-4 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-6 border-b border-black/10 bg-[#f8f7f3] px-6 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-[#69785b]"
                    : "text-[#62645c] hover:text-[#69785b]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#30382b] px-5 py-3 text-center text-sm text-white transition hover:bg-[#59664a]"
          >
            Let's Talk ↗
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
