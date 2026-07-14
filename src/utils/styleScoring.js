// Style Scoring Engine

const STYLE_WEIGHTS = {

  high: {
    S: 10,
    A: 8,
    B: 5,
    C: 3,
    D: 1,
    E: 0,
  },

  balanced: {
    S: 8,
    A: 10,
    B: 7,
    C: 4,
    D: 2,
    E: 0,
  },

  realistic: {
    S: 7,
    A: 10,
    B: 9,
    C: 6,
    D: 3,
    E: 1,
  },

  minimum: {
    S: 2,
    A: 4,
    B: 6,
    C: 8,
    D: 10,
    E: 5,
  },

};

// Score a recommendation

export function scoreRecommendation(
  subjects,
  style = "balanced"
) {

  const weights =
    STYLE_WEIGHTS[style];

  let score = 0;

  subjects.forEach(subject => {

    score +=
      weights[subject.grade] *
      subject.credit;

  });

  return score;

}

// Count grades

export function countGrades(subjects) {

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