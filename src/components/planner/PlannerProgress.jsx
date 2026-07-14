function PlannerProgress({ step }) {
  return (
    <div className="mb-12">

      <h1 className="text-5xl font-bold text-white text-center">
        Overall CGPA Planner
      </h1>

      <p className="text-gray-400 text-center mt-3 text-lg">
        Step {step} of 3
      </p>

      <div className="flex items-center justify-center mt-10">

        {/* Step 1 */}

        <div className="flex flex-col items-center">

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
            ${
              step >= 1
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            1
          </div>

          <p className="text-gray-300 mt-3">
            Basic Info
          </p>

        </div>

        <div
          className={`w-28 h-1 mx-3 rounded
          ${step >= 2 ? "bg-blue-500" : "bg-slate-700"}`}
        />

        {/* Step 2 */}

        <div className="flex flex-col items-center">

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
            ${
              step >= 2
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            2
          </div>

          <p className="text-gray-300 mt-3">
            Semester
          </p>

        </div>

        <div
          className={`w-28 h-1 mx-3 rounded
          ${step >= 3 ? "bg-blue-500" : "bg-slate-700"}`}
        />

        {/* Step 3 */}

        <div className="flex flex-col items-center">

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
            ${
              step >= 3
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-gray-500"
            }`}
          >
            3
          </div>

          <p className="text-gray-300 mt-3">
            Results
          </p>

        </div>

      </div>

    </div>
  );
}

export default PlannerProgress;