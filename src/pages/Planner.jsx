import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import PlannerSelection from "../components/PlannerSelection";

function Planner() {
  const navigate = useNavigate();

  // Always start this page from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24">

        {/* Planner Selection */}

        <PlannerSelection />

        {/* Back Button */}

        <div className="mt-12 sm:mt-16 flex justify-center sm:justify-start">

          <button
            onClick={() => navigate("/")}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              w-full
              sm:w-auto
              px-6
              py-3.5
              rounded-xl
              bg-slate-900
              border
              border-slate-700
              text-gray-300
              font-medium
              transition-all
              duration-300
              hover:bg-blue-600
              hover:border-blue-500
              hover:text-white
              hover:scale-[1.02]
            "
          >
            <FaArrowLeft />
            Back to Home
          </button>

        </div>

      </div>

    </main>
  );
}

export default Planner;