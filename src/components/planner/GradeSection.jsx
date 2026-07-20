import GradeRow from "./GradeRow";

function GradeSection({
  title,
  grades,
}) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">

      {/* Heading */}

      <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-white">
        {title}
      </h2>

      {/* Grade Rows */}

      <div className="space-y-4">

        {grades.map((grade, index) => (

          <GradeRow
            key={index}
            subject={`Subject ${index + 1}`}
            grade={grade}
          />

        ))}

      </div>

    </div>
  );
}

export default GradeSection;