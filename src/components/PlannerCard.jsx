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
    <div
      className="
        group
        h-full
        flex
        flex-col
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
        sm:p-8
        lg:p-10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
      "
    >
      {/* Icon */}

      <div className="text-5xl sm:text-6xl mb-5">
        {icon}
      </div>

      {/* Title */}

      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-5 text-sm sm:text-base leading-7 text-slate-400">
        {description}
      </p>

      {/* Features */}

      <div className="mt-8 flex-grow space-y-3">

        {features.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-3"
          >

            <span className="mt-0.5 text-green-400 text-lg flex-shrink-0">
              ✔
            </span>

            <span className="text-sm sm:text-base text-slate-300 leading-6">
              {item}
            </span>

          </div>

        ))}

      </div>

      {/* Button */}

      <button
        onClick={() => navigate(route)}
        className="
          mt-10
          w-full
          sm:w-fit
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          px-8
          py-4
          text-sm
          sm:text-base
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:gap-4
        "
      >
        {buttonText}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

    </div>
  );
}

export default PlannerCard;