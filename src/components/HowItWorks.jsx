import {
  FaUserGraduate,
  FaBookOpen,
  FaCalculator,
  FaTrophy,
} from "react-icons/fa";

import StepCard from "./StepCard";

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24 lg:py-32">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-blue-400 uppercase tracking-[4px] sm:tracking-[6px] font-semibold text-xs sm:text-sm">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Plan in 4 Simple Steps
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 leading-7">
            Achieve your target CGPA with an easy step-by-step planning process.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-14 sm:mt-16 lg:mt-24">

          {/* Desktop Timeline */}

          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative">

            <StepCard
              number="1"
              icon={<FaUserGraduate />}
              title="Current CGPA"
              description="Enter your present CGPA and completed credits."
              color="bg-purple-500/20 text-purple-400"
            />

            <StepCard
              number="2"
              icon={<FaBookOpen />}
              title="Semesters"
              description="Choose the number of completed semesters."
              color="bg-blue-500/20 text-blue-400"
            />

            <StepCard
              number="3"
              icon={<FaCalculator />}
              title="Remaining Credits"
              description="Provide your remaining credits and subjects."
              color="bg-green-500/20 text-green-400"
            />

            <StepCard
              number="4"
              icon={<FaTrophy />}
              title="Required Grades"
              description="Receive personalized grade recommendations."
              color="bg-orange-500/20 text-orange-400"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;