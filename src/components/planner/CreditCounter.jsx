function CreditCounter({
  title,
  value,
  setValue,
}) {

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increase = () => {
    setValue(value + 1);
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-700
        bg-slate-800
        p-5
        sm:p-6
        transition-all
        duration-300
        hover:border-blue-500/60
      "
    >

      {/* Title */}

      <p className="text-center text-sm sm:text-base font-medium text-gray-300">
        {title}
      </p>

      {/* Counter */}

      <div className="mt-6 flex items-center justify-between gap-4">

        <button
          onClick={decrease}
          className="
            flex
            h-11
            w-11
            sm:h-12
            sm:w-12
            items-center
            justify-center
            rounded-xl
            bg-slate-700
            text-xl
            sm:text-2xl
            text-white
            transition-all
            duration-300
            hover:bg-red-500
            active:scale-95
          "
        >
          −
        </button>

        <h2 className="min-w-[48px] text-center text-3xl sm:text-4xl font-bold text-white">
          {value}
        </h2>

        <button
          onClick={increase}
          className="
            flex
            h-11
            w-11
            sm:h-12
            sm:w-12
            items-center
            justify-center
            rounded-xl
            bg-slate-700
            text-xl
            sm:text-2xl
            text-white
            transition-all
            duration-300
            hover:bg-green-500
            active:scale-95
          "
        >
          +
        </button>

      </div>

    </div>
  );
}

export default CreditCounter;