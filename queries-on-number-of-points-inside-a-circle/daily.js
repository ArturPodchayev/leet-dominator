function maxActiveSectionsAfterTrade(s, queries) {
    const n = s.length;

    // 1. Decompose s into runs
    const runChar = [];
    const runStart = [];
    const runEnd = [];
    const posToRun = new Int32Array(n);
    {
        let i = 0;
        while (i < n) {
            let j = i;
            while (j < n && s[j] === s[i]) j++;
            const idx = runChar.length;
            runChar.push(s[i]);
            runStart.push(i);
            runEnd.push(j - 1);
            for (let k = i; k < j; k++) posToRun[k] = idx;
            i = j;
        }
    }
    const k = runChar.length;
    const runLen = new Int32Array(k);
    for (let p = 0; p < k; p++) runLen[p] = runEnd[p] - runStart[p] + 1;

    // total ones in full string (constant across all queries)
    let fullTotal = 0;
    for (let i = 0; i < n; i++) if (s[i] === '1') fullTotal++;

    // 2. value(p) = runLen[p-1] + runLen[p+1] for an internal '1' run p (not touching global ends)
    const NEG = -Infinity;
    const value = new Float64Array(k).fill(NEG);
    for (let p = 1; p < k - 1; p++) {
        if (runChar[p] === '1') {
            value[p] = runLen[p - 1] + runLen[p + 1];
        }
    }

    // 3. Sparse table for range max over value[]
    let sparse = null, logTable = null;
    if (k > 0) {
        logTable = new Int32Array(k + 1);
        for (let i = 2; i <= k; i++) logTable[i] = logTable[i >> 1] + 1;
        const LOG = logTable[k] + 1;
        sparse = new Array(LOG);
        sparse[0] = value.slice();
        for (let j = 1; j < LOG; j++) {
            const half = 1 << (j - 1);
            const prevRow = sparse[j - 1];
            const row = new Float64Array(k);
            for (let i = 0; i + (1 << j) <= k; i++) {
                row[i] = Math.max(prevRow[i], prevRow[i + half]);
            }
            sparse[j] = row;
        }
    }

    function rangeMax(a, b) { // inclusive, returns -Infinity if a > b
        if (a > b) return NEG;
        const len = b - a + 1;
        const j = logTable[len];
        const row = sparse[j];
        return Math.max(row[a], row[b - (1 << j) + 1]);
    }

    // 4. Answer queries
    const answer = new Array(queries.length);
    for (let qi = 0; qi < queries.length; qi++) {
        const l = queries[qi][0], r = queries[qi][1];
        const runL = posToRun[l];
        const runR = posToRun[r];

        let gain = 0;

        if (runL !== runR) {
            const clippedLeftLen = runEnd[runL] - l + 1;
            const clippedRightLen = r - runStart[runR] + 1;

            const lo = runL + 1;
            const hi = runR - 1;

            if (lo <= hi) {
                // edge case: p = lo (its left neighbor might be the clipped runL)
                if (runChar[lo] === '1') {
                    const leftLen = clippedLeftLen; // p-1 === runL always here
                    const rightLen = (lo + 1 === runR) ? clippedRightLen : runLen[lo + 1];
                    const cand = leftLen + rightLen;
                    if (cand > gain) gain = cand;
                }
                // edge case: p = hi (its right neighbor might be the clipped runR)
                if (runChar[hi] === '1') {
                    const rightLen = clippedRightLen; // p+1 === runR always here
                    const leftLen = (hi - 1 === runL) ? clippedLeftLen : runLen[hi - 1];
                    const cand = leftLen + rightLen;
                    if (cand > gain) gain = cand;
                }
                // middle range: p in [lo+1, hi-1], fully unclipped neighbors -> use sparse table
                const midLo = lo + 1;
                const midHi = hi - 1;
                if (midLo <= midHi) {
                    const m = rangeMax(midLo, midHi);
                    if (m > gain) gain = m;
                }
            }
        }
        // if runL === runR, whole query range is a single run touching both
        // boundaries -> no internal run possible -> gain stays 0

        answer[qi] = fullTotal + gain;
    }

    return answer;
}
