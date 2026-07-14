function StepCard({ number, icon, title, description, color }) {
  return (
    <div className="relative flex flex-col items-center text-center group">

      {/* Circle */}

      <div
        className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl ${color}
        shadow-lg group-hover:scale-110 transition-all duration-300`}
      >
        {icon}
      </div>

      {/* Step Number */}

      <div className="absolute -top-3 right-[42%] w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-sm font-bold text-white">
        {number}
      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-white mt-8">
        {title}
      </h3>

      {/* Description */}

      <p className="text-gray-400 mt-4 leading-7 max-w-xs">
        {description}
      </p>

    </div>
  );
}

export default StepCard;