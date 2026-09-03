/**
 * @param {number[]} nums1
 * @return {boolean}
 */

var uniformArray = function(nums1) {
    nums1.sort((a, b) => a - b);

    let n = nums1.length;

    let type = nums1[0] % 2 === 0 ? "even" : "odd";

    let even = 0;
    let odd = 0;

    for (let i = 0; i < n; i++) {
        if (nums1[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    if (type === "even") {
        if (odd > 0) return false;
        return true;
    } else {
        return true;
    }
};
