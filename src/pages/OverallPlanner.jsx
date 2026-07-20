import { useState } from "react";

import Navbar from "../components/Navbar";

import PlannerProgress from "../components/planner/PlannerProgress";
import OverallStepOne from "../components/planner/OverallStepOne";
import OverallStepTwo from "../components/planner/OverallStepTwo";
import OverallResult from "../components/planner/OverallResult";

function OverallPlanner() {
  const [step, setStep] = useState(1);

  const [plannerData, setPlannerData] = useState({
    // ===================================
    // STEP 1
    // ===================================
    currentCGPA: "",
    completedCredits: "",
    targetCGPA: "",
    completedSemesters: "",

    // ===================================
    // STEP 2
    // ===================================
    semester: "Semester 5",

    semesterCredits: "",

    twoCredits: 0,
    threeCredits: 0,
    fourCredits: 0,

    recommendationStyle: "balanced",
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-28 sm:pt-32 pb-16 sm:pb-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <PlannerProgress step={step} />

          {step === 1 && (
            <OverallStepOne
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              nextStep={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <OverallStepTwo
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              backStep={() => setStep(1)}
              nextStep={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <OverallResult
              plannerData={plannerData}
              backStep={() => setStep(2)}
            />
          )}

        </div>

      </main>
    </>
  );
}

export default OverallPlanner;