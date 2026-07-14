import { generateRecommendation, gradeSummary } from "../../utils/recommendationEngine";

import ResultCard from "../planner/ResultCard";
import GradeRecommendation from "../planner/GradeRecommendation";
import GradeSummary from "../planner/GradeSummary";
import NavigationButtons from "../planner/NavigationButtons";

function SGPAResult({
  plannerData,
  backStep,
}) {

  const recommendations = generateRecommendation(
    Number(plannerData.targetSGPA),
    plannerData.twoCredits,
    plannerData.threeCredits,
    plannerData.fourCredits,
    plannerData.recommendationStyle
  );

  const summary = gradeSummary(recommendations);

  return (

    <div>

      <ResultCard
  requiredSGPA={Number(plannerData.targetSGPA)}
  expectedCGPA={Number(plannerData.targetSGPA)}
/>

      <GradeRecommendation
        recommendations={recommendations}
      />

      <GradeSummary
        summary={summary}
      />

      <NavigationButtons
        showBack
        backStep={backStep}
        nextText="Finish"
      />

    </div>

  );

}

export default SGPAResult;