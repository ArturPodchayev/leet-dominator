function minimumTime(s: string): number {
    const size: number = s.length;

    const prefix: number[] = new Array(size + 1).fill(0);
    const suffix: number[] = new Array(size + 1).fill(0);

    for (let i = 0; i < size; ++i) {
        if (s.charAt(i) === '0') {
            prefix[i + 1] = prefix[i];
        } else {
            prefix[i + 1] = Math.min(prefix[i] + 2, i + 1);
        }
    }

    for (let i = size - 1; i >= 0; --i) {
        if (s.charAt(i) === '0') {
            suffix[i] = suffix[i + 1];
        } else {
            suffix[i] = Math.min(suffix[i + 1] + 2, size - i);
        }
    }

    let minCost: number = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= size; ++i) {
        minCost = Math.min(minCost, prefix[i] + suffix[i]);
    }

    return minCost;
};
