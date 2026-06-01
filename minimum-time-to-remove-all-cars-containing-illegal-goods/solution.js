var minimumTime = function (s) {
  let n = s.length;
  let dp = 0
  let res = n;

  for (let i = 0; i < n; i++) {
    if (s[i] == "1") dp = Math.min(i + 1, dp + 2);
    res = Math.min(res, dp + n - i - 1);
  }
  
  return res;
};
