/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ans = [];
    const backtrack = (arr, open, close) => {
        if (open == n && close == n) {
            ans.push(arr.join(''));
        } else {
            if (open < n) {
                arr.push('(');
                backtrack(arr, open + 1, close);
                arr.pop();
            }
            if (close < open) {
                arr.push(')');
                backtrack(arr, open, close + 1)
                arr.pop();
            }
        }
    }

    backtrack([], 0, 0);

    return ans;
};
