/**
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
const maxTotal = (nums, s) => {
        let res = 0;

        for (let cur = 0, i = 0; i < nums.length; i++) {
                const num = nums[i];

                if (s[i] === '0') {
                        cur = num;
                } else {
                        res += Math.max(cur, num);
                        cur = Math.min(cur, num);
                }
        }

        return res;
};
