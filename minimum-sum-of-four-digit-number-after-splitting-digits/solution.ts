function minimumSum(num: number): number {
    const sorted = String(num).split("").sort((a, b) => +a - +b);
    return Number(`${sorted[0]}${sorted[2]}`) + Number(`${sorted[1]}${sorted[3]}`)
};
