function StepCard({ number, icon, title, description, color }) {
  return (
    <div
      className="
        relative
        h-full
        flex
        flex-col
        items-center
        text-center
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        sm:p-7
        lg:p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/60
        hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
      "
    >
      {/* Step Number */}

      <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-sm font-bold text-white">
        {number}
      </div>

      {/* Icon */}

      <div
        className={`
          w-20 h-20
          sm:w-24 sm:h-24
          rounded-full
          flex
          items-center
          justify-center
          text-3xl
          sm:text-4xl
          ${color}
          shadow-lg
          transition-transform
          duration-300
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white leading-tight">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400 flex-grow max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default StepCard;