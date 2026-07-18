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

  const requiredSGPA = calculateRequiredSGPA(
    Number(plannerData.currentCGPA),
    Number(plannerData.completedCredits),
    Number(plannerData.targetCGPA),
    Number(plannerData.semesterCredits)
  );

  if (
    requiredSGPA === null ||
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

  const recommendations = generateRecommendation(
    requiredSGPA,
    Number(plannerData.twoCredits),
    Number(plannerData.threeCredits),
    Number(plannerData.fourCredits),
    plannerData.recommendationStyle || "balanced"
  );

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