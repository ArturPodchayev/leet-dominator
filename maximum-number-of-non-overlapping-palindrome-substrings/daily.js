/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
    const dp = new Uint8Array(n + 1);

    for (let stones = 1; stones <= n; stones++) {
        for (let square = 1; square * square <= stones; square++) {
            if (dp[stones - square * square] === 0) {
                dp[stones] = 1;
                break;
            }
        }
    }

    return dp[n] === 1;
};
