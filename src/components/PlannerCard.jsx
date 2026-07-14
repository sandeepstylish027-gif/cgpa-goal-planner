import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";

function PlannerCard({
  icon,
  title,
  description,
  features,
  buttonText,
  route,
}) {

  const navigate = useNavigate();

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">

      {/* Icon */}

      <div className="text-6xl mb-6">
        {icon}
      </div>

      {/* Title */}

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      {/* Description */}

      <p className="text-gray-400 mt-5 leading-8">
        {description}
      </p>

      {/* Features */}

      <div className="mt-8 space-y-3">

        {features.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3 text-gray-300"
          >

            <span className="text-green-400 text-lg">

              ✔

            </span>

            <span>

              {item}

            </span>

          </div>

        ))}

      </div>

      {/* Button */}

      <button
        onClick={() => navigate(route)}
        className="mt-10 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:gap-5 hover:scale-105 transition-all duration-300 shadow-lg"
      >

        {buttonText}

        <ArrowRight size={18} />

      </button>

    </div>
  );
}

export default PlannerCard;