var minCharacters = function(a, b) {
    const BASE_CODE = 'a'.charCodeAt(0);
    const m = a.length;
    const n = b.length;
    const countA = Array(26).fill(0);
    const countB = Array(26).fill(0);
    let result = m + n;

    for (const char of a) countA[char.charCodeAt(0) - BASE_CODE] += 1;
    for (const char of b) countB[char.charCodeAt(0) - BASE_CODE] += 1;
    for (let index = 0; index < 26; index++) {
        result = Math.min(result, m + n - countA[index] - countB[index]);

        if (index > 0) {
            countA[index] += countA[index - 1];
            countB[index] += countB[index - 1];
        }
        if (index >= 25) continue;
        result = Math.min(result, m - countA[index] + countB[index]);
        result = Math.min(result, n + countA[index] - countB[index]);
    }
    return result;
};
