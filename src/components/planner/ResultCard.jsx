function ResultCard({
  requiredSGPA,
  expectedCGPA,
}) {

  const achievable =
    requiredSGPA <= 10;

  return (

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      {/* Required SGPA */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

        <p className="text-gray-400">
          Required SGPA
        </p>

        <h2 className="text-5xl font-bold text-blue-400 mt-4">

          {requiredSGPA.toFixed(2)}

        </h2>

      </div>

      {/* Expected CGPA */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

        <p className="text-gray-400">
          Target CGPA
        </p>

        <h2 className="text-5xl font-bold text-purple-400 mt-4">

          {expectedCGPA}

        </h2>

      </div>

      {/* Status */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

        <p className="text-gray-400">
          Status
        </p>

        <h2
          className={`text-3xl font-bold mt-6 ${
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