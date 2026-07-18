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

  // Credits calculated from subject distribution
  const calculatedCredits =
    Number(plannerData.twoCredits) * 2 +
    Number(plannerData.threeCredits) * 3 +
    Number(plannerData.fourCredits) * 4;

  // Check if entered credits match calculated credits
  const isValid =
    Number(plannerData.semesterCredits) === calculatedCredits;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

      <h2 className="text-3xl font-bold text-white">
        Semester Planning
      </h2>

      <p className="text-gray-400 mt-2">
        Enter your semester details and subject distribution.
      </p>

      {/* Semester */}

      <div className="mt-10">

        <label className="block text-gray-300 mb-3">
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
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
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

      {/* User Enters Semester Credits */}

      <div className="mt-8">

        <label className="block text-gray-300 mb-3">
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
          placeholder="Example: 22"
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
        />

      </div>

      {/* Subject Counters */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

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
        <div className="mt-6 bg-red-500/10 border border-red-500 rounded-2xl p-5">
          <h3 className="text-red-400 font-semibold">
            Credit Distribution Mismatch
          </h3>

          <p className="text-red-300 mt-2">
            Entered Credits : {plannerData.semesterCredits}
          </p>

          <p className="text-red-300">
            Calculated Credits : {calculatedCredits}
          </p>

          <p className="text-red-300 mt-2">
            Please update your subject distribution so both values match.
          </p>
        </div>
      )}

      {/* Recommendation Style */}

      <RecommendationStyle
        plannerData={plannerData}
        setPlannerData={setPlannerData}
      />

      {/* Navigation */}

      <div className="mt-12">

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