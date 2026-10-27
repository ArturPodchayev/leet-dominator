/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
    let a = s.split("");
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        [a[right], a[left]] = [a[left], a[right]];
        left++;
        right--;
    }
    a = a.join("")
    let set1 = new Set();
    let set2 = new Set();
    for (let i = 0; i < s.length; i++) {
        set1.add(s.substring(i, i + 2));
        set2.add(a.substring(i, i + 2));
    }

    for (let e of set1) {
        if (set2.has(e) && e.length===2) {
            return true;
        }
    }
    return false;
};
