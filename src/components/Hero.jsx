import { useNavigate } from "react-router-dom";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-blue-400 text-sm font-medium">
              🎓 Built for Students. Designed for Success.
            </div>

            {/* Main Heading */}
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">
                Smart Academic
              </span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Planner
              </span>
            </h1>

            {/* Secondary Heading */}
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Plan Today.
              <br />
              Graduate with
              <br />
              <span className="text-purple-400">
                Dream CGPA
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg leading-7 text-slate-400 max-w-xl mx-auto lg:mx-0">
              Set your target CGPA, plan every semester, calculate the
              required grades, and confidently achieve your academic goals
              with our intelligent planner built specifically for VIT-AP
              students.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={() => navigate("/planner")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
              >
                🚀 Start Planning
              </button>

              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition-all duration-300"
              >
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2 flex justify-center items-center">

            <div className="w-full max-w-[650px]">
              <DashboardPreview />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;