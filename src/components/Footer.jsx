import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGraduationCap,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

                <FaGraduationCap className="text-white text-xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">

                  CGPA Planner

                </h2>

                <p className="text-blue-400">

                  Goal Planner

                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mt-6">

              The smart planner that helps students calculate,
              predict and achieve their dream CGPA.

            </p>

            <div className="flex gap-4 mt-8">

              <Social><FaFacebookF /></Social>
              <Social><FaTwitter /></Social>
              <Social><FaInstagram /></Social>
              <Social><FaLinkedinIn /></Social>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <Links title="Home" />
            <Links title="Planner" />
            <Links title="Features" />
            <Links title="About" />
            <Links title="Resources" />

          </div>

          {/* Support */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Support
            </h3>

            <Links title="Help Center" />
            <Links title="Contact Us" />
            <Links title="Privacy Policy" />
            <Links title="Terms of Service" />
            <Links title="FAQ" />

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Stay Connected
            </h3>

            <p className="text-gray-400 mb-6">

              Subscribe to receive updates and academic tips.

            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-l-xl px-4 py-3 text-white outline-none"
              />

              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 rounded-r-xl text-white font-semibold">

                →

              </button>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>

            © 2026 CGPA Goal Planner. All rights reserved.

          </p>

          <p>

            Made with ❤️ for students.

          </p>

        </div>

      </div>

    </footer>
  );
}

function Links({ title }) {
  return (
    <p className="text-gray-400 hover:text-blue-400 cursor-pointer mb-4 transition">
      {title}
    </p>
  );
}

function Social({ children }) {
  return (
    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-500 transition cursor-pointer">
      {children}
    </div>
  );
}

export default Footer;