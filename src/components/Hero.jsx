import { useNavigate } from "react-router-dom";
import DashboardPreview from "./DashboardPreview";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="bg-slate-950 min-h-screen flex items-center pt-24 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full px-10">

        <div className="flex items-center justify-between gap-20">

          {/* LEFT */}

          <div className="w-1/2">

            <div className="inline-flex items-center px-5 py-2 rounded-full bg-slate-900 border border-slate-700 text-blue-400 mb-8">

              🎓 Built for Students. Designed for Success.

            </div>

            <h1 className="text-7xl font-extrabold leading-tight">

              <span className="text-white">

                Smart Academic

              </span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

                Planner

              </span>

            </h1>

            <h2 className="text-5xl font-bold text-white mt-8 leading-tight">

              Plan Today.

              <br />

              Graduate with

              <br />

              <span className="text-purple-400">

                Dream CGPA

              </span>

            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">

              Set your target CGPA, plan every semester,
              calculate required grades and confidently
              achieve your academic goals with our smart planner.

            </p>

            <div className="flex gap-5 mt-12">

              <button
                onClick={() => navigate("/planner")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >

                Start Planning →

              </button>

              <button
                className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-800 transition duration-300"
              >

                Learn More

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="w-1/2 flex justify-end relative">

            <div className="absolute w-[450px] h-[450px] bg-blue-500/20 blur-[180px] rounded-full"></div>

            <DashboardPreview />

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;