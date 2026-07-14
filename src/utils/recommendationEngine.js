import { buildSubjects } from "./gradeCombinations";
import {
  STYLE_CONFIG,
  GRADE_POINTS,
} from "./recommendationStyles";

/* -------------------------------------------------------------------------- */
/* Create Engine State */
/* -------------------------------------------------------------------------- */

export function createEngineState(
  twoCredits,
  threeCredits,
  fourCredits,
  style = "balanced"
) {
  const subjects = buildSubjects(
    twoCredits,
    threeCredits,
    fourCredits
  );

  subjects.forEach((subject) => {
    subject.grade = "S";
  });

  return {
    style,
    subjects,
    config: STYLE_CONFIG[style] || STYLE_CONFIG.balanced,
  };
}

/* -------------------------------------------------------------------------- */
/* Total Credits */
/* -------------------------------------------------------------------------- */

export function totalCredits(subjects) {
  return subjects.reduce(
    (sum, subject) => sum + subject.credit,
    0
  );
}

/* -------------------------------------------------------------------------- */
/* Total Grade Points */
/* -------------------------------------------------------------------------- */

export function totalGradePoints(subjects) {
  return subjects.reduce(
    (sum, subject) =>
      sum +
      subject.credit *
      GRADE_POINTS[subject.grade],
    0
  );
}

/* -------------------------------------------------------------------------- */
/* Calculate SGPA */
/* -------------------------------------------------------------------------- */

export function calculateSGPA(subjects) {
  const credits = totalCredits(subjects);

  if (credits === 0) return 0;

  return totalGradePoints(subjects) / credits;
}

/* -------------------------------------------------------------------------- */
/* Grade Summary */
/* -------------------------------------------------------------------------- */

export function gradeSummary(subjects) {
  const summary = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  subjects.forEach((subject) => {
    summary[subject.grade]++;
  });

  return summary;
}

/* -------------------------------------------------------------------------- */
/* Order Subjects */
/* -------------------------------------------------------------------------- */

export function orderedSubjects(state) {

  const priority = state.config.creditPriority;

  const ordered = [...state.subjects].sort((a, b) => {

    const first =
      priority.indexOf(a.credit);

    const second =
      priority.indexOf(b.credit);

    if (first !== second)
      return first - second;

    return b.credit - a.credit;

  });

  // Alternate subject order to spread grade reductions
  const spread = [];

  let left = 0;
  let right = ordered.length - 1;

  while (left <= right) {

    spread.push(ordered[left]);

    left++;

    if (left <= right) {

      spread.push(ordered[right]);

      right--;

    }

  }

  return spread;

}

/* -------------------------------------------------------------------------- */
/* Downgrade Grade */
/* -------------------------------------------------------------------------- */

function downgradeGrade(grade) {
  switch (grade) {
    case "S":
      return "A";
    case "A":
      return "B";
    case "B":
      return "C";
    case "C":
      return "D";
    case "D":
      return "E";
    default:
      return null;
  }
}
function getMaxPass(style) {

  return (
    STYLE_CONFIG[style]?.maxPass ??
    STYLE_CONFIG.balanced.maxPass
  );

}

function canDowngrade(grade, pass) {
  switch (pass) {
    case 1:
      return grade === "S";

    case 2:
      return grade === "A";

    case 3:
      return grade === "B";

    case 4:
      return grade === "C";

    case 5:
      return grade === "D";

    default:
      return false;
  }
}
function shouldSkipSubject(subject, style) {

  switch (style) {

    case "high":

      return subject.credit === 4 &&
             subject.grade === "S";

    case "balanced":

      return false;

    case "realistic":

      return false;

    case "minimum":

      return false;

    default:

      return false;

  }

}

/* -------------------------------------------------------------------------- */
/* Recommendation Engine */
/* -------------------------------------------------------------------------- */

export function generateRecommendation(
  requiredSGPA,
  twoCredits,
  threeCredits,
  fourCredits,
  style = "balanced"
) {

  const state = createEngineState(
    twoCredits,
    threeCredits,
    fourCredits,
    style
  );

  const subjects = orderedSubjects(state);

  let currentSGPA = calculateSGPA(subjects);

  // Number of downgrade passes for each style
  const maxPass = getMaxPass(style);

  // Pass 1 : S -> A
  // Pass 2 : A -> B
  // Pass 3 : B -> C
  // Pass 4 : C -> D
  // Pass 5 : D -> E

  for (let pass = 1; pass <= maxPass; pass++) {

    let changed = true;

    while (changed) {

      changed = false;

      for (const subject of subjects) {
        if (shouldSkipSubject(subject, style))
           continue;

        // Only downgrade grades allowed in this pass
        if (!canDowngrade(subject.grade, pass))
          continue;

        const previousGrade = subject.grade;

        const next = downgradeGrade(subject.grade);

        if (!next)
          continue;

        subject.grade = next;

        const newSGPA = calculateSGPA(subjects);

        if (newSGPA >= requiredSGPA) {

          currentSGPA = newSGPA;
          changed = true;

        } else {

          subject.grade = previousGrade;

        }

      }

      // Stop if we have reached the target
      if (currentSGPA <= requiredSGPA + 0.01)
        break;

    }

  }

  return subjects;

}