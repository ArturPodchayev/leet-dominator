/**
 * @param {string} s
 * @return {string}
 */
var lexSmallest = function(s) {
    let result = s;
    const n = s.length;
    let tmp, index;

    for (let i = 0; i < n; ++i) {
        index = i;
        tmp = "";
        while (index >= 0) tmp += s[index--];
        tmp += s.substring(i + 1, n);
        if (tmp < result) result = tmp; 
        tmp = s.substring(0, i + 1);
        index = n - 1;
        while (index !== i) tmp += s[index--];
        if (tmp < result) result = tmp; 
    }

    return result;
};
