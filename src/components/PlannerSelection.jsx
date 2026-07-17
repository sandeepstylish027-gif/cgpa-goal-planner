import PlannerCard from "./PlannerCard";

function PlannerSelection() {
  return (
    <>

      {/* Heading */}

      <p className="text-blue-400 uppercase tracking-[6px] text-center font-semibold">
        Academic Planner
      </p>

      <h1 className="text-5xl md:text-6xl font-bold text-center text-white mt-5">
        Choose Your Planner
      </h1>

      <p className="text-gray-400 text-center mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-8">
        Select the planner that best matches your academic goal and let our smart recommendation engine guide you toward success.
      </p>

      {/* Planner Cards */}

      <div className="grid lg:grid-cols-2 gap-10 mt-20">

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