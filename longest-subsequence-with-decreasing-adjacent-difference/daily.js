/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    let c = 0;
    for (let i = 0; i < s.length - 1; i += 2) {
        if (s[i] != s[i + 1]) c++;
    }
    return c;
};
