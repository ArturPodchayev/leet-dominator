function numberWays(hats: number[][]): number {
    const MOD = 10 ** 9 + 7;
    const n = hats.length;
    const m = 1 << n; // Total states for bitmask representation
    const ans: number[] = new Array(m).fill(0);
    const hatPreferences: number[][] = Array.from({ length: 41 }, () => []);

    // Base case: one way to assign no hats
    ans[0] = 1;

    // Populate hatPreferences to track which people can wear each hat
    for (let person = 0; person < n; person++) {
        for (const hat of hats[person]) {
            hatPreferences[hat].push(person);
        }
    }

    // Dynamic programming to calculate number of ways to assign hats
    for (let hat = 1; hat <= 40; hat++) {
        for (let state = m - 1; state >= 0; state--) {
            for (const person of hatPreferences[hat]) {
                // Check if the person is already wearing a hat in the current state
                if ((state & (1 << person)) > 0) {
                    ans[state] = (ans[state] + ans[state ^ (1 << person)]) % MOD;
                }
            }
        }
    }

    // Return the number of ways for the state where all people are assigned a hat
    return ans[m - 1];
}
