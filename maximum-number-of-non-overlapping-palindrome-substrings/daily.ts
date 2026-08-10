function winnerSquareGame(n: number): boolean {
    const dp = new Uint8Array(n + 1);

    for (let stones = 1; stones <= n; stones++) {
        for (let i = 1; i * i <= stones; i++) {
            if (dp[stones - i * i] === 0) {
                dp[stones] = 1;
                break;
            }
        }
    }

    return dp[n] === 1;
}
