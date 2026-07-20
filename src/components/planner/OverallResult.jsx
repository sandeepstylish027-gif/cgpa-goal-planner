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
      <div className="rounded-3xl border border-red-500 bg-red-500/10 p-6 sm:p-8 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-red-400">
          Target CGPA is Not Achievable
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-7 text-gray-300 max-w-2xl mx-auto">
          The required SGPA is greater than 10. Please reduce your target
          CGPA or verify your academic details before trying again.
        </p>

        <div className="mt-8">
          <NavigationButtons
            showBack
            backStep={backStep}
            nextText="Back"
          />
        </div>

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
    <div className="space-y-8 sm:space-y-10">

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