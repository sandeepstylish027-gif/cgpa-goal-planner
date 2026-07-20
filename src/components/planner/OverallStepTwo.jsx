import CreditCounter from "./CreditCounter";
import CreditSummary from "./CreditSummary";
import NavigationButtons from "./NavigationButtons";
import RecommendationStyle from "./RecommendationStyle";

function OverallStepTwo({
  plannerData,
  setPlannerData,
  backStep,
  nextStep,
}) {

  const calculatedCredits =
    Number(plannerData.twoCredits) * 2 +
    Number(plannerData.threeCredits) * 3 +
    Number(plannerData.fourCredits) * 4;

  const isValid =
    Number(plannerData.semesterCredits) === calculatedCredits;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">

      {/* Header */}

      <div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Semester Planning
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Enter your semester details and subject distribution.
        </p>

      </div>

      {/* Semester */}

      <div className="mt-8 sm:mt-10">

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
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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

      {/* Semester Credits */}

      <div className="mt-8">

        <label className="mb-3 block text-sm sm:text-base font-medium text-gray-300">
          Total Semester Credits
        </label>

        <input
          type="number"
          value={plannerData.semesterCredits}
          onChange={(e) =>
            setPlannerData((prev) => ({
              ...prev,
              semesterCredits: Number(e.target.value),
            }))
          }
          placeholder="Enter current semester credits"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

      </div>

      {/* Subject Counters */}

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

      <div className="mt-10">

        <CreditSummary
          totalCredits={plannerData.semesterCredits}
          calculatedCredits={calculatedCredits}
        />

      </div>

      {/* Validation */}

      {!isValid && (

        <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-500/10 p-5">

          <h3 className="text-lg font-semibold text-red-400">
            Credit Distribution Mismatch
          </h3>

          <div className="mt-4 space-y-2 text-sm sm:text-base text-red-300">

            <p>
              <span className="font-medium">Entered Credits:</span>{" "}
              {plannerData.semesterCredits}
            </p>

            <p>
              <span className="font-medium">Calculated Credits:</span>{" "}
              {calculatedCredits}
            </p>

            <p className="pt-2">
              Please update your subject distribution so both values
              match before generating recommendations.
            </p>

          </div>

        </div>

      )}

      {/* Recommendation Style */}

      <div className="mt-10">

        <RecommendationStyle
          plannerData={plannerData}
          setPlannerData={setPlannerData}
        />

      </div>

      {/* Navigation */}

      <div className="mt-10 sm:mt-12">

        <NavigationButtons
          showBack
          backStep={backStep}
          nextStep={nextStep}
          nextText="Generate Recommendation →"
        />

      </div>

    </div>
  );
}

export default OverallStepTwo;