export function sumAndMultiply(s: string, queries: number[][]): number[] {
    const MOD = 1000000007n;
    const n = s.length;

    const nonZeroCount = new Array<number>(n + 1).fill(0);
    const prefixValue = new Array<bigint>(n + 1).fill(0n);
    const prefixDigitSum = new Array<bigint>(n + 1).fill(0n);
    const pow10 = new Array<bigint>(n + 1).fill(0n);

    pow10[0] = 1n;
    for (let i = 1; i <= n; i++) pow10[i] = (pow10[i - 1] * 10n) % MOD;

    for (let i = 0; i < n; i++) {
        const digit = BigInt(s.charCodeAt(i) - 48);

        nonZeroCount[i + 1] = nonZeroCount[i];
        prefixValue[i + 1] = prefixValue[i];
        prefixDigitSum[i + 1] = prefixDigitSum[i];

        if (digit !== 0n) {
            nonZeroCount[i + 1]++;
            prefixValue[i + 1] = (prefixValue[i] * 10n + digit) % MOD;
            prefixDigitSum[i + 1] = prefixDigitSum[i] + digit;
        }
    }

    const ans = new Array<number>(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0];
        const r = queries[i][1];

        const count = nonZeroCount[r + 1] - nonZeroCount[l];
        const sum = prefixDigitSum[r + 1] - prefixDigitSum[l];

        let x: bigint;
        if (count === 0) {
            x = 0n;
        } else {
            const left = (prefixValue[l] * pow10[count]) % MOD;
            x = (prefixValue[r + 1] - left + MOD) % MOD;
        }

        ans[i] = Number((x * sum) % MOD);
    }

    return ans;
}
