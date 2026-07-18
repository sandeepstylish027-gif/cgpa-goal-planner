// ==================================================
// Grade Points Mapping
// ==================================================

export const GRADE_POINTS = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

// ==================================================
// Required SGPA Calculator
// Calculates the SGPA required in the NEXT semester
// to achieve the target CGPA after that semester.
// ==================================================

export function calculateRequiredSGPA(
  currentCGPA,
  completedCredits,
  targetCGPA,
  semesterCredits
) {
  // ---------------------------------
  // Convert all inputs to numbers
  // ---------------------------------

  currentCGPA = Number(currentCGPA);
  completedCredits = Number(completedCredits);
  targetCGPA = Number(targetCGPA);
  semesterCredits = Number(semesterCredits);

  // ---------------------------------
  // Validate Inputs
  // ---------------------------------

  if (
    Number.isNaN(currentCGPA) ||
    Number.isNaN(completedCredits) ||
    Number.isNaN(targetCGPA) ||
    Number.isNaN(semesterCredits)
  ) {
    return null;
  }

  if (
    currentCGPA < 0 ||
    currentCGPA > 10 ||
    targetCGPA < 0 ||
    targetCGPA > 10 ||
    completedCredits < 0 ||
    semesterCredits <= 0
  ) {
    return null;
  }

  // ---------------------------------
  // Grade Points Already Earned
  // ---------------------------------

  const earnedGradePoints =
    currentCGPA * completedCredits;

  // ---------------------------------
  // Total Credits After Current Semester
  // ---------------------------------

  const totalCreditsAfterSemester =
    completedCredits + semesterCredits;

  // ---------------------------------
  // Grade Points Needed To Reach Target
  // ---------------------------------

  const targetGradePoints =
    targetCGPA * totalCreditsAfterSemester;

  // ---------------------------------
  // Required SGPA
  // ---------------------------------

  const requiredSGPA =
    (targetGradePoints - earnedGradePoints) /
    semesterCredits;

  // ---------------------------------
  // Impossible Target
  // ---------------------------------

  if (requiredSGPA > 10) {
    return null;
  }

  // Already Above Target
  if (requiredSGPA <= 0) {
    return 0;
  }

  return Number(requiredSGPA.toFixed(2));
}