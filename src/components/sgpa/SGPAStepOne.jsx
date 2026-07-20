import CreditCounter from "../planner/CreditCounter";
import CreditSummary from "../planner/CreditSummary";
import NavigationButtons from "../planner/NavigationButtons";

function SGPAStepOne({
  plannerData,
  setPlannerData,
  nextStep,
}) {
  const calculatedCredits =
    plannerData.twoCredits * 2 +
    plannerData.threeCredits * 3 +
    plannerData.fourCredits * 4;

  const isValid =
    Number(plannerData.semesterCredits) === calculatedCredits;

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">

      {/* Heading */}

      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Semester SGPA Planner
      </h2>

      <p className="mt-3 text-sm sm:text-base text-gray-400">
        Enter your semester details to generate the required grade recommendation.
      </p>

      {/* Form */}

      <div className="mt-10 space-y-8">

        {/* Semester */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Semester
          </label>

          <select
            value={plannerData.semester}
            onChange={(e) =>
              setPlannerData((prev) => ({
                ...prev,
                semester: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
          >
            <option>Semester 1</option>
            <option>Semester 2</option>
            <option>Semester 3</option>
            <option>Semester 4</option>
            <option>Semester 5</option>
            <option>Semester 6</option>
            <option>Semester 7</option>
            <option>Semester 8</option>
          </select>

        </div>

        {/* Target SGPA */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Target SGPA
          </label>

          <input
            type="number"
            step="0.01"
            placeholder="Enter your target SGPA"
            value={plannerData.targetSGPA}
            onChange={(e) =>
              setPlannerData((prev) => ({
                ...prev,
                targetSGPA: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder-gray-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
          />

        </div>

        {/* Semester Credits */}

        <div>

          <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
            Total Semester Credits
          </label>

          <input
            type="number"
            placeholder="Enter current semester credits"
            value={plannerData.semesterCredits}
            onChange={(e) =>
              setPlannerData((prev) => ({
                ...prev,
                semesterCredits:
                  e.target.value === ""
                    ? ""
                    : Number(e.target.value),
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder-gray-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
          />

        </div>

      </div>

      {/* Credit Counters */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        <CreditCounter
          title="2 Credit Subjects"
          value={plannerData.twoCredits}
          setValue={(value) =>
            setPlannerData((prev) => ({
              ...prev,
              twoCredits: value,
            }))
          }
        />

        <CreditCounter
          title="3 Credit Subjects"
          value={plannerData.threeCredits}
          setValue={(value) =>
            setPlannerData((prev) => ({
              ...prev,
              threeCredits: value,
            }))
          }
        />

        <CreditCounter
          title="4 Credit Subjects"
          value={plannerData.fourCredits}
          setValue={(value) =>
            setPlannerData((prev) => ({
              ...prev,
              fourCredits: value,
            }))
          }
        />

      </div>

      {/* Credit Summary */}

      <CreditSummary
        totalCredits={Number(plannerData.semesterCredits) || 0}
        calculatedCredits={calculatedCredits}
      />

      {/* Validation */}

      {!isValid && plannerData.semesterCredits !== "" && (

        <div className="mt-8 rounded-2xl border border-red-500 bg-red-500/10 p-5 sm:p-6">

          <h3 className="text-lg font-semibold text-red-400">
            ⚠ Credit Distribution Mismatch
          </h3>

          <p className="mt-2 text-sm sm:text-base leading-7 text-red-300">
            The total semester credits do not match the calculated credits.
            Please adjust the number of subjects until both values are equal.
          </p>

        </div>

      )}

      {/* Navigation */}

      <div className="mt-10">

        <NavigationButtons
          nextStep={nextStep}
          nextText="Recommendation Style →"
        />

      </div>

    </div>
  );
}

export default SGPAStepOne;