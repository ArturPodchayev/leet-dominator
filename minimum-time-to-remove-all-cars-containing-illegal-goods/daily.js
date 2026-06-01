const minimumCost = (cost) => 
  cost
    .sort((b, a) => a - b)
    .filter((x, i) => i % 3 !== 2)
    .reduce((a, x) => a + x, 0)
