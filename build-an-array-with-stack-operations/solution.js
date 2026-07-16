/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 *
 * Time: O(n) | Space: O(1)
 */
var buildArray = function (target, n) {
    let result = []

    let targetIdx = 0, num = 1
    while (targetIdx < target.length) {
        if (num === target[targetIdx]) {
            result.push("Push")
            targetIdx++
        } else {
            result.push("Push", "Pop")
        }
        num++
    }

    return result
};
