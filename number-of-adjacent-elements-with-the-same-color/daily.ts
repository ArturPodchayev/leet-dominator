function maximumWeight(intervals: number[][]): number[] {
    const originalIntervals = intervals.map(interval => [...interval]);
    const indexMap = new Map<string, number>();
    
    // Map each interval to its original index
    for (let i = 0; i < intervals.length; i++) {
        const key = intervals[i].join(',');
        if (!indexMap.has(key)) {
            indexMap.set(key, i);
        }
    }

    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const dp = new Map<string, number[]>();

    function util(i: number, k: number): number[] {
        if (k === 0) {
            return [];
        }
        if (i === intervals.length) {
            return [];
        }

        const key = `${i}|${k}`;
        if (dp.has(key)) {
            return dp.get(key)!;
        }

        let maxSum = 0;
        let ret: number[] = [];

        // Skip current interval
        let get = util(i + 1, k);
        let sum = generateSumFromIndex(get);
        if (maxSum < sum) {
            maxSum = sum;
            ret = [...get];
        }

        // Take current interval
        const nextIndex = findNextIndex(intervals, intervals[i][1], i, intervals.length);
        get = util(nextIndex, k - 1);
        sum = intervals[i][2] + generateSumFromIndex(get);
        
        const temp: number[] = [];
        if (maxSum <= sum) {
            temp.push(indexMap.get(intervals[i].join(','))!);
            for (const idx of get) {
                temp.push(idx);
            }
        }
        temp.sort((a, b) => a - b);

        if (maxSum < sum) {
            maxSum = sum;
            ret = temp;
        } else if (maxSum === sum) {
            if (temp.length > 0) {
                // Compare lexicographically
                let toChange = true;
                let isAllEqual = true;
                
                for (let idx = 0; idx < ret.length && idx < temp.length; idx++) {
                    if (ret[idx] < temp[idx]) {
                        toChange = false;
                        break;
                    }
                    if (ret[idx] !== temp[idx]) {
                        isAllEqual = false;
                    }
                }
                
                if (toChange) {
                    if (!isAllEqual) {
                        ret = temp;
                    } else {
                        if (ret.length > temp.length) {
                            ret = temp;
                        }
                    }
                }
            }
        }

        dp.set(key, ret);
        return ret;
    }

    function generateSumFromIndex(indices: number[]): number {
        let sum = 0;
        for (const idx of indices) {
            sum += originalIntervals[idx][2];
        }
        return sum;
    }

    function findNextIndex(
        intervals: number[][],
        rightIntervalEnd: number,
        low: number,
        high: number
    ): number {
        let l = low;
        let h = high;
        
        while (l + 1 < h) {
            const mid = Math.floor((l + h) / 2);
            const leftIntervalStart = intervals[mid][0];
            
            if (rightIntervalEnd < leftIntervalStart) {
                h = mid;
            } else {
                l = mid;
            }
        }
        
        return h;
    }

    return util(0, 4);
}
