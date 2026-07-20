import Navbar from "../components/Navbar";

function SemesterPlanner() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <div className="text-center">

            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

              📚 Semester SGPA Planner

            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">

              Plan Your Semester
              <span className="block text-blue-400">
                SGPA with Confidence
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-400">

              Calculate the SGPA required for your current semester,
              experiment with different grade combinations, and understand
              exactly what you need to achieve your academic goals.

            </p>

          </div>

          {/* Planner Placeholder */}

          <div className="mt-16 rounded-3xl border border-slate-700 bg-slate-900 p-8 sm:p-12 text-center">

            <div className="text-6xl">
              🚧
            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">

              Semester Planner Coming Up

            </h2>

            <p className="mt-4 mx-auto max-w-2xl text-slate-400 leading-7">

              The planner interface will appear here. In the next step,
              we'll build a premium multi-step Semester SGPA Planner with
              subject-wise grade planning, live SGPA calculation, and
              intelligent recommendations.

            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default SemesterPlanner;