var beautifulIndices = function (s, a, b, k) {
  const ans = []
  let i = s.indexOf(b)
  let j = s.indexOf(a)
  while (j !== -1 && i !== -1) {
    while (i !== -1 && i < j && (j - i) > k) {
      i = s.indexOf(b, i + 1)
    }
    if (Math.abs(j - i) <= k) ans.push(j)
    j = s.indexOf(a, j + 1)
  }
  return ans
}
