import {
  FaHome,
  FaChartLine,
  FaCalendarAlt,
  FaBullseye,
  FaCog,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import ProgressCard from "./ProgressCard";
import TrendChart from "./TrendChart";

function DashboardPreview() {
  return (
    <div className="w-[760px] rounded-[32px] border border-blue-900/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_0_80px_rgba(59,130,246,.18)] overflow-hidden">

      <div className="grid grid-cols-[70px_1fr]">

        {/* Sidebar */}

        <div className="bg-slate-950 border-r border-slate-800 flex flex-col items-center py-8 gap-8">

          <FaHome className="text-blue-500 text-xl" />
          <FaChartLine className="text-gray-500 hover:text-white text-xl cursor-pointer duration-300" />
          <FaCalendarAlt className="text-gray-500 hover:text-white text-xl cursor-pointer duration-300" />
          <FaBullseye className="text-gray-500 hover:text-white text-xl cursor-pointer duration-300" />
          <FaCog className="text-gray-500 hover:text-white text-xl cursor-pointer duration-300" />

        </div>

        {/* Content */}

        <div className="p-8">

          {/* Top Header */}

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Dashboard
              </h2>

              <p className="text-gray-400 mt-2">
                Welcome back, Sandeep! 👋
              </p>

            </div>

            <div className="flex items-center gap-5">

              <FaBell className="text-gray-400 text-xl cursor-pointer hover:text-white duration-300" />

              <FaUserCircle className="text-5xl text-blue-400" />

            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-4 gap-5 mt-8">

            <Card
              title="Current CGPA"
              value="8.50"
              color="text-blue-400"
            />

            <CreditCard />

            <Card
              title="Target CGPA"
              value="9.00"
              color="text-purple-400"
            />

            <Card
              title="Status"
              value="Yes ✓"
              color="text-green-400"
            />

          </div>

          {/* Analytics */}

          <div className="grid grid-cols-2 gap-5 mt-6">

            <ProgressCard />

            <TrendChart />

          </div>

          {/* Bottom Banner */}

          <div className="mt-6 bg-slate-800 rounded-2xl px-6 py-5 flex items-center gap-4">

            <div className="text-4xl">

              🚀

            </div>

            <div>

              <h3 className="text-white font-semibold text-lg">

                You're on track!

              </h3>

              <p className="text-gray-400">

                Keep maintaining your performance to reach
                your target CGPA.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({ title, value, color }) {
  return (

    <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 duration-300">

      <p className="text-gray-400 text-sm">

        {title}

      </p>

      <h2 className={`mt-5 text-4xl font-bold ${color}`}>

        {value}

      </h2>

    </div>

  );
}

function CreditCard() {
  return (

    <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 duration-300">

      <p className="text-gray-400 text-sm">

        Credits

      </p>

      <h2 className="mt-5 text-3xl font-bold text-white">

        80<span className="text-gray-500"> / 160</span>

      </h2>

      <div className="mt-5 h-2 bg-slate-700 rounded-full">

        <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

      </div>

      <p className="text-xs text-gray-400 mt-2">

        50% Completed

      </p>

    </div>

  );
}

export default DashboardPreview;