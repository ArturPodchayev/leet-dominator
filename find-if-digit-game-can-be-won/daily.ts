function maxProduct(n: number): number {
    if (n < 10) {
        return 0;
    }

    let largest = 0;
    let secondLargest = 0;
    let tempN = n;

    while (tempN > 0) {
        const digit = tempN % 10;

        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        } else if (digit > secondLargest) {
            secondLargest = digit;
        }
        tempN = (tempN / 10) | 0; // Micro-optimization for floor
    }
    return largest * secondLargest;
};
