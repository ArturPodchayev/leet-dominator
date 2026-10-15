function countStableSubsequences(v: number[]): number {
    const MOD = 1000000007n;
    let e1 = 0n, e2 = 0n, o1 = 0n, o2 = 0n;

    for (const x of v) {
        if ((x & 1) === 0) {
            const ne1 = (e1 + (o1 + o2 + 1n)) % MOD;
            const ne2 = (e2 + e1) % MOD;
            e1 = ne1; e2 = ne2;
        } else {
            const no1 = (o1 + (e1 + e2 + 1n)) % MOD;
            const no2 = (o2 + o1) % MOD;
            o1 = no1; o2 = no2;
        }
    }

    const ans = (e1 + e2 + o1 + o2) % MOD;
    return Number(ans);
}
