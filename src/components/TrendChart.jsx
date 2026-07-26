function TrendChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-6">
        CGPA Trend
      </h3>

      <div className="h-48 flex items-center justify-center">
        <svg
          viewBox="0 0 300 160"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid */}
          <line x1="20" y1="140" x2="280" y2="140" stroke="#475569" />
          <line x1="20" y1="20" x2="20" y2="140" stroke="#475569" />

          {/* Trend Line */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            points="
              20,120
              70,105
              120,90
              170,70
              220,45
              280,25
            "
          />

          {/* Points */}
          <circle cx="20" cy="120" r="4" fill="#3b82f6" />
          <circle cx="70" cy="105" r="4" fill="#3b82f6" />
          <circle cx="120" cy="90" r="4" fill="#3b82f6" />
          <circle cx="170" cy="70" r="4" fill="#3b82f6" />
          <circle cx="220" cy="45" r="4" fill="#3b82f6" />
          <circle cx="280" cy="25" r="4" fill="#3b82f6" />
        </svg>
      </div>
    </div>
  );
}

export default TrendChart;