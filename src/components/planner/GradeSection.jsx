import GradeRow from "./GradeRow";

function GradeSection({
  title,
  grades,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        {title}
      </h2>

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