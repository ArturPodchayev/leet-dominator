/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 1000000007;

    let even = 1;
    let odd = 0;
    let prefix = 0;
    let ans = 0;

    for (const num of arr) {
        prefix = (prefix + num) % 2;

        if (prefix === 0) {
            ans = (ans + odd) % MOD;
            even++;
        } else {
            ans = (ans + even) % MOD;
            odd++;
        }
    }

    return ans;
};
