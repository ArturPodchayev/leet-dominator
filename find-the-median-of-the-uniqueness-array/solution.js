var medianOfUniquenessArray = function(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2;
    let half = (total & 1) ? (total + 1) / 2 : (total / 2 + 1);
    let sb = Array(n + 1);
    for (let i = 0; i <= n; i++) {
        sb[i] = n + 1 - i;
    }
    let idx = binarySearch(1, n, i => cal(sb[i]) < half) + 1;
    return sb[idx];

    function cal(limit) {
        let count = {};
        let j = -1, k = 0;
        let temp = 0;
        for (let i = 0; i < n; i++) {
            while (j + 1 < n && k < limit) {
                j++;
                let x = nums[j];
                count[x] = (count[x] || 0) + 1;
                if (count[x] === 1) k++;
            }
            if (j >= n || k < limit) break;
            let add = n - 1 - j + 1;
            temp += add;
            let x = nums[i];
            if (!--count[x]) k--;
        }
        return temp;
    }
};
function binarySearch(l, r, fn) {
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (fn(m)) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
}
