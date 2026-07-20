function PlannerProgress({ step }) {
  return (
    <div className="mb-12 sm:mb-16">

      {/* Heading */}

      <div className="text-center">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Overall CGPA Planner
        </h1>

        <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-400">
          Step {step} of 3
        </p>

      </div>

      {/* Progress */}

      <div className="mt-10 sm:mt-12 flex items-start justify-center">

        {/* Step 1 */}

        <div className="flex flex-col items-center min-w-[70px]">

          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 ${
              step >= 1
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            1
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-300 text-center">
            Basic Info
          </p>

        </div>

        {/* Line */}

        <div
          className={`mt-5 sm:mt-6 h-1 w-12 sm:w-20 md:w-28 mx-2 sm:mx-3 rounded-full transition-all duration-300 ${
            step >= 2 ? "bg-blue-500" : "bg-slate-700"
          }`}
        />

        {/* Step 2 */}

        <div className="flex flex-col items-center min-w-[70px]">

          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 ${
              step >= 2
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            2
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-300 text-center">
            Semester
          </p>

        </div>

        {/* Line */}

        <div
          className={`mt-5 sm:mt-6 h-1 w-12 sm:w-20 md:w-28 mx-2 sm:mx-3 rounded-full transition-all duration-300 ${
            step >= 3 ? "bg-blue-500" : "bg-slate-700"
          }`}
        />

        {/* Step 3 */}

        <div className="flex flex-col items-center min-w-[70px]">

          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 ${
              step >= 3
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            3
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-300 text-center">
            Results
          </p>

        </div>

      </div>

    </div>
  );
}

export default PlannerProgress;