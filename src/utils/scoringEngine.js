// Calculate total semester credits

export function calculateTotalCredits(subjects) {
  return subjects.reduce(
    (total, subject) => total + subject.credit,
    0
  );
}

// Calculate total grade points

const gradePoints = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

export function calculateGradePoints(subjects) {

  return subjects.reduce((total, subject) => {

    return (
      total +
      subject.credit *
        gradePoints[subject.grade]
    );

  }, 0);

}

// Calculate SGPA

export function calculateSGPA(subjects) {

  const totalCredits =
    calculateTotalCredits(subjects);

  const totalPoints =
    calculateGradePoints(subjects);

  return totalPoints / totalCredits;

}

// Check target

export function reachesTarget(
  subjects,
  requiredSGPA
) {

  return (
    calculateSGPA(subjects) >= requiredSGPA
  );

}