/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
    let longest = 0;

    const forbiddenSet = new Set(forbidden);
    let left = 0;
    for (let right = 1; right <= word.length; right++) {
        for (let testLength = 1; testLength <= 10 && right - testLength >= left; testLength++) {
            if (forbiddenSet.has(word.substring(right - testLength, right))) {
                left = (right - testLength) + 1;
                break;
            }
        }
        longest = Math.max(longest, right - left);
    }

    return longest;
};
