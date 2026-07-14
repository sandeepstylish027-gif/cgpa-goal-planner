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
    plannerData.twoCredits * 2 +
    plannerData.threeCredits * 3 +
    plannerData.fourCredits * 4;

  const isValid =
    Number(plannerData.semesterCredits) === calculatedCredits;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

      {/* Heading */}

      <h2 className="text-3xl font-bold text-white">
        Semester Planning
      </h2>

      <p className="text-gray-400 mt-2">
        Configure your upcoming semester and choose how you want the recommendation to be generated.
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
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none"
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
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none"
        />

      </div>

      {/* Credit Counters */}

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

      {/* Credit Validation */}

      {!isValid && (

        <div className="mt-8 bg-red-500/10 border border-red-500 rounded-2xl p-5">

          <h3 className="text-red-400 font-semibold">
            ⚠ Credit Distribution Mismatch
          </h3>

          <p className="text-red-300 mt-2">
            The total semester credits do not match the credits calculated from your subject distribution.
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