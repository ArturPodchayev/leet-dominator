/**
 * @param {string} s
 * @return {number}
 */
var makeStringGood = function (s) {
  let freq = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }
  let memo = Array(3).fill(0).map(()=>Array(26).fill(0).map(()=>Array(s.length + 1).fill(-1)))

  let helper = (t, curr, carry) => {
    if (curr === 26) {
      return 0;
    }
    if(memo[carry][curr][t] !== -1) return memo[carry][curr][t]
    let c = freq[curr];
    let res;
    if (c === 0 || c === t) {
      res = helper(t, curr + 1, 0);
    } else if (c > t) {
      res = Math.min(
        c - t + helper(t, curr + 1, 1),
        c + helper(t, curr + 1, 2)
      )
    } else if (c < t) {
        let couldHaveTaken = 0
        let prev = freq[curr - 1]
        if(carry === 1){
            couldHaveTaken = prev - t
        }else if(carry === 2){
            couldHaveTaken = prev
        }
        res = Math.min(
            Math.max(0 , t - c - couldHaveTaken) + helper(t, curr + 1, 0),
            c + helper(t, curr + 1, 2),
        )
    }
    memo[carry][curr][t] = res
    return res;
  };
  let res = Infinity;
  for (let i = 0; i <= s.length ; i++) {
    res = Math.min(res, helper(i, 0, 0));
  }
  
  return res;
};
