import GradeBadge from "./GradeBadge";

function GradeRow({ subject, grade }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-xl px-6 py-4">

      <span className="text-white font-medium">
        {subject}
      </span>

      <GradeBadge grade={grade} />

    </div>
  );
}

export default GradeRow;