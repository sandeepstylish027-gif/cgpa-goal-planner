const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="text-blue-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
            ABOUT
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            About VIT AP Grade Recommender
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-slate-400">
            VIT AP Grade Recommender is an academic planning tool
            designed specifically for VIT-AP students. It helps
            students calculate the SGPA required to achieve their
            target CGPA while providing intelligent grade
            recommendations based on semester credits.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-14 sm:mt-16">

          {/* Why */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/60 hover:-translate-y-1">

            <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
              Why this project?
            </h3>

            <p className="mt-5 text-sm sm:text-base leading-7 text-slate-300">
              Many students know their current CGPA but struggle to
              understand what SGPA they need in upcoming semesters.
              This planner removes the guesswork by generating a
              realistic academic roadmap with personalized grade
              recommendations.
            </p>

          </div>

          {/* Features */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/60 hover:-translate-y-1">

            <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
              Core Features
            </h3>

            <ul className="mt-5 space-y-3 text-sm sm:text-base text-slate-300">

              <li>🎯 Target CGPA Planning</li>

              <li>📈 Required SGPA Calculator</li>

              <li>📚 Intelligent Grade Recommendations</li>

              <li>⚡ Instant Results</li>

              <li>📱 Fully Responsive Design</li>

              <li>🚀 Built Specifically for VIT-AP Students</li>

            </ul>

          </div>

        </div>

        {/* Developer */}

        <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Developed by
          </h3>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-blue-400">
            Bukke Sandeep Naik
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-400">
            B.Tech CSE (AI & ML) • VIT-AP University
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;