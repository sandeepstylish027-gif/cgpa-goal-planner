function GradeBadge({ grade }) {

  const badgeStyles = {
    S: "bg-yellow-500/20 text-yellow-300 border-yellow-500",
    A: "bg-green-500/20 text-green-300 border-green-500",
    B: "bg-blue-500/20 text-blue-300 border-blue-500",
    C: "bg-orange-500/20 text-orange-300 border-orange-500",
    D: "bg-purple-500/20 text-purple-300 border-purple-500",
    E: "bg-gray-500/20 text-gray-300 border-gray-500",
    F: "bg-red-500/20 text-red-300 border-red-500",
  };

  const badgeIcons = {
    S: "⭐",
    A: "🟢",
    B: "🔵",
    C: "🟠",
    D: "🟣",
    E: "⚪",
    F: "🔴",
  };

  return (

    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-4
        py-2
        text-sm
        sm:text-base
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${badgeStyles[grade]}
      `}
    >

      <span className="text-base sm:text-lg">
        {badgeIcons[grade]}
      </span>

      <span>
        {grade}
      </span>

    </div>

  );
}

export default GradeBadge;