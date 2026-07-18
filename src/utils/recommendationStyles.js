/* -------------------------------------------------------------------------- */
/* Grade Points */
/* -------------------------------------------------------------------------- */

export const GRADE_POINTS = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

/* -------------------------------------------------------------------------- */
/* Recommendation Styles */
/* -------------------------------------------------------------------------- */

export const STYLE_CONFIG = {

  /* ---------------------------------------------------------------------- */
  /* High Achievement                                                       */
  /* ---------------------------------------------------------------------- */

  high: {

    name: "High Achievement",

    // Highest priority subjects first
    creditPriority: [4, 3, 2],

    // Only these grades are allowed
    allowedGrades: ["S", "A"],

    // Initial grade for all subjects
    startGrade: "S",

    description:
      "Maximum performance using only S and A grades.",

  },

  /* ---------------------------------------------------------------------- */
  /* Balanced                                                               */
  /* ---------------------------------------------------------------------- */

  balanced: {

    name: "Balanced",

    creditPriority: [4, 3, 2],

    allowedGrades: ["S", "A", "B"],

    startGrade: "S",

    description:
      "Balanced combination of S, A and B grades.",

  },

  /* ---------------------------------------------------------------------- */
  /* Realistic                                                              */
  /* ---------------------------------------------------------------------- */

  realistic: {

  name: "Realistic",

  creditPriority: [3, 2, 4],

  // S is now allowed
  allowedGrades: ["S", "A", "B", "C"],

  // Start from the highest allowed grade
  startGrade: "S",

  description:
    "Realistic recommendation using S, A, B and C grades.",

},
  /* ---------------------------------------------------------------------- */
  /* Minimum Required                                                       */
  /* ---------------------------------------------------------------------- */

  minimum: {

  name: "Minimum Required",

  creditPriority: [2, 3, 4],

  // E is now included
  allowedGrades: ["S", "A", "B", "C", "D", "E"],

  startGrade: "S",

  description:
    "Lowest grades required while still achieving the target SGPA.",

},

};