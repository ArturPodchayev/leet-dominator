/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;
    const sorted = nums.toSorted((a, b) => a - b);

    // we get all divisors of n
    const divisors = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) divisors.push(n / i);
        }
    }

    // we build KMP prefix table
    function buildLPS(pattern) {
        const lps = new Array(pattern.length).fill(0);
        let len = 0;

        for (let i = 1; i < pattern.length;) {
            if (pattern[i] === pattern[len]) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }

        return lps;
    }

    // we check if pattern is a cyclic rotation of block
    function isRotation(block, pattern) {
        const k = block.length;
        const lps = buildLPS(pattern);
        let j = 0;

        // we search pattern in block + block, without allocating it
        for (let i = 0; i < 2 * k - 1; i++) {
            const value = block[i % k];

            while (j > 0 && value !== pattern[j]) {
                j = lps[j - 1];
            }

            if (value === pattern[j]) j++;

            if (j === k) return true;
        }

        return false;
    }

    let sum = 0;

    for (const k of divisors) {
        let valid = true;

        for (let start = 0; start < n; start += k) {
            const block = nums.slice(start, start + k);
            const target = sorted.slice(start, start + k);

            if (!isRotation(block, target)) {
                valid = false;
                break;
            }
        }

        if (valid) sum += k;
    }

    return sum;
};
