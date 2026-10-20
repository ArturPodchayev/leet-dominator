function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
    const bIndices = [];
    const result = [];
    
    // build bIndices
    for (let i = 0; i < s.length; i++) {
        if (s[i] == b[0]) {
            if (s.substring(i, i + b.length) == b) {
                bIndices.push(i);
            }
        }
    }
    
    // do work
    outer: for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        if (sChar == a[0]) {
            if (s.substring(i, i + a.length) != a) {
                continue;
            }
        } else {
            continue;
        }
        
        // given: an instance of `a` start an i
        let lastBIdx = 0;
        for (let j = lastBIdx; j < bIndices.length; j++) {
            const bIdx = bIndices[j];
            if (Math.abs(bIdx - i) <= k) {
                // start looking from the closest B we've found
                result.push(i);
                break;
            } else {
                // haven't arrived within vicinity of next b yet, start looking there
                if (bIdx > i) {
                    lastBIdx = j;
                    break;
                } else if (j == (bIndices.length - 1)) { // all B's are > k away to the left
                    break outer;
                }
            }
        }
        
    }
    
    return result.sort((a,b) => a-b);
};
