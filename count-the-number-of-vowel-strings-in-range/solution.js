/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    count = 0
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (i = left; i <= right; i++) {
        console.log(words[i][0])
        if (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) {
            count++
        }
    }
    return count
};
