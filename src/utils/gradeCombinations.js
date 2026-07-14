// Build subject list from user input

export function buildSubjects(
  twoCredits,
  threeCredits,
  fourCredits
) {

  const subjects = [];

  let id = 1;

  // 2-credit subjects
  for (let i = 0; i < twoCredits; i++) {
    subjects.push({
      id: id++,
      credit: 2,
      grade: "S",
    });
  }

  // 3-credit subjects
  for (let i = 0; i < threeCredits; i++) {
    subjects.push({
      id: id++,
      credit: 3,
      grade: "S",
    });
  }

  // 4-credit subjects
  for (let i = 0; i < fourCredits; i++) {
    subjects.push({
      id: id++,
      credit: 4,
      grade: "S",
    });
  }

  return subjects;
}