/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let bEncountered = false;

    for (let ch of s) {
        if (ch === "b" && !bEncountered) bEncountered = true;
        else if (ch === "a" && bEncountered) return false;
    }

    return true;
};
