import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">

            <FaGraduationCap className="text-white text-xl lg:text-2xl" />

          </div>

          <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-white">

            CGPA <span className="text-blue-400">Goal Planner</span>

          </h1>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <Link
            to="/"
            className={`transition ${
              location.pathname === "/"
                ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/planner"
            className={`transition ${
              location.pathname.startsWith("/planner")
                ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Planner
          </Link>

          <a
            href="#features"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>

        </nav>

        {/* Desktop Button */}

        <Link
          to="/planner"
          className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-xl"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          <nav className="flex flex-col p-6 space-y-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/planner"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Planner
            </Link>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Features
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              About
            </a>

            <Link
              to="/planner"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl text-center font-semibold"
            >
              Get Started
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}

export default Navbar;