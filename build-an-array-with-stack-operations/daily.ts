const gcd = (a: number, b: number): number => {
    while (b) {
        const t = b;
        b = a % b;
        a = t;
    }

    return a;
}

function gcdSum(prefixGcd: number[]): number {
    let max = 0

    for (let i = 0; i < prefixGcd.length; i++) {
        max = Math.max(max, prefixGcd[i])
        prefixGcd[i] = gcd(prefixGcd[i], max)
    }

    prefixGcd.sort((a, b) => a - b);
    
    let result = 0
    for (let i = 0; i < Math.floor(prefixGcd.length / 2); i++) {
        result += gcd(prefixGcd[i], prefixGcd[prefixGcd.length - i - 1])
    }

    return result;
};
