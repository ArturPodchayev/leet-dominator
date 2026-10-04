/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function (target, types) {
    const memo = Array.from({ length: target + 1 }, () =>
        Array.from({ length: types.length + 1 }, () => -1),
    );
    return backtrack(target, types, 0, memo);
};

function backtrack(target, types, start, memo) {

    if (target < 0) {
        return 0;
    }

    if (target == 0) {
        return 1;
    }

    if (memo[target][start] != -1) {
        return memo[target][start];
    }

    let result = 0;

    for (let i = start; i < types.length; i++) {
        for (let j = 1; j <= types[i][0]; j++) {
            if (target - j * types[i][1] < 0) {
                break;
            }
            const temp = backtrack(target - j * types[i][1], types, i + 1, memo);
            result = (result + temp) % (1e9 + 7);
        }
    }

    memo[target][start] = result;

    return result;
}
