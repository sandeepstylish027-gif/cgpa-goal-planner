import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* Top */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">

                <FaGraduationCap className="text-white text-xl sm:text-2xl" />

              </div>

              <div>

                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  CGPA Goal Planner
                </h2>

                <p className="text-blue-400 text-sm">
                  Built for VIT-AP Students
                </p>

              </div>

            </div>

            <p className="mt-6 text-sm sm:text-base text-gray-400 leading-7">
              Helping students plan smarter, predict their CGPA,
              and graduate with confidence through intelligent
              academic planning.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/sandeepstylish027-gif"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-naik-b6256038b"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sandeepnaikbukke499@gmail.com"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm sm:text-base">

              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                to="/planner"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Planner
              </Link>

              <a
                href="#features"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Features
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                About
              </a>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-sm sm:text-base">

              <p className="text-gray-400 hover:text-blue-400 cursor-pointer transition">
                Goal Prediction
              </p>

              <p className="text-gray-400 hover:text-blue-400 cursor-pointer transition">
                Semester Planner
              </p>

              <p className="text-gray-400 hover:text-blue-400 cursor-pointer transition">
                Grade Recommendation
              </p>

              <p className="text-gray-400 hover:text-blue-400 cursor-pointer transition">
                Progress Analytics
              </p>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <div className="space-y-4 text-sm sm:text-base">

              <a
                href="https://github.com/sandeepstylish027-gif"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-naik-b6256038b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="mailto:sandeepnaikbukke499@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
              >
                <FaEnvelope />
                Email
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-14 lg:mt-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <p className="text-sm text-gray-500">
            © 2026 CGPA Goal Planner. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500">

            Made with

            <FaHeart className="text-red-500" />

            by

            <span className="font-semibold text-white">
              Bukke Sandeep Naik
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;