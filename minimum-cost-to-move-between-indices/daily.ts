function maxPalindromes(s: string, k: number): number {
    const szs = s.length;

    if (szs === 1) {
        return 1;
    }
    const t = "^#" + s.split("").join("#") + "#$";
    const szt = t.length;
    const p = new Int32Array(szt);
    const dp = new Int32Array(szt);

    let center: number = 0;
    let right: number = 0;

    for (let i: number = 1; i < szt - 1; i++) {
        const mirror = 2 * center - i;

        if (i < right) {
            p[i] = Math.min(right - i, p[mirror]);
        }

        while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) {
            ++p[i];
        }

        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
        let len: number = k;
        const adjust = ((k & 1) === 1 && t[i] !== "#") || ((k & 1) === 0 && t[i] === "#");

        if (adjust) {
            --len;
        }
        dp[i] = Math.max(dp[i], dp[i - 1]);

        while (len <= p[i]) {
            dp[i + len] = Math.max(dp[i + len], 1 + dp[i - len - 1]);
            len += 2;
        }
    }

    return dp.at(-2);
};
