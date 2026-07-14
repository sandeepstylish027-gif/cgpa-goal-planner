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
    <div className="bg-slate-800 rounded-2xl p-6">

      <p className="text-gray-300 font-medium">
        {title}
      </p>

      <div className="flex items-center justify-between mt-6">

        <button
          onClick={decrease}
          className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-red-500 transition text-2xl text-white"
        >
          −
        </button>

        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        <button
          onClick={increase}
          className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-green-500 transition text-2xl text-white"
        >
          +
        </button>

      </div>

    </div>
  );
}

export default CreditCounter;