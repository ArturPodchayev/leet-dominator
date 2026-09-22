/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function(s, k) {
    let index = 0;
    const map = {};
    const n = s.length;
    let result = "";

    for (let i = 0; i < n; ++i) {
        if (index - map[s[i]] <= k) continue;
        else {
            map[s[i]] = index++;
            result += s[i];
        }
    }

    return result;
};
