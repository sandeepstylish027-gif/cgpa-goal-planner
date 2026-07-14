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

    semesterCredits: 22,

    twoCredits: 2,

    threeCredits: 4,

    fourCredits: 1,

    recommendationStyle: "balanced",

  });

  return (

    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-32 pb-20">

        <div className="max-w-6xl mx-auto px-6">

          <PlannerProgress step={step} />

          {step === 1 && (

            <SGPAStepOne
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              nextStep={() => setStep(2)}
            />

          )}

          {step === 2 && (

            <SGPAStepTwo
              plannerData={plannerData}
              setPlannerData={setPlannerData}
              backStep={() => setStep(1)}
              nextStep={() => setStep(3)}
            />

          )}

          {step === 3 && (

            <SGPAResult
              plannerData={plannerData}
              backStep={() => setStep(2)}
            />

          )}

        </div>

      </main>

    </>

  );

}

export default SGPAPlanner;