// Grade Points Mapping

export const GRADE_POINTS = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

// --------------------------------------------------
// Calculate Grade Points Already Earned
// --------------------------------------------------

export function calculateCurrentGradePoints(
  currentCGPA,
  completedCredits
) {
  return currentCGPA * completedCredits;
}

// --------------------------------------------------
// Total Grade Points Needed
// --------------------------------------------------

export function calculateTargetGradePoints(
  targetCGPA,
  degreeCredits
) {
  return targetCGPA * degreeCredits;
}

// --------------------------------------------------
// Remaining Credits
// --------------------------------------------------

export function calculateRemainingCredits(
  degreeCredits,
  completedCredits
) {
  return degreeCredits - completedCredits;
}

// --------------------------------------------------
// Required SGPA
// --------------------------------------------------

export function calculateRequiredSGPA(
  currentCGPA,
  completedCredits,
  targetCGPA,
  degreeCredits
) {

  const earned =
    calculateCurrentGradePoints(
      currentCGPA,
      completedCredits
    );

  const required =
    calculateTargetGradePoints(
      targetCGPA,
      degreeCredits
    );

  const remainingCredits =
    calculateRemainingCredits(
      degreeCredits,
      completedCredits
    );

  if (remainingCredits <= 0) return 0;

  return (
    (required - earned) /
    remainingCredits
  );
  console.log(
  calculateRequiredSGPA(
    8.5,
    80,
    9.0,
    160
  )
);
}