import { useState } from "react";

import Navbar from "../components/Navbar";

import PlannerProgress from "../components/planner/PlannerProgress";

import SGPAStepOne from "../components/sgpa/SGPAStepOne";
import SGPAStepTwo from "../components/sgpa/SGPAStepTwo";
import SGPAResult from "../components/sgpa/SGPAResult";

function SGPAPlanner() {
  const [step, setStep] = useState(1);

  const [plannerData, setPlannerData] = useState({
    semester: "Semester 5",

    targetSGPA: "",

    semesterCredits: "",

    twoCredits: 2,

    threeCredits: 4,

    fourCredits: 1,

    recommendationStyle: "balanced",
  });

  // Change step and scroll to the top
  const goToStep = (newStep) => {
    setStep(newStep);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-32 pb-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <PlannerProgress step={step} />

          {step === 1 && (
            <SGPAStepOne
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              nextStep={() => goToStep(2)}
            />
          )}

          {step === 2 && (
            <SGPAStepTwo
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              backStep={() => goToStep(1)}
              nextStep={() => goToStep(3)}
            />
          )}

          {step === 3 && (
            <SGPAResult
              plannerData={plannerData}
              backStep={() => goToStep(2)}
            />
          )}

        </div>

      </main>
    </>
  );
}

export default SGPAPlanner;