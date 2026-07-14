function ProgressCard() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">

      <h3 className="text-white font-semibold mb-6">
        CGPA Progress
      </h3>

      <div className="flex justify-center">

        <div className="relative w-40 h-40">

          <svg
            className="w-40 h-40 -rotate-90"
            viewBox="0 0 160 160"
          >

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#1e293b"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="408"
              strokeDashoffset="110"
            />

            <defs>

              <linearGradient id="gradient">

                <stop offset="0%" stopColor="#3b82f6"/>

                <stop offset="100%" stopColor="#8b5cf6"/>

              </linearGradient>

            </defs>

          </svg>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h2 className="text-4xl font-bold text-white">

              73%

            </h2>

            <p className="text-gray-400 text-sm">

              Goal Progress

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;