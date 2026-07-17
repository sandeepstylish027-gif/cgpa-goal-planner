import { useState } from "react";
import {
  FaBullseye,
  FaCalendarAlt,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";
import FeatureModal from "./FeatureModal";

function Features() {

  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      title: "Goal Prediction",
      icon: <FaBullseye />,
      iconBg: "bg-purple-500/20 text-purple-400",
      description:
        "Predict the CGPA required to achieve your academic goals with intelligent calculations.",
      highlights: [
        "Target CGPA calculation",
        "Remaining semester planning",
        "Credit-based prediction",
        "Accurate academic roadmap",
      ],
      example:
        "If your current CGPA is 8.50 and your target is 9.00, the planner calculates the SGPA required in each remaining semester.",
    },

    {
      title: "Semester Planner",
      icon: <FaCalendarAlt />,
      iconBg: "bg-blue-500/20 text-blue-400",
      description:
        "Plan each semester with proper credit distribution and expected grades.",
      highlights: [
        "Semester-wise planning",
        "Flexible credit allocation",
        "Expected SGPA",
        "Better workload management",
      ],
      example:
        "Allocate 22 credits this semester and instantly see how it affects your overall CGPA.",
    },

    {
      title: "Grade Recommendation",
      icon: <FaGraduationCap />,
      iconBg: "bg-green-500/20 text-green-400",
      description:
        "Receive personalized grade recommendations to reach your dream CGPA.",
      highlights: [
        "High Achievement",
        "Balanced",
        "Realistic",
        "Minimum Required",
      ],
      example:
        "The recommendation engine suggests the best combination of S, A, B, and C grades based on your target CGPA.",
    },

    {
      title: "Progress Analytics",
      icon: <FaChartLine />,
      iconBg: "bg-orange-500/20 text-orange-400",
      description:
        "Track your CGPA growth with beautiful charts and insightful analytics.",
      highlights: [
        "Current CGPA",
        "Target Tracking",
        "Credit Completion",
        "Progress Dashboard",
      ],
      example:
        "Monitor your completed credits, current CGPA, and progress toward graduation in one dashboard.",
    },
  ];

  return (
    <>
      <section id="features" className="bg-slate-950 py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <p className="text-blue-400 uppercase tracking-[6px] text-center font-semibold">
            FEATURES
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-4">
            Powerful Features to Plan Better
          </h2>

          <p className="text-gray-400 text-center mt-5 text-lg">
            Everything you need to achieve your academic goals.
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${feature.iconBg}`}
                  >
                    {feature.icon}
                  </div>
                }
                title={feature.title}
                description={feature.description}
                onLearnMore={() => setSelectedFeature(feature)}
              />
            ))}

          </div>

        </div>

      </section>

      {selectedFeature && (
  <FeatureModal
    feature={selectedFeature}
    onClose={() => setSelectedFeature(null)}
  />
)}
    </>
  );
}

export default Features;