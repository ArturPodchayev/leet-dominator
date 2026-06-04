function totalWaviness(num1: number, num2: number): number {
    // Prefix sum logic: total in [num1, num2] = total in [0, num2] - total in [0, num1 - 1]
    return solve(num2) - solve(num1 - 1);
}

function solve(limit: number): number {
    if (limit < 0) return 0;

    const digits = String(limit).split('').map(Number);
    const n = digits.length;

    // Memoization map to store calculated DP states
    const memo = new Map<string, [number, number]>();

    function dfs(
        pos: number,
        prev1: number,
        prev2: number,
        tight: boolean,
        started: boolean
    ): [number, number] {
        
        // Base case: Reached the end of the number
        if (pos === n) {
            return [1, 0]; // 1 valid way formed, 0 additional waviness
        }

        const key = `${pos}-${prev1}-${prev2}-${started}`;

        // Return cached result if we are not tightly bound to the limit
        if (!tight && memo.has(key)) {
            return memo.get(key)!;
        }

        const limitDigit = tight ? digits[pos] : 9;

        let totalWays = 0;
        let totalWavy = 0;

        // Iterate through all valid digit placements
        for (let d = 0; d <= limitDigit; d++) {
            const nextTight = tight && d === limitDigit;
            const nextStarted = started || d !== 0;

            let add = 0;

            // Check if we found a local peak or valley
            if (nextStarted && prev1 !== -1 && prev2 !== -1) {
                if (
                    (prev1 > prev2 && prev1 > d) || 
                    (prev1 < prev2 && prev1 < d)
                ) {
                    add = 1; // A wave is found!
                }
            }

            let nextPrev1 = prev1;
            let nextPrev2 = prev2;

            // Shift previous digits, ignoring leading zeros
            if (!nextStarted) {
                nextPrev1 = -1;
                nextPrev2 = -1;
            } else if (prev1 === -1) {
                nextPrev1 = d;
            } else if (prev2 === -1) {
                nextPrev2 = prev1;
                nextPrev1 = d;
            } else {
                nextPrev2 = prev1;
                nextPrev1 = d;
            }

            // Dive deeper into the next digit position
            const [ways, waviness] = dfs(
                pos + 1,
                nextPrev1,
                nextPrev2,
                nextTight,
                nextStarted
            );

            // Accumulate results
            totalWays += ways;
            // The new wave (add) exists in ALL (ways) valid combinations formed from here down
            totalWavy += waviness + ways * add; 
        }

        const result: [number, number] = [totalWays, totalWavy];

        // Cache the result
        if (!tight) {
            memo.set(key, result);
        }

        return result;
    }

    // Start DFS at pos 0, with no previous digits, strictly tight, and not yet started
    return dfs(0, -1, -1, true, false)[1];
}
