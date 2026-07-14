import RecommendationStyle from "./RecommendationStyle";
import NavigationButtons from "../planner/NavigationButtons";

function SGPAStepTwo({
  plannerData,
  setPlannerData,
  backStep,
  nextStep,
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

      <RecommendationStyle
        plannerData={plannerData}
        setPlannerData={setPlannerData}
      />

      <NavigationButtons
        showBack
        backStep={backStep}
        nextStep={nextStep}
        nextText="Generate Recommendation →"
      />

    </div>

  );

}

export default SGPAStepTwo;