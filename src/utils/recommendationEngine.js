import { buildSubjects } from "./gradeCombinations";
import {
  STYLE_CONFIG,
  GRADE_POINTS,
} from "./recommendationStyles";

/* ===========================================================
   CREATE SUBJECT LIST
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
   BASIC CALCULATIONS
=========================================================== */

function totalCredits(subjects) {

  return subjects.reduce(
    (sum, subject) => sum + subject.credit,
    0
  );

}

function totalGradePoints(subjects) {

  return subjects.reduce(
    (sum, subject) =>
      sum +
      subject.credit *
      (GRADE_POINTS[subject.grade] ?? 0),
    0
  );

}

function calculateSGPA(subjects) {

  const credits = totalCredits(subjects);

  if (credits === 0) {
    return 0;
  }

  return Number(
    (
      totalGradePoints(subjects) /
      credits
    ).toFixed(2)
  );

}

/* ===========================================================
   CLONE
=========================================================== */

function cloneSubjects(subjects) {

  return subjects.map(subject => ({
    ...subject,
  }));

}

/* ===========================================================
   GRADE SUMMARY
=========================================================== */

export function gradeSummary(subjects) {

  const summary = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  subjects.forEach(subject => {
    summary[subject.grade]++;
  });

  return summary;

}

/* ===========================================================
   ORDER SUBJECTS
=========================================================== */

function orderSubjects(subjects, style) {

  const priority =
    STYLE_CONFIG[style].creditPriority;

  return [...subjects].sort((a, b) => {

    const pa = priority.indexOf(a.credit);
    const pb = priority.indexOf(b.credit);

    if (pa !== pb) {
      return pa - pb;
    }

    // Keep a stable order for equal-credit subjects
    return a.id - b.id;

  });

}

/* ===========================================================
   ALLOWED GRADE HELPERS
=========================================================== */

function getAllowedGrades(style) {

  return (
    STYLE_CONFIG[style]?.allowedGrades ??
    STYLE_CONFIG.balanced.allowedGrades
  );

}

function getNextGrade(currentGrade, allowedGrades) {

  const index =
    allowedGrades.indexOf(currentGrade);

  if (index === -1) {
    return null;
  }

  if (index === allowedGrades.length - 1) {
    return null;
  }

  return allowedGrades[index + 1];

}
/* ===========================================================
   BEST SOLUTION
=========================================================== */

function createBestSolution(subjects) {

  return {

    difference: Number.MAX_SAFE_INTEGER,

    sgpa: calculateSGPA(subjects),

    subjects: cloneSubjects(subjects),

  };

}

function calculateDifference(
  sgpa,
  requiredSGPA
) {

  if (sgpa < requiredSGPA) {
    return Number.MAX_SAFE_INTEGER;
  }

  return sgpa - requiredSGPA;

}

function updateBestSolution(
  best,
  subjects,
  sgpa,
  requiredSGPA
) {

  const difference = calculateDifference(
    sgpa,
    requiredSGPA
  );

  if (difference < best.difference) {

    best.difference = difference;

    best.sgpa = sgpa;

    best.subjects = cloneSubjects(subjects);

  }

}

/* ===========================================================
   TRY A SINGLE DOWNGRADE
=========================================================== */

function tryDowngrade(
  subject,
  subjects,
  allowedGrades,
  requiredSGPA,
  best
) {

  const nextGrade = getNextGrade(
    subject.grade,
    allowedGrades
  );

  if (!nextGrade) {
    return false;
  }

  const previousGrade = subject.grade;

  subject.grade = nextGrade;

  const sgpa = calculateSGPA(subjects);

  if (sgpa >= requiredSGPA) {

    updateBestSolution(
      best,
      subjects,
      sgpa,
      requiredSGPA
    );

    return true;

  }

  // Restore previous grade
  subject.grade = previousGrade;

  return false;

}
/* ===========================================================
   SOLUTION COMPARISON
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

function isBetterSolution(
  candidateSubjects,
  candidateSGPA,
  currentBest,
  requiredSGPA
) {
  if (candidateSGPA < requiredSGPA) {
    return false;
  }

  const candidateDifference =
    candidateSGPA - requiredSGPA;

  if (
    candidateDifference <
    currentBest.difference - 1e-9
  ) {
    return true;
  }

  if (
    Math.abs(
      candidateDifference -
      currentBest.difference
    ) > 1e-9
  ) {
    return false;
  }

  const candidateCounts =
    countGrades(candidateSubjects);

  const bestCounts =
    countGrades(currentBest.subjects);

  // Fewer unnecessary S grades
  if (
    candidateCounts.S <
    bestCounts.S
  ) {
    return true;
  }

  if (
    candidateCounts.S >
    bestCounts.S
  ) {
    return false;
  }

  // Prefer more A grades
  if (
    candidateCounts.A >
    bestCounts.A
  ) {
    return true;
  }

  if (
    candidateCounts.A <
    bestCounts.A
  ) {
    return false;
  }

  return false;
}

/* ===========================================================
   GREEDY OPTIMIZATION ENGINE
=========================================================== */

