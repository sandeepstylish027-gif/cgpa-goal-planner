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

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <h2 className="text-2xl font-bold text-white mb-8">
        Grade Summary
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">

        {grades.map((grade) => (

          <div
            key={grade}
            className="bg-slate-800 rounded-2xl p-5 text-center"
          >

            <div className="flex justify-center">

              <GradeBadge
                grade={grade}
              />

            </div>

            <h2 className="text-3xl font-bold text-white mt-4">

              {summary[grade]}

            </h2>

          </div>

        ))}

      </div>

    </div>

  );

}

export default GradeSummary;