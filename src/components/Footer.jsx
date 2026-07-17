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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Top */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">

                <FaGraduationCap className="text-white text-2xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">

                  CGPA Goal Planner

                </h2>

                <p className="text-blue-400 text-sm">

                  Built for VIT-AP Students

                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-8">

              Helping students plan smarter,
              predict their CGPA,
              and graduate with confidence
              through intelligent academic planning.

            </p>

            {/* Social Icons */}

            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/sandeepstylish027-gif"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-naik-b6256038b"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link to="/" className="hover:text-blue-400 duration-300">

                Home

              </Link>

              <Link to="/planner" className="hover:text-blue-400 duration-300">

                Planner

              </Link>

              <a href="#features" className="hover:text-blue-400 duration-300">

                Features

              </a>

              <a href="#about" className="hover:text-blue-400 duration-300">

                About

              </a>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Resources

            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p className="hover:text-blue-400 cursor-pointer duration-300">

                Goal Prediction

              </p>

              <p className="hover:text-blue-400 cursor-pointer duration-300">

                Semester Planner

              </p>

              <p className="hover:text-blue-400 cursor-pointer duration-300">

                Grade Recommendation

              </p>

              <p className="hover:text-blue-400 cursor-pointer duration-300">

                Progress Analytics

              </p>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Connect With Me

            </h3>

            <div className="space-y-5">

              <a
                href="https://github.com/sandeepstylish027-gif"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 duration-300"
              >

                <FaGithub />

                GitHub

              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-naik-b6256038b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 duration-300"
              >

                <FaLinkedin />

                LinkedIn

              </a>

              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 duration-300"
              >

                <FaEnvelope />

                Email

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8">

          <p className="text-gray-500 text-center lg:text-left">

            © 2026 CGPA Goal Planner. All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-gray-500">

            Made with

            <FaHeart className="text-red-500" />

            by

            <span className="text-white font-semibold">

              Bukke Sandeep Naik

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;