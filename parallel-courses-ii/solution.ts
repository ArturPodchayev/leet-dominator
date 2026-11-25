function minNumberOfSemesters(n: number, relations: number[][], k: number): number {
    const prereq = new Array(n).fill(0)

    for (const [prev, next] of relations) {
        // turn on prev requirement in prereq[next]
        prereq[next - 1] |= (1 << (prev - 1))
    }

    const memo = new Array(1 << n).fill(-1);

    function dp(mask: number): number {
        // if all n courses have already been taken
        if (mask === ((1 << n) - 1)) {
            return 0
        }

        if (memo[mask] !== -1) {
            return memo[mask];
        }

        let available = 0;

        for (let i = 0; i < n; i++) {
            // const isTaken = mask & prereq[i]
            const isTaken = (mask & (1 << i)) !== 0
            // const prerequisitesMet = (prereq[i] & mask) === 0
            const prerequisitesMet = (mask & prereq[i]) === prereq[i]  

            if (!isTaken && prerequisitesMet) {
                available |= (1 << i)
            }
        }

        let minSemesters = Infinity;

        for (
            let subset = available;
            subset > 0;
            subset = (subset - 1) & available
        ) {
            if (countBits(subset) <= k) {
                const newMask = mask | subset;
                const semesters = 1 + dp(newMask)
                minSemesters = Math.min(minSemesters, semesters)
            }
        }

        memo[mask] = minSemesters
        return minSemesters
    }

    function countBits(mask: number): number {
        let count = 0;

        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) !== 0) {
                count++
            }
        }

        return count;
    }

    return dp(0)
};
