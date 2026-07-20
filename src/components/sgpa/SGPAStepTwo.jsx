import RecommendationStyle from "./RecommendationStyle";
import NavigationButtons from "../planner/NavigationButtons";

function SGPAStepTwo({
  plannerData,
  setPlannerData,
  backStep,
  nextStep,
}) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">

      <RecommendationStyle
        plannerData={plannerData}
        setPlannerData={setPlannerData}
      />

      <div className="mt-10">

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

export default SGPAStepTwo;