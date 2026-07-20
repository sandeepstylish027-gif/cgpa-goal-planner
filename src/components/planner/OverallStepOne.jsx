import NavigationButtons from "./NavigationButtons";

function OverallStepOne({
  plannerData,
  setPlannerData,
  nextStep,
}) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlannerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">

      {/* Header */}

      <div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Basic Information
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Enter your current academic details to begin planning.
        </p>

      </div>

      {/* Form */}

      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

        {/* Current CGPA */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Current CGPA
          </label>

          <input
            type="number"
            step="0.01"
            name="currentCGPA"
            value={plannerData.currentCGPA}
            onChange={handleChange}
            placeholder="Enter your current CGPA"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

        </div>

        {/* Completed Credits */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Completed Credits
          </label>

          <input
            type="number"
            name="completedCredits"
            value={plannerData.completedCredits}
            onChange={handleChange}
            placeholder="Enter completed credits"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

        </div>

        {/* Target CGPA */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Target CGPA
          </label>

          <input
            type="number"
            step="0.01"
            name="targetCGPA"
            value={plannerData.targetCGPA}
            onChange={handleChange}
            placeholder="Enter your target CGPA"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

        </div>

        {/* Completed Semesters */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Completed Semesters
          </label>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">

            {[1, 2, 3, 4, 5, 6, 7].map((sem) => (

              <button
                key={sem}
                type="button"
                onClick={() =>
                  setPlannerData((prev) => ({
                    ...prev,
                    completedSemesters: sem,
                  }))
                }
                className={`rounded-xl py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                  plannerData.completedSemesters === sem
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "border border-slate-700 bg-slate-800 text-gray-300 hover:border-blue-500 hover:text-white"
                }`}
              >
                {sem}
              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="mt-10">

        <NavigationButtons
          nextStep={nextStep}
        />

      </div>

    </div>
  );
}

export default OverallStepOne;