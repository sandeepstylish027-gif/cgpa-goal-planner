import { ArrowRight } from "react-feather";

function FeatureCard({
  icon,
  title,
  description,
  onLearnMore,
}) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg">

      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-8">
        {description}
      </p>

      <button
        onClick={onLearnMore}
        className="mt-8 flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all"
      >
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default FeatureCard;