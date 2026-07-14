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
        "Highest probability of achieving your target SGPA. More S grades and maximum safety.",
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
        "Minimum grades required to achieve your target SGPA. May include B and C grades.",
    },
  ];

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-white">
        Recommendation Style
      </h2>

      <p className="text-gray-400 mt-2">
        Select how you want your semester recommendation to be generated.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

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
              className={`relative text-left rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                selected
                  ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                  : "border-slate-700 bg-slate-800 hover:border-blue-400"
              }`}
            >

              {selected && (
                <div className="absolute top-5 right-5">
                  <FaCheckCircle className="text-green-400 text-2xl" />
                </div>
              )}

              <div className="flex items-center gap-5">

                {option.icon}

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {option.title}
                  </h3>

                  <p className="text-gray-400 mt-2 leading-7">
                    {option.description}
                  </p>

                </div>

              </div>

            </button>

          );

        })}

      </div>

      <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-6">

        <h3 className="text-lg font-semibold text-blue-400">
          Selected Strategy
        </h3>

        <p className="text-white text-xl mt-2 capitalize">

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