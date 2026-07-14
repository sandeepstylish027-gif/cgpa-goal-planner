import {
  FaBullseye,
  FaCalendarAlt,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <p className="text-blue-400 uppercase tracking-[6px] text-center font-semibold">
          FEATURES
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-4">
          Powerful Features to Plan Better
        </h2>

        <p className="text-gray-400 text-center mt-5 text-lg">
          Everything you need to achieve your academic goals.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          <FeatureCard
            icon={
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <FaBullseye />
              </div>
            }
            title="Goal Prediction"
            description="Predict the CGPA required to achieve your academic goals with intelligent calculations."
          />

          <FeatureCard
            icon={
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <FaCalendarAlt />
              </div>
            }
            title="Semester Planner"
            description="Plan each semester with proper credit distribution and expected grades."
          />

          <FeatureCard
            icon={
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                <FaGraduationCap />
              </div>
            }
            title="Grade Recommendation"
            description="Receive personalized grade recommendations to reach your dream CGPA."
          />

          <FeatureCard
            icon={
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                <FaChartLine />
              </div>
            }
            title="Progress Analytics"
            description="Track your CGPA growth with beautiful charts and insightful analytics."
          />

        </div>

      </div>

    </section>
  );
}

export default Features;