function numDistinct(s: string, t: string): number {
    let firstTPos = -1;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === t[0]) {
            firstTPos = i;

            break;
        }
    }

    if (firstTPos < 0) return 0;

    const sLastIndex = s.length - 1;
    const sLastIndexComp = firstTPos - 1;
    const tLastIndex = t.length - 1;

    let lastTPos = -1;
    for (let i = sLastIndex; i > sLastIndexComp; --i) {
        if (s[i] === t[tLastIndex]) {
            lastTPos = i + 1;

            break;
        }
    }
    
    if (lastTPos < 0) return 0;
    
    const results = new Array(t.length).fill(0);
    
    for (let i = firstTPos; i < lastTPos; ++i) {
        for (let j = tLastIndex; j > -1; --j) {
            if (s[i] !== t[j])    continue;
            
            results[j] += j ? results[j - 1] : 1;
        }
    }

    return results[results.length - 1];
};
