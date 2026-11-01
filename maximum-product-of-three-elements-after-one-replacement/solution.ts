function maxProduct(nums: number[]): number {
    let a = 0, b = 0;
    for (const x of nums) {
        const ax = Math.abs(x);
        if (ax >= a) {
            b = a;
            a = ax;
        } else if (ax > b) {
            b = ax;
        }
    }
    return 100000 * a * b;
}
