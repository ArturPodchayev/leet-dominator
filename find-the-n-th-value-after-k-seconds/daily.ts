function gcdOfOddEvenSums(n: number): number {
    let sumOdd: number = (1 + (n * 2 - 1)) * n / 2
    let sumEven: number = (2 + n * 2) * n / 2

    let gcd: (a: number, b: number) => number = (a, b) => {
        if (b == 0) return a
        return gcd(b, a % b)
    }

    return gcd(sumOdd, sumEven)
};
