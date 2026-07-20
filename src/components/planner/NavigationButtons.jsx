function NavigationButtons({
  backStep,
  nextStep,
  nextText = "Next →",
  showBack = false,
}) {
  return (
    <div className="mt-10 sm:mt-12 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">

      {showBack ? (
        <button
          onClick={backStep}
          className="
            w-full
            sm:w-auto
            px-6
            py-3.5
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            text-white
            font-medium
            transition-all
            duration-300
            hover:bg-slate-800
            hover:border-blue-500
          "
        >
          ← Back
        </button>
      ) : (
        <div className="hidden sm:block" />
      )}

      <button
        onClick={nextStep}
        className="
          w-full
          sm:w-auto
          px-8
          py-3.5
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          text-white
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-blue-500/30
        "
      >
        {nextText}
      </button>

    </div>
  );
}

export default NavigationButtons;