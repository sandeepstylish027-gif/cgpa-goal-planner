import {
  FaUserGraduate,
  FaBookOpen,
  FaCalculator,
  FaTrophy,
} from "react-icons/fa";

import StepCard from "./StepCard";

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-32">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <p className="text-blue-400 uppercase tracking-[6px] text-center font-semibold">
          HOW IT WORKS
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-4">
          Plan in 4 Simple Steps
        </h2>

        <p className="text-gray-400 text-center mt-5 text-lg">
          Achieve your target CGPA with a simple step-by-step process.
        </p>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          <div className="grid lg:grid-cols-4 gap-12 relative">

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