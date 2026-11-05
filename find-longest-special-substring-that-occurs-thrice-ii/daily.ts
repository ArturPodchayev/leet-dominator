function findTheDistanceValue(
    arr1: number[],
    arr2: number[],
    d: number,
): number {
    let count = 0;

    arr2.sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        let falg = true;

        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                falg = false;
                continue;
            }
        }

        if (falg) {
            count++;
        }
    }

    return count;
}
