function stoneGameV(stoneValue: number[]): number {
    const n: number = stoneValue.length;
    const f: number[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    const dfs = (left: number, right: number): number => {
        if (left === right) {
            return 0;
        }
        if (f[left][right] !== 0) {
            return f[left][right];
        }

        let sum: number = 0;
        for (let i = left; i <= right; i++) {
            sum += stoneValue[i];
        }

        let suml: number = 0;
        for (let i: number = left; i < right; ++i) {
            suml += stoneValue[i];
            const sumr: number = sum - suml;

            if (suml < sumr) {
                f[left][right] = Math.max(f[left][right], dfs(left, i) + suml);
            } else if (suml > sumr) {
                f[left][right] = Math.max(
                    f[left][right],
                    dfs(i + 1, right) + sumr,
                );
            } else {
                f[left][right] = Math.max(
                    f[left][right],
                    Math.max(dfs(left, i), dfs(i + 1, right)) + suml,
                );
            }
        }
        return f[left][right];
    };

    return dfs(0, n - 1);
}
