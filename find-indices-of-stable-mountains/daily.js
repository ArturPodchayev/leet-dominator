/**
 * Determines if Alice wins the Sum Game by checking balance possibilities.
 * @intuition Alice wins if Bob cannot force the sums of the two halves to be equal after replacing all '?'. This happens if the number of '?' is odd (Alice gets the last move) or if the initial difference in sums cannot be compensated by the difference in '?' counts (since each pair of '?' can adjust the difference by a multiple of 9).
 * @approach Iterate through the string, calculating the initial sum difference (`sumDifference = leftSum - rightSum`) and the count difference (`questionMarkDifference = leftQuestionMarks - rightQuestionMarks`) between the halves. If the total '?' count is odd, Alice wins. Otherwise (if the count is even), Bob wins if and only if `2 * sumDifference === -9 * questionMarkDifference`. Therefore, Alice wins if this condition is false.
 * @complexity
 *   Time: O(n) - Single pass through the string.
 *   Space: O(1) - Constant extra space.
 * @param {string} num The input string containing digits and '?'.
 * @returns {boolean} True if Alice wins, false otherwise.
 */
const sumGame = (num) => {
  const n = num.length
  let leftQuestionMarks = 0
  let rightQuestionMarks = 0
  let leftSum = 0
  let rightSum = 0
  const mid = n / 2

  // Calculate sum and question mark counts for the left half
  for (let i = 0; i < mid; ++i) {
    if (num[i] === '?') {
      leftQuestionMarks++
    } else {
      leftSum += Number(num[i])
    }
  }

  // Calculate sum and question mark counts for the right half
  for (let i = mid; i < n; ++i) {
    if (num[i] === '?') {
      rightQuestionMarks++
    } else {
      rightSum += Number(num[i])
    }
  }

  const totalQuestionMarks = leftQuestionMarks + rightQuestionMarks
  const sumDifference = leftSum - rightSum
  const questionMarkDifference = leftQuestionMarks - rightQuestionMarks

  // Alice wins if the total number of question marks is odd.
  // If Bob has the last move, he can always make the sums equal if possible.
  // If Alice has the last move (total '?' is odd), she can always make them unequal.
  if (totalQuestionMarks % 2 === 1) {
    return true
  }

  // If total '?' is even, Bob wins if 2 * sumDiff == -9 * qDiff.
  // Alice wins if they are not equal.
  return 2 * sumDifference !== -9 * questionMarkDifference
}
