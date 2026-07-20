function CreditSummary({
  totalCredits,
  calculatedCredits,
}) {
  const difference =
    totalCredits - calculatedCredits;

  const matched = difference === 0;

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">

      {/* Header */}

      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Credit Verification
      </h2>

      {/* Summary */}

      <div className="mt-8 space-y-4">

        <Row
          title="Entered Credits"
          value={totalCredits}
        />

        <Row
          title="Calculated Credits"
          value={calculatedCredits}
        />

      </div>

      {/* Result */}

      <div className="mt-8">

        {matched ? (

          <div className="rounded-2xl border border-green-500 bg-green-500/15 p-5 sm:p-6">

            <h3 className="text-lg sm:text-xl font-bold text-green-400">
              ✅ Perfect!
            </h3>

            <p className="mt-2 text-sm sm:text-base leading-7 text-green-300">
              Your credit distribution is correct.
              You can continue to generate recommendations.
            </p>

          </div>

        ) : (

          <div className="rounded-2xl border border-red-500 bg-red-500/15 p-5 sm:p-6">

            <h3 className="text-lg sm:text-xl font-bold text-red-400">
              ⚠ Credit Mismatch
            </h3>

            <p className="mt-2 text-sm sm:text-base leading-7 text-red-300">
              Difference:
              <span className="font-semibold">
                {" "}
                {Math.abs(difference)} Credits
              </span>
            </p>

            <p className="mt-2 text-sm sm:text-base text-red-300">
              Please adjust the number of subjects until both credit
              values are equal.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

function Row({ title, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 px-5 py-4">

      <span className="text-sm sm:text-base text-gray-300">
        {title}
      </span>

      <span className="text-xl sm:text-2xl font-bold text-white">
        {value}
      </span>

    </div>
  );
}

export default CreditSummary;