function canChange(start: string, target: string): boolean {
  const n: number = start.length;
  let sId = 0,
    tId = 0;

  while (sId < n || tId < n) {
    // Skip underscores in start
    while (sId < n && start.charAt(sId) === "_") sId++;
    // Skip underscores in target
    while (tId < n && target.charAt(tId) === "_") tId++;

    // If both reach the end, transformation is valid
    if (sId === n && tId === n) return true;

    // If one reaches the end but the other doesn't, return false
    if (sId === n || tId === n) return false;

    // Check if characters match and follow movement rules
    if (
      start.charAt(sId) !== target.charAt(tId) ||
      (start.charAt(sId) === "L" && sId < tId) || // 'L' can only move left
      (start.charAt(sId) === "R" && sId > tId)    // 'R' can only move right
    ) {
      return false;
    }

    // Move both pointers
    sId++;
    tId++;
  }

  return true;
}
