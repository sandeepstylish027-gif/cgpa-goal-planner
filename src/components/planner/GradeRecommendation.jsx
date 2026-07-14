import GradeSection from "./GradeSection";

function GradeRecommendation({ recommendations }) {

  const two = recommendations.filter(
    s => s.credit === 2
  );

  const three = recommendations.filter(
    s => s.credit === 3
  );

  const four = recommendations.filter(
    s => s.credit === 4
  );

  return (

    <div>

      {two.length > 0 && (
        <GradeSection
          title="2 Credit Subjects"
          grades={two.map(s => s.grade)}
        />
      )}

      {three.length > 0 && (
        <GradeSection
          title="3 Credit Subjects"
          grades={three.map(s => s.grade)}
        />
      )}

      {four.length > 0 && (
        <GradeSection
          title="4 Credit Subjects"
          grades={four.map(s => s.grade)}
        />
      )}

    </div>

  );

}

export default GradeRecommendation;