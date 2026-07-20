import { ArrowRight } from "react-feather";

function FeatureCard({
  icon,
  title,
  description,
  onLearnMore,
}) {
  return (
    <div
      className="
        group
        h-full
        flex
        flex-col
        rounded-3xl
        border border-slate-800
        bg-slate-900
        p-6
        sm:p-7
        lg:p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/70
        hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
      "
    >
      {/* Icon */}

      <div className="mb-6">
        {icon}
      </div>

      {/* Title */}

      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400 flex-grow">
        {description}
      </p>

      {/* Button */}

      <button
        onClick={onLearnMore}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          self-start
          font-medium
          text-blue-400
          transition-all
          duration-300
          group-hover:gap-3
          hover:text-blue-300
        "
      >
        Learn More
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default FeatureCard;