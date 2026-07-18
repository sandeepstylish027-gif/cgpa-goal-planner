import { buildSubjects } from "./gradeCombinations";
import {
  STYLE_CONFIG,
  GRADE_POINTS,
} from "./recommendationStyles";

/* ===========================================================
   CREATE SUBJECTS
=========================================================== */

function createSubjects(
  twoCredits,
  threeCredits,
  fourCredits,
  style
) {
  const config =
    STYLE_CONFIG[style] ??
    STYLE_CONFIG.balanced;

  const subjects = buildSubjects(
    twoCredits,
    threeCredits,
    fourCredits
  );

  subjects.forEach(subject => {
    subject.grade = config.startGrade;
  });

  return subjects;
}

/* ===========================================================
   ORDER SUBJECTS
=========================================================== */

function orderSubjects(subjects, style) {

  const priority =
    STYLE_CONFIG[style].creditPriority;

  return [...subjects].sort((a, b) => {

    const pa =
      priority.indexOf(a.credit);

    const pb =
      priority.indexOf(b.credit);

    if (pa !== pb) {
      return pa - pb;
    }

    return a.id - b.id;

  });

}

/* ===========================================================
   BASIC CALCULATIONS
=========================================================== */

function totalCredits(subjects) {

  return subjects.reduce(
    (sum, s) => sum + s.credit,
    0
  );

}



function calculateSGPA(
  points,
  credits
) {

  return Number(
    (points / credits).toFixed(2)
  );

}
/* ===========================================================
   MAXIMUM POSSIBLE REMAINING POINTS
=========================================================== */



function cloneSubjects(subjects) {

  return subjects.map(subject => ({
    ...subject,
  }));

}

/* ===========================================================
   ALLOWED GRADES
=========================================================== */

function allowedGrades(style) {

  return (
    STYLE_CONFIG[style]
      ?.allowedGrades ??
    STYLE_CONFIG.balanced.allowedGrades
  );

}

/* ===========================================================
   GRADE COUNTS
=========================================================== */

function countGrades(subjects) {

  const counts = {

    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,

  };

  for (const subject of subjects) {
    counts[subject.grade]++;
  }

  return counts;

}

/* ===========================================================
   SCORE A SOLUTION
=========================================================== */

/* ===========================================================
   SOLUTION SCORE
=========================================================== */

function evaluate(subjects, style) {

  const c = countGrades(subjects);

  switch (style) {

    case "high":
      return [
        c.S,
        -c.A,
      ];

    case "balanced":
      return [
        c.S,
        -c.A,
        -c.B,
      ];

    case "realistic":
      return [
        c.S,
        -c.A,
        -c.B,
        -c.C,
      ];

    case "minimum":
      return [
        c.S,
        -c.A,
        -c.B,
        -c.C,
        -c.D,
        -c.E,
      ];

    default:
      return [
        c.S,
        -c.A,
      ];

  }

}

/* ===========================================================
   BEST SOLUTION
=========================================================== */

function createBestSolution() {

  return {

    subjects: [],

    sgpa: 0,

    difference:
      Number.MAX_SAFE_INTEGER,

    score:
      Number.MAX_SAFE_INTEGER,

  };

}
/* ===========================================================
   SHOULD REPLACE BEST
=========================================================== */

/* ===========================================================
   COMPARE TWO SCORES
=========================================================== */

function compareScore(a, b) {

  const length = Math.max(
    a.length,
    b.length
  );

  for (let i = 0; i < length; i++) {

    const left = a[i] ?? 0;
    const right = b[i] ?? 0;

    if (left < right) return true;
    if (left > right) return false;

  }

  return false;

}

/* ===========================================================
   SHOULD REPLACE BEST
=========================================================== */

function shouldReplaceBest(
  difference,
  score,
  best
) {

  const EPSILON = 1e-6;

  if (
    difference <
    best.difference - EPSILON
  ) {
    return true;
  }

  if (
    difference >
    best.difference + EPSILON
  ) {
    return false;
  }

  return compareScore(
    score,
    best.score
  );

}
/* ===========================================================
   UPDATE BEST
=========================================================== */

function updateBest(
  subjects,
  currentPoints,
  totalCredit,
  requiredSGPA,
  style,
  best
) {

  const sgpa =
    calculateSGPA(
      currentPoints,
      totalCredit
    );

  if (sgpa < requiredSGPA)
    return;

  const difference =
    sgpa - requiredSGPA;

  const score =
  evaluate(subjects, style);
  if (
    shouldReplaceBest(
      difference,
      score,
      best
    )
  ) {

    best.subjects =
      cloneSubjects(subjects);

    best.sgpa =
      sgpa;

    best.difference =
      difference;

    best.score =
      score;

  }

}

/* ===========================================================
   MAX POSSIBLE POINTS
=========================================================== */


/* ===========================================================
   DFS + BRANCH & BOUND
=========================================================== */

/* ===========================================================
   DFS + BRANCH & BOUND
=========================================================== */

function dfs(
  index,
  subjects,
  currentPoints,
  totalCredit,
  requiredSGPA,
  grades,
  style,
  best
) {

  // Finished assigning grades
  if (index === subjects.length) {

    updateBest(
      subjects,
      currentPoints,
      totalCredit,
      requiredSGPA,
      style,
      best
    );

    return;
  }

  // Since remaining subjects are still at the
  // highest grade, currentPoints is already the
  // maximum possible score for this branch.
  if (
    calculateSGPA(
      currentPoints,
      totalCredit
    ) < requiredSGPA
  ) {
    return;
  }

  const subject = subjects[index];

  const originalGrade = subject.grade;

  const originalPoints =
    subject.credit *
    GRADE_POINTS[originalGrade];

  for (const grade of grades) {

    const newPoints =
      subject.credit *
      GRADE_POINTS[grade];

    subject.grade = grade;

    dfs(
      index + 1,
      subjects,
      currentPoints - originalPoints + newPoints,
      totalCredit,
      requiredSGPA,
      grades,
      style,
      best
    );

  }

  subject.grade = originalGrade;

}
/* ===========================================================
   PUBLIC API
=========================================================== */

export function optimizeRecommendation({
  requiredSGPA,
  twoCredits,
  threeCredits,
  fourCredits,
  style,
}) {

  const subjects = createSubjects(
    twoCredits,
    threeCredits,
    fourCredits,
    style
  );

  const orderedSubjects = orderSubjects(
    subjects,
    style
  );

  const credits = totalCredits(
    orderedSubjects
  );

  const grades = allowedGrades(
    style
  );

  const highestGrade = grades[0];

  const startingPoints =
    orderedSubjects.reduce(
      (sum, subject) =>
        sum +
        subject.credit *
          GRADE_POINTS[
            highestGrade
          ],
      0
    );

  const best =
    createBestSolution();

  dfs(
  0,
  orderedSubjects,
  startingPoints,
  credits,
  requiredSGPA,
  grades,
  style,
  best
);

  if (best.subjects.length === 0) {
  return null;
}

return best.subjects;
}