function TrendChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-6">
        CGPA Trend
      </h3>

      <div className="h-48">
        <svg
          viewBox="0 0 300 160"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Axes */}
          <line x1="30" y1="140" x2="280" y2="140" stroke="#475569" />
          <line x1="30" y1="20" x2="30" y2="140" stroke="#475569" />

          {/* Trend Line */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            points="
              30,120
              70,105
              110,90
              150,70
              200,45
              270,25
            "
          />

          {/* Points */}
          <circle cx="30" cy="120" r="3" fill="#3b82f6" />
          <circle cx="70" cy="105" r="3" fill="#3b82f6" />
          <circle cx="110" cy="90" r="3" fill="#3b82f6" />
          <circle cx="150" cy="70" r="3" fill="#3b82f6" />
          <circle cx="200" cy="45" r="3" fill="#3b82f6" />
          <circle cx="270" cy="25" r="3" fill="#3b82f6" />

          {/* X-Axis Labels */}
          <text x="30" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S1</text>
          <text x="70" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S2</text>
          <text x="110" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S3</text>
          <text x="150" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S4</text>
          <text x="200" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S5</text>
          <text x="270" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">S6</text>
        </svg>
      </div>
    </div>
  );
}

export default TrendChart;