function optimizeRecommendation(
  requiredSGPA,
  twoCredits,
  threeCredits,
  fourCredits,
  style
) {

  const subjects = orderSubjects(
    createSubjects(
      twoCredits,
      threeCredits,
      fourCredits,
      style
    ),
    style
  );

  const allowedGrades = getAllowedGrades(style);

  const best = createBestSolution(subjects);

  const totalCreditsValue = totalCredits(subjects);

  function dfs(index) {

    const currentSGPA = calculateSGPA(subjects);

    // If all subjects have been assigned
    if (index === subjects.length) {

      if (
        isBetterSolution(
          subjects,
          currentSGPA,
          best,
          requiredSGPA
        )
      ) {

        best.subjects = cloneSubjects(subjects);

        best.sgpa = currentSGPA;

        best.difference =
          currentSGPA - requiredSGPA;

      }

      return;

    }

    const subject = subjects[index];

    for (const grade of allowedGrades) {

      subject.grade = grade;

      const currentPoints =
        totalGradePoints(subjects);

      // ---------- Branch & Bound ----------

      let maxPossiblePoints = currentPoints;

      for (
        let i = index + 1;
        i < subjects.length;
        i++
      ) {

        maxPossiblePoints +=
          subjects[i].credit *
          GRADE_POINTS[
            allowedGrades[0]
          ];

      }

      const maxPossibleSGPA =
        maxPossiblePoints /
        totalCreditsValue;

      // Even giving every remaining subject the
      // highest grade cannot reach target
      if (
        maxPossibleSGPA <
        requiredSGPA
      ) {
        continue;
      }

      dfs(index + 1);

    }

  }

  dfs(0);

  return best.subjects;

}
/* ===========================================================
   VALIDATE INPUT
=========================================================== */

function isValidRequiredSGPA(requiredSGPA) {

  if (!Number.isFinite(requiredSGPA)) {
    return false;
  }

  if (requiredSGPA <= 0) {
    return false;
  }

  if (requiredSGPA > 10) {
    return false;
  }

  return true;

}
/* ===========================================================
   BUILD RECOMMENDATION
=========================================================== */

function buildRecommendation(
  requiredSGPA,
  twoCredits,
  threeCredits,
  fourCredits,
  style
) {

  return optimizeRecommendation(
    requiredSGPA,
    twoCredits,
    threeCredits,
    fourCredits,
    style
  );

}
/* ===========================================================
   PUBLIC API
=========================================================== */

export function generateRecommendation(

  requiredSGPA,

  twoCredits,

  threeCredits,

  fourCredits,

  style = "balanced"

) {

  // Validate required SGPA
  if (!isValidRequiredSGPA(requiredSGPA)) {
    return [];
  }

  // Generate recommendation
  const recommendation = buildRecommendation(

    requiredSGPA,

    twoCredits,

    threeCredits,

    fourCredits,

    style

  );
  if (recommendation === null) {
  return [];
}

  // Keep the order produced by the optimization engine
  return recommendation;

}

/* ===========================================================
   RECOMMENDATION STATISTICS
=========================================================== */

export function recommendationStatistics(subjects) {

  const expectedSGPA = Number(
    calculateSGPA(subjects).toFixed(2)
  );

  return {

    totalCredits:
      totalCredits(subjects),

    totalGradePoints:
      totalGradePoints(subjects),

    expectedSGPA,

    summary:
      gradeSummary(subjects),

  };

}
/* ===========================================================
   DEBUG (OPTIONAL)
=========================================================== */

export function printRecommendation(subjects) {

  console.table(

    subjects.map(subject => ({

      Subject: subject.id,

      Credit: subject.credit,

      Grade: subject.grade,

      GradePoint:
        GRADE_POINTS[subject.grade],

      Points:
        subject.credit *
        GRADE_POINTS[subject.grade],

    }))

  );

}