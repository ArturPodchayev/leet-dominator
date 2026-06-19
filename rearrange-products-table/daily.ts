function largestAltitude(gains: number[]): number {
    let highest = 0;

    let prevValue = 0;
    for (const gain of gains) {
        prevValue = prevValue + gain;

        if (prevValue > highest) {
            highest = prevValue;
        }
    }

    return highest;
};
