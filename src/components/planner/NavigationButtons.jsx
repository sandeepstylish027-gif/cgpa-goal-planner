function NavigationButtons({
  backStep,
  nextStep,
  nextText = "Next →",
  showBack = false,
}) {
  return (
    <div className="flex justify-between mt-12">

      {showBack ? (
        <button
          onClick={backStep}
          className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition"
        >
          ← Back
        </button>
      ) : (
        <div></div>
      )}

      <button
        onClick={nextStep}
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
      >
        {nextText}
      </button>

    </div>
  );
}

export default NavigationButtons;