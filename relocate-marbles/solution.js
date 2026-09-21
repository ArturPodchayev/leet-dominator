var relocateMarbles = function(nums, moveFrom, moveTo) {
  const marbles = {};
  nums.forEach(n => marbles[n] = true);
  for (let i = 0; i < moveFrom.length; i++) {
    delete marbles[moveFrom[i]];
    marbles[moveTo[i]] = true;
  }
  return Object.keys(marbles).map(n => Number(n));
};
