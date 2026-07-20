import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">

            <FaGraduationCap className="text-white text-lg sm:text-xl lg:text-2xl" />

          </div>

          <h1 className="font-bold text-white leading-tight text-base sm:text-xl lg:text-3xl">
            CGPA{" "}
            <span className="text-blue-400">
              Goal Planner
            </span>
          </h1>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <Link
            to="/"
            className={`transition-all duration-300 ${
              location.pathname === "/"
                ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/planner"
            className={`transition-all duration-300 ${
              location.pathname.startsWith("/planner")
                ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Planner
          </Link>

          <a
            href="#features"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            About
          </a>

        </nav>

        {/* Desktop Button */}

        <Link
          to="/planner"
          className="hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition-all duration-300"
        >
          {menuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-800 bg-slate-900">

          <nav className="flex flex-col p-5">

            <Link
              to="/"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg transition ${
                location.pathname === "/"
                  ? "bg-slate-800 text-blue-400"
                  : "text-gray-300 hover:bg-slate-800 hover:text-blue-400"
              }`}
            >
              Home
            </Link>

            <Link
              to="/planner"
              onClick={closeMenu}
              className={`mt-2 px-4 py-3 rounded-lg transition ${
                location.pathname.startsWith("/planner")
                  ? "bg-slate-800 text-blue-400"
                  : "text-gray-300 hover:bg-slate-800 hover:text-blue-400"
              }`}
            >
              Planner
            </Link>

            <a
              href="#features"
              onClick={closeMenu}
              className="mt-2 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition"
            >
              Features
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="mt-2 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition"
            >
              About
            </a>

            <Link
              to="/planner"
              onClick={closeMenu}
              className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl text-center font-semibold text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Get Started
            </Link>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Navbar;