import {
  FaTrophy,
  FaBalanceScale,
  FaBookOpen,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

function RecommendationStyle({
  plannerData,
  setPlannerData,
}) {
  const options = [
    {
      id: "high",
      title: "High Achievement",
      icon: <FaTrophy className="text-yellow-400 text-3xl" />,
      description:
        "Highest probability of achieving your target CGPA. More S grades and maximum safety.",
    },
    {
      id: "balanced",
      title: "Balanced",
      icon: <FaBalanceScale className="text-blue-400 text-3xl" />,
      description:
        "Recommended for most students. Balanced mix of S and A grades.",
    },
    {
      id: "realistic",
      title: "Realistic",
      icon: <FaBookOpen className="text-green-400 text-3xl" />,
      description:
        "Practical combination of S, A and B grades for consistent performance.",
    },
    {
      id: "minimum",
      title: "Minimum Required",
      icon: <FaBullseye className="text-red-400 text-3xl" />,
      description:
        "Minimum grades required to achieve your target. May include B and C grades.",
    },
  ];

  return (
    <div className="mt-12 sm:mt-14">

      {/* Heading */}

      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Recommendation Style
      </h2>

      <p className="mt-3 text-sm sm:text-base text-gray-400">
        Select how you want your grade recommendation to be generated.
      </p>

      {/* Cards */}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

        {options.map((option) => {

          const selected =
            plannerData.recommendationStyle === option.id;

          return (

            <button
              key={option.id}
              onClick={() =>
                setPlannerData((prev) => ({
                  ...prev,
                  recommendationStyle: option.id,
                }))
              }
              className={`relative rounded-3xl border p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 ${
                selected
                  ? "border-blue-500 bg-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,0.22)]"
                  : "border-slate-700 bg-slate-800 hover:border-blue-400"
              }`}
            >

              {selected && (
                <div className="absolute right-5 top-5">

                  <FaCheckCircle className="text-2xl text-green-400" />

                </div>
              )}

              <div className="flex items-start gap-4">

                <div className="flex-shrink-0">

                  {option.icon}

                </div>

                <div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {option.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-7 text-gray-400">
                    {option.description}
                  </p>

                </div>

              </div>

            </button>

          );
        })}

      </div>

      {/* Selected */}

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5 sm:p-6">

        <h3 className="text-base sm:text-lg font-semibold text-blue-400">
          Selected Strategy
        </h3>

        <p className="mt-2 text-lg sm:text-xl font-semibold text-white capitalize">

          {plannerData.recommendationStyle === "high"
            ? "⭐ High Achievement"
            : plannerData.recommendationStyle === "balanced"
            ? "⚖️ Balanced"
            : plannerData.recommendationStyle === "realistic"
            ? "📚 Realistic"
            : "🎯 Minimum Required"}

        </p>

      </div>

    </div>
  );
}

export default RecommendationStyle;