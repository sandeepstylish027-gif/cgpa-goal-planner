import { calculateRequiredSGPA } from "../../utils/cgpaCalculator";

import {
  generateRecommendation,
  gradeSummary,
} from "../../utils/recommendationEngine";

import ResultCard from "./ResultCard";
import GradeRecommendation from "./GradeRecommendation";
import GradeSummary from "./GradeSummary";
import NavigationButtons from "./NavigationButtons";

function OverallResult({
  plannerData,
  backStep,
}) {

  // Calculate required SGPA
  const requiredSGPA = calculateRequiredSGPA(
    Number(plannerData.currentCGPA),
    Number(plannerData.completedCredits),
    Number(plannerData.targetCGPA),
    Number(plannerData.degreeCredits)
  );

  // If target is impossible
  if (
    !isFinite(requiredSGPA) ||
    requiredSGPA > 10
  ) {
    return (
      <div className="bg-red-500/10 border border-red-500 rounded-3xl p-8 text-center">

        <h2 className="text-3xl font-bold text-red-400">
          Target CGPA is not achievable
        </h2>

        <p className="text-gray-300 mt-4">
          The required SGPA is greater than 10.
          Please reduce your target CGPA or check your inputs.
        </p>

        <NavigationButtons
          showBack
          backStep={backStep}
          nextText="Back"
        />

      </div>
    );
  }

  // Generate recommendation
  const recommendations = generateRecommendation(
    requiredSGPA,
    plannerData.twoCredits,
    plannerData.threeCredits,
    plannerData.fourCredits,
    plannerData.recommendationStyle || "balanced"
  );

  // Grade summary
  const summary = gradeSummary(recommendations);

  return (
    <div>

      <ResultCard
        requiredSGPA={requiredSGPA}
        expectedCGPA={plannerData.targetCGPA}
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

export default OverallResult;