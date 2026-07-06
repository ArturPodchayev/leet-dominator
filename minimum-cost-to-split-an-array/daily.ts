function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    
    let count = 0;
    let cur = 0;
    
    for (const [_, r] of intervals) {
        if (cur < r) {
            cur = r;
            ++count;
        }
    }
    
    return count;
}
