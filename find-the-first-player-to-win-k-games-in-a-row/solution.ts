function findWinningPlayer(skills: number[], k: number): number {
  let que: number[] = [];
  let b = skills[0], cur = 0;
  for (let i = 1; i < skills.length; i++) {
    if (b < skills[i]) {
      cur = 1;
      b = skills[i];
    } else {
      cur++;
    }
    if (cur === k) break;
  }
  return skills.findIndex(v => b === v);
};
