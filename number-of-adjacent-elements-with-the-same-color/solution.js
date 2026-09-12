/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const a = Array(n).fill(0);
    const ans = [];
    let count = 0;
    for (const [i, c] of queries) {
        if (i === 0) {
            if (a[i] && a[i] === a[i + 1]) {
                count--;
            }
            a[i] = c;
            if (a[i] === a[i + 1]) {
                count++;
            }
        } else if (i === n - 1) {
            if (a[i] && a[i] === a[i - 1]) {
                count--;
            }
            a[i] = c;
            if (a[i] === a[i - 1]) {
                count++;
            }
        } else {
            if (a[i] && a[i] === a[i + 1]) {
                count--;
            }
            if (a[i] && a[i] === a[i - 1]) {
                count--;
            }
            a[i] = c;
            if (a[i] === a[i + 1]) {
                count++;
            }
            if (a[i] === a[i - 1]) {
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
};
