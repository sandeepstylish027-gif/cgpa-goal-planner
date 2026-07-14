import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from "recharts";

const data = [
  { sem: "S1", cgpa: 7.2 },
  { sem: "S2", cgpa: 7.8 },
  { sem: "S3", cgpa: 8.0 },
  { sem: "S4", cgpa: 8.5 },
  { sem: "S5", cgpa: 8.7 },
  { sem: "S6", cgpa: 9.0 },
];

function TrendChart() {
  return (

    <div className="bg-slate-800 rounded-2xl p-6">

      <h3 className="text-white font-semibold mb-6">

        CGPA Trend

      </h3>

      <div className="h-48">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="sem" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="cgpa"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default TrendChart;