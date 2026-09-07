function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
    // make a historical count of each letter along each index of s
    // use this for lookups in the last step
    const CHAR_CODE_REFERENCE = 'a'.charCodeAt(0);
    const historicalIndex = new Array(s.length + 1);
    historicalIndex[0] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        historicalIndex[i + 1] = [...historicalIndex[i]];
        historicalIndex[i + 1][char.charCodeAt(0) - CHAR_CODE_REFERENCE]++;
    }

    return queries.map(([left, right, k]) => {
        let mismatches = 0;
        for (let code = 0; code < 26; code += 1) {
            mismatches += (historicalIndex[right + 1][code] - historicalIndex[left][code]) % 2;
        }
        return (mismatches / 2 | 0) <= k;
    });
};
