import GradeBadge from "./GradeBadge";

function GradeSummary({ summary }) {

  const grades = [
    "S",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  return (

    <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Grade Summary
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Total number of each grade required to achieve your target CGPA.
        </p>

      </div>

      {/* Summary Grid */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

        {grades.map((grade) => (

          <div
            key={grade}
            className="
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              p-5
              text-center
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]
            "
          >

            <div className="flex justify-center">

              <GradeBadge
                grade={grade}
              />

            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">

              {summary[grade]}

            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Grade
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default GradeSummary;