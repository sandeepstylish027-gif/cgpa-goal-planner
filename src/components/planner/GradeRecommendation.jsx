import GradeSection from "./GradeSection";

function GradeRecommendation({ recommendations }) {

  const two = recommendations.filter(
    (s) => s.credit === 2
  );

  const three = recommendations.filter(
    (s) => s.credit === 3
  );

  const four = recommendations.filter(
    (s) => s.credit === 4
  );

  return (

    <section className="mt-10">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Grade Recommendations
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Based on your selected recommendation strategy, here are the
          suggested grades for each subject category.
        </p>

      </div>

      {/* Grade Sections */}

      <div className="space-y-8">

        {two.length > 0 && (
          <GradeSection
            title="2 Credit Subjects"
            grades={two.map((s) => s.grade)}
          />
        )}

        {three.length > 0 && (
          <GradeSection
            title="3 Credit Subjects"
            grades={three.map((s) => s.grade)}
          />
        )}

        {four.length > 0 && (
          <GradeSection
            title="4 Credit Subjects"
            grades={four.map((s) => s.grade)}
          />
        )}

      </div>

    </section>

  );

}

export default GradeRecommendation;