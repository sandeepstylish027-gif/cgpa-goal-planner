import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">

            <FaGraduationCap className="text-white text-2xl" />

          </div>

          <h1 className="text-3xl font-bold text-white">

            CGPA <span className="text-blue-400">Goal Planner</span>

          </h1>

        </Link>

        {/* Navigation */}

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

          <button className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition">

            Resources

            <FiChevronDown />

          </button>

        </nav>

        {/* Button */}

        <Link
          to="/planner"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-xl"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}

export default Navbar;