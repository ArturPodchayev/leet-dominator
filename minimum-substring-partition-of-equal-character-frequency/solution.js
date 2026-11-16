let dpArray = new Array(1002).fill(-1);

function findSubstrings(newIndex, newstr) {
    if (newIndex < 0) return 0;
    if (dpArray[newIndex] !== -1) return dpArray[newIndex];

    let freq = new Array(26).fill(0);
    let minSubstrings = 5005;

    for (let j = newIndex; j >= 0; j--) {
        freq[newstr.charCodeAt(j) - 'a'.charCodeAt(0)]++;
        let maxFreq = -1;
        let minFreq = 5005;

        for (let k = 0; k < 26; k++) {
            if (freq[k]) {
                minFreq = Math.min(minFreq, freq[k]);
                maxFreq = Math.max(maxFreq, freq[k]);
            }
        }

        if (minFreq === maxFreq) {
            minSubstrings = Math.min(minSubstrings, 1 + findSubstrings(j - 1, newstr));
        }
    }

    return dpArray[newIndex] = minSubstrings;
}

function minimumSubstringsInPartition(newstring) {
    dpArray.fill(-1);
    return findSubstrings(newstring.length - 1, newstring);
}

