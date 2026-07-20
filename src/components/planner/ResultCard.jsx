function ResultCard({
  requiredSGPA,
  expectedCGPA,
}) {
  const achievable = requiredSGPA <= 10;

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Required SGPA */}

      <div
        className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          sm:p-8
          transition-all
          duration-300
          hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
        "
      >

        <p className="text-sm sm:text-base text-slate-400">
          Required SGPA
        </p>

        <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-blue-400">
          {requiredSGPA.toFixed(2)}
        </h2>

      </div>

      {/* Target CGPA */}

      <div
        className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          sm:p-8
          transition-all
          duration-300
          hover:border-purple-500
          hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
        "
      >

        <p className="text-sm sm:text-base text-slate-400">
          Target CGPA
        </p>

        <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-purple-400">
          {expectedCGPA}
        </h2>

      </div>

      {/* Status */}

      <div
        className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          sm:p-8
          transition-all
          duration-300
          hover:border-green-500
        "
      >

        <p className="text-sm sm:text-base text-slate-400">
          Status
        </p>

        <h2
          className={`mt-5 text-2xl sm:text-3xl font-bold leading-tight ${
            achievable
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {achievable
            ? "🎯 Achievable"
            : "❌ Not Possible"}
        </h2>

      </div>

    </div>

  );
}

export default ResultCard;