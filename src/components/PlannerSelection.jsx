import PlannerCard from "./PlannerCard";

function PlannerSelection() {
  return (
    <>

      {/* Heading */}

      <div className="text-center">

        <p className="text-blue-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
          Academic Planner
        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Choose Your Planner
        </h1>

        <p className="mt-6 max-w-3xl mx-auto px-2 text-sm sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400">
          Select the planner that best matches your academic goal and let our
          smart recommendation engine guide you toward academic success.
        </p>

      </div>

      {/* Planner Cards */}

      <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

        <PlannerCard
          icon="🎯"
          title="Overall CGPA Goal Planner"
          description="Plan semester by semester and discover exactly what grades you need to graduate with your desired CGPA."
          features={[
            "Current CGPA",
            "Completed Credits",
            "Target CGPA",
            "Semester-wise Planning",
            "S / A / B Grade Recommendation",
            "Predicted Final CGPA",
          ]}
          buttonText="Start Planning"
          route="/planner/overall"
        />

        <PlannerCard
          icon="📚"
          title="Semester GPA Planner"
          description="Calculate the grades required in your upcoming semester to achieve your target SGPA."
          features={[
            "Semester Credits",
            "2, 3 & 4 Credit Subjects",
            "Target SGPA",
            "Grade Distribution",
            "Required S, A & B Grades",
            "Predicted SGPA",
          ]}
          buttonText="Calculate SGPA"
          route="/planner/semester"
        />

      </div>

    </>
  );
}

export default PlannerSelection;