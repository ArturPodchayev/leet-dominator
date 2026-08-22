function checkDivisibility(num: number): boolean {
    let sum = 0;
    let product = 1;
    const str = String(num);
    for (const char of str) {
        const digit = Number(char);
        sum += digit;
        product *= digit;
    }

    return num % (sum + product) === 0;
}
