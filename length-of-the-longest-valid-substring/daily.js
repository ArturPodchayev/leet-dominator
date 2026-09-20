/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
let total = 0
for (let i = 0; i < s.length; i++) {
  let ans = "zyxwvutsrqponmlkjihgfedcba".indexOf(s[i]) + 1;
  total += ans * (i + 1);
}

return total
};
