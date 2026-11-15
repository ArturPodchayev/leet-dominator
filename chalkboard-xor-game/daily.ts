function numOfSubarrays(arr: number[]): number {
    let sum = 0
    let odd = 0
    let even = 0
    let result = 0
    const MOD = 10 ** 9 + 7;

    for (const num of arr) {
        sum += num

        if (sum & 1) {
            result = (result + 1 + even) % MOD
            odd++
        } else {
            result = (result + odd) % MOD
            even++
        }
    }

    return result
};
