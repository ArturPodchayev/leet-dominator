function longestEqualSubarray(nums: number[], k: number): number {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const stored = map.get(nums[i]);
        if (stored) {
            stored.push(i);
        } else {
            map.set(nums[i], [i]);
        }
    }

    let maxL = 1;

    for (const indexes of map.values()) {
        for (let left = 0; left < indexes.length; left++) {
            let lowBound = left + 1;
            let highBound = indexes.length - 1;
            let best = 0;
            while (lowBound <= highBound) {
                const right = lowBound + ((highBound - lowBound) >> 1);
                const distance = indexes[right] - indexes[left] - 1;
                const sameNumsBetween = right - left - 1;
                const requiredDeletions = distance - sameNumsBetween;

                if (requiredDeletions > k) {
                    highBound = right - 1;
                } else {
                    best = right - left + 1;
                    lowBound = right + 1;
                }
            }

            maxL = Math.max(maxL, best);
        }
    }

    return maxL;
};
