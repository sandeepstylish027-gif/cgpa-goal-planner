function CreditSummary({
  totalCredits,
  calculatedCredits,
}) {

  const difference =
    totalCredits - calculatedCredits;

  const matched = difference === 0;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mt-10">

      <h2 className="text-2xl font-bold text-white">
        Credit Verification
      </h2>

      <div className="mt-8 space-y-5">

        <Row
          title="Entered Credits"
          value={totalCredits}
        />

        <Row
          title="Calculated Credits"
          value={calculatedCredits}
        />

      </div>

      <div className="mt-8">

        {matched ? (

          <div className="bg-green-500/20 border border-green-500 rounded-2xl p-5">

            <h3 className="text-green-400 text-xl font-bold">

              ✅ Perfect!

            </h3>

            <p className="text-green-300 mt-2">

              Your credit distribution is correct.

            </p>

          </div>

        ) : (

          <div className="bg-red-500/20 border border-red-500 rounded-2xl p-5">

            <h3 className="text-red-400 text-xl font-bold">

              ⚠ Credit Mismatch

            </h3>

            <p className="text-red-300 mt-2">

              Difference:
              {" "}
              {Math.abs(difference)}
              {" "}
              Credits

            </p>

          </div>

        )}

      </div>

    </div>
  );
}

function Row({ title, value }) {
  return (
    <div className="flex justify-between items-center bg-slate-800 rounded-xl px-5 py-4">

      <span className="text-gray-300">
        {title}
      </span>

      <span className="text-white text-xl font-bold">
        {value}
      </span>

    </div>
  );
}

export default CreditSummary;