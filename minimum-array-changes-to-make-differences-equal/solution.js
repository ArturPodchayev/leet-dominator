/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
    const n = nums.length
    const temp = new Array(Math.max(nums.length, k + 1)).fill(0)
    const freqs = new Array(Math.max(nums.length, k + 1)).fill(0)
    for (let i = 0; i * 2 < nums.length - 1; i++) {
        // console.debug(i, nums[i], nums[n-i-1], Math.abs(nums[i] - nums[n-i-1]))
        const res = Math.abs(nums[i] - nums[n-i-1])
        freqs[res] += 2
        temp[Math.max(Math.max(nums[i], nums[n-i-1]), (k - Math.min(nums[i], nums[n-i-1]))) + 1]++
    }
    let count = 0
    for (let i = 0 ; i < temp.length; i++) {
        count += temp[i]
        freqs[i] -= count
    }

    // console.debug(freqs)
    let best = -1
    let bestIndex = -1
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] > best) {
            best = freqs[i]
            bestIndex = i
        }
    }

    let ans = 0
    for (let i = 0; i * 2 < nums.length - 1; i++) {
        const res = Math.abs(nums[i] - nums[n-i-1])
        // console.debug('ans', ans, bestIndex)
        if (res === bestIndex) continue
        
        if (bestIndex > Math.max(Math.max(nums[i], nums[n-i-1]), (k - Math.min(nums[i], nums[n-i-1])))) {
            ans += 2
            continue
        }
        ans++
    }
    return ans
};
