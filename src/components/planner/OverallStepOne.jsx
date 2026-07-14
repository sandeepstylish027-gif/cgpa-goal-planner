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
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

      <h2 className="text-3xl font-bold text-white">
        Basic Information
      </h2>

      <p className="text-gray-400 mt-2">
        Enter your current academic details to begin planning.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* Current CGPA */}

        <div>

          <label className="block text-gray-300 mb-3">
            Current CGPA
          </label>

          <input
            type="number"
            step="0.01"
            name="currentCGPA"
            value={plannerData.currentCGPA}
            onChange={handleChange}
            placeholder="Eg: 8.50"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Completed Credits */}

        <div>

          <label className="block text-gray-300 mb-3">
            Completed Credits
          </label>

          <input
            type="number"
            name="completedCredits"
            value={plannerData.completedCredits}
            onChange={handleChange}
            placeholder="Eg: 90"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Target CGPA */}

        <div>

          <label className="block text-gray-300 mb-3">
            Target CGPA
          </label>

          <input
            type="number"
            step="0.01"
            name="targetCGPA"
            value={plannerData.targetCGPA}
            onChange={handleChange}
            placeholder="Eg: 9.00"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Degree Credits */}

        <div>

          <label className="block text-gray-300 mb-3">
            Degree Total Credits
          </label>

          <input
            type="number"
            name="degreeCredits"
            value={plannerData.degreeCredits}
            onChange={handleChange}
            placeholder="Eg: 160"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
          />

        </div>

      </div>

      <NavigationButtons
        nextStep={nextStep}
      />

    </div>
  );
}

export default OverallStepOne;