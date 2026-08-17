function sumOfNumbers(l: number, r: number, k: number): number {
    const mod = 1_000_000_007n;

    const modP = (a: bigint, b: bigint): bigint => {
        let result = 1n;
        a %= mod;
        while (b > 0n) {
            if (b & 1n) result = (result * a) % mod;
            a = (a * a) % mod;
            b >>= 1n;
        }
        return result;
    };

    const cnt = BigInt(r - l + 1);
    const sum = (cnt * BigInt(l + r) / 2n) % mod;
    const part1 = modP(cnt, BigInt(k - 1));
    const first = modP(10n, BigInt(k));
    const inv9 = modP(9n, mod - 2n);
    const geo = ((first - 1n + mod) % mod * inv9) % mod;

    return Number((sum * part1 % mod) * geo % mod);
}
