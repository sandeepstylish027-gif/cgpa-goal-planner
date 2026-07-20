const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-widest uppercase">
            About
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            About VIT AP Grade Recommender
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            VIT AP Grade Recommender is an academic planning tool
            designed specifically for VIT-AP students. It helps
            students calculate the SGPA required to achieve their
            target CGPA and provides intelligent grade
            recommendations based on semester credits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Why this project?
            </h3>

            <p className="text-slate-300 leading-8">
              Many students know their current CGPA but struggle to
              understand what SGPA they need in upcoming semesters.
              This project removes the guesswork by generating a
              realistic academic plan with personalized grade
              recommendations.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Core Features
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>🎯 Target CGPA Planning</li>
              <li>📈 Required SGPA Calculator</li>
              <li>📚 Intelligent Grade Recommendations</li>
              <li>⚡ Instant Results</li>
              <li>📱 Mobile Responsive</li>
              <li>🚀 Built for VIT-AP Students</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold">
            Developed by
          </h3>

          <p className="text-cyan-400 text-xl mt-3 font-semibold">
            Bukke Sandeep Naik
          </p>

          <p className="text-slate-400 mt-2">
            B.Tech CSE (AI & ML) • VIT-AP University
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;