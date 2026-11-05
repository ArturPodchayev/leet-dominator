/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
    // Build the map of blocks first
    const map = {}; // char => [block sizes]
    initMap(s, map);

    let res = 0;
    for (const char in map) res = Math.max(res, resolve(map[char]));
    if (res === 0) return -1; // No valid substring found
    return res;


    function initMap(s, map) {
        const n = s.length;
        let ptr = 0;
        while (ptr < n) {
            const crtChar = s[ptr];
            let count = 0;
            while (ptr < n && s[ptr] === crtChar) {
                count++;
                ptr++;
            }
            if (!(crtChar in map)) map[crtChar] = [];
            map[crtChar].push(count);
        }
    }

    function resolve(arr) {
        // Return the max length of substring occurring at least thrice
        let low = 0;
        let high = 5 * 10 ** 5;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (isOkay(mid, arr)) low = mid + 1;
            else high = mid - 1;
        }
        return high;
    }

    function isOkay(mid, arr) {
        // Check if substring with length mid can occur at least thrice
        let appearance = 0;
        for (const num of arr) appearance += Math.max(0, num - mid + 1);
        return appearance >= 3;
    }
};
