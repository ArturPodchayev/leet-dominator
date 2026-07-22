function maxActiveSectionsAfterTrade(s: string, queries: number[][]): number[] {
    const n = s.length;
    const activeCount = s.split('').filter(c => c === '1').length;
    
    // Find all zero blocks: [start, end] (inclusive)
    const zeroBlocks: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        if (s[i] === '0') {
            const start = i;
            while (i < n && s[i] === '0') i++;
            zeroBlocks.push([start, i - 1]);
            i--;
        }
    }
    
    const m = zeroBlocks.length;
    if (m <= 1) {
        return queries.map(() => activeCount);
    }
    
    // Valley values: V[i] = length of zeroBlock[i] + length of zeroBlock[i+1]
    const V: number[] = [];
    for (let i = 0; i < m - 1; i++) {
        V.push((zeroBlocks[i][1] - zeroBlocks[i][0] + 1) + (zeroBlocks[i + 1][1] - zeroBlocks[i + 1][0] + 1));
    }
    
    // Build sparse table for RMQ
    const sparse: number[][] = [V.slice()];
    let half = 1;
    while (half * 2 <= V.length) {
        const prev = sparse[sparse.length - 1];
        const next: number[] = [];
        for (let i = 0; i < prev.length; i++) {
            if (i + half < prev.length) {
                next.push(Math.max(prev[i], prev[i + half]));
            } else {
                next.push(prev[i]);
            }
        }
        sparse.push(next);
        half *= 2;
    }
    
    const rmq = (lo: number, hi: number): number => {
        if (lo > hi) return 0;
        const len = hi - lo + 1;
        if (len === 0) return 0;
        const t = Math.floor(Math.log2(len));
        const pow = 1 << t;
        return Math.max(sparse[t][lo], sparse[t][hi - pow + 1]);
    };
    
    const result: number[] = [];
    
    for (const [l, r] of queries) {
        // Binary search for first zero block with end >= l
        let ja = -1;
        let left = 0, right = m - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (zeroBlocks[mid][1] >= l) {
                ja = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        // Binary search for last zero block with start <= r
        let jb = -1;
        left = 0;
        right = m - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (zeroBlocks[mid][0] <= r) {
                jb = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        if (ja === -1 || jb === -1 || jb <= ja) {
            result.push(activeCount);
            continue;
        }
        
        let maxGain = 0;
        
        // Check left boundary valley
        if (ja < m - 1) {
            const [z1Start, z1End] = zeroBlocks[ja];
            const [z2Start, z2End] = zeroBlocks[ja + 1];
            
            let gain = (z1End - z1Start + 1) + (z2End - z2Start + 1);
            if (z1Start < l) gain -= l - z1Start;
            if (z2End > r) gain -= z2End - r;
            
            maxGain = Math.max(maxGain, gain);
        }
        
        // Check right boundary valley
        if (jb > ja && jb - 1 >= 0 && jb - 1 < m - 1) {
            const [z1Start, z1End] = zeroBlocks[jb - 1];
            const [z2Start, z2End] = zeroBlocks[jb];
            
            let gain = (z1End - z1Start + 1) + (z2End - z2Start + 1);
            if (z1Start < l) gain -= l - z1Start;
            if (z2End > r) gain -= z2End - r;
            
            maxGain = Math.max(maxGain, gain);
        }
        
        // Check interior valleys using sparse table
        if (ja + 1 < jb - 1) {
            const interiorMax = rmq(ja + 1, jb - 2);
            maxGain = Math.max(maxGain, interiorMax);
        }
        
        result.push(activeCount + maxGain);
    }
    
    return result;
}
