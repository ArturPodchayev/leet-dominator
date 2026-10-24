function maxScore(nums: number[], maxVal: number): number {
    const M = Math.max(maxVal, ...nums);
    const freq = new Int32Array(M + 1);

    for (const x of nums) freq[x]++;

    const mu = new Int32Array(M + 1);
    const primes: number[] = [];
    const isComp = new Uint8Array(M + 1);

    mu[1] = 1;

    for (let i = 2; i <= M; i++) {
        if (!isComp[i]) {
            primes.push(i);
            mu[i] = -1;
        }

        for (const p of primes) {
            const v = i * p;
            if (v > M) break;

            isComp[v] = 1;

            if (i % p === 0) {
                mu[v] = 0;
                break;
            } else {
                mu[v] = -mu[i];
            }
        }
    }

    const divCnt = new Int32Array(M + 1);

    for (let d = 1; d <= M; d++) {
        for (let m = d; m <= M; m += d) {
            divCnt[d] += freq[m];
        }
    }

    const coprimeCnt = new Int32Array(M + 1);

    for (let d = 1; d <= M; d++) {
        if (mu[d] === 0) continue;

        const add = mu[d] * divCnt[d];

        for (let m = d; m <= M; m += d) {
            coprimeCnt[m] += add;
        }
    }

    let ans = -1e18;
    const seen = new Uint8Array(M + 1);

    const evalValue = (x: number) => {
        if (seen[x]) return;
        seen[x] = 1;

        const bad = nums.length - coprimeCnt[x];

        let bonus: number;
        if (freq[x] > 0) {
            bonus = x > 1 ? 1 : 0;
        } else if (x <= maxVal) {
            bonus = bad > 0 ? 0 : -1;
        } else {
            return;
        }

        ans = Math.max(ans, x - bad + bonus);
    };

    for (let x = 1; x <= maxVal; x++) evalValue(x);
    for (const x of nums) evalValue(x);

    return ans;
}
