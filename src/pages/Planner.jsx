import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import PlannerSelection from "../components/PlannerSelection";

function Planner() {

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">

        <PlannerSelection />

        {/* Back Button */}

        <div className="mt-16 flex justify-start">

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-3
                       px-6 py-3
                       rounded-xl
                       bg-slate-900
                       border border-slate-700
                       text-gray-300
                       hover:bg-blue-600
                       hover:border-blue-500
                       hover:text-white
                       transition-all
                       duration-300"
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