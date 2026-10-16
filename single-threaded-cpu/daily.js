/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const prevs = getPrevIndices(nums)
    const tree = new TreeNode(0, nums.length - 1)
    let ans = 0, squareSum = 0
    for (let i = 0; i < nums.length; i++) {
        const j = prevs[i]
        const count = i - 1 - j
        const diff = count + 2 * tree.sum(j + 1, i - 1)
        squareSum += diff + 1
        tree.increment(j + 1, i)
        ans += squareSum
        ans %= 1e9 + 7
    }
    return ans
};
function getPrevIndices(nums) {
    const last = Array(1e5 + 1).fill(-1)
    const prevs = Array(nums.length).fill(-1)
    for (let i = 0; i < nums.length; i++) {
        prevs[i] = last[nums[i]]
        last[nums[i]] = i
    }
    return prevs
}
class TreeNode {
    constructor(lo, hi) {
        this.lo = lo
        this.hi = hi
        this.reserve = 0
        this.val = 0
        if (this.lo < this.hi) {    
            this.mi = Math.floor((hi + lo) / 2)
            this.l = new TreeNode(lo, this.mi)
            this.r = new TreeNode(this.mi + 1, this.hi)
        } else this.leaf = true
    }
    increment(lo, hi) {
        if (this.leaf) return this.val++
        if (lo === this.lo && hi === this.hi) return this.reserve++
        this.val += hi - lo + 1
        if (lo <= this.mi) this.l.increment(lo, Math.min(this.mi, hi))
        if (hi >= this.mi + 1) this.r.increment(Math.max(this.mi + 1, lo), hi)
    }
    sum(lo, hi) {
        if (this.reserve) this.propagate()
        if (this.leaf) return this.val
        if (lo === this.lo && hi === this.hi) return this.val
        let ans = 0
        if (lo <= this.mi) ans += this.l.sum(lo, Math.min(this.mi, hi))
        if (hi >= this.mi + 1) ans += this.r.sum(Math.max(this.mi + 1, lo), hi)
        return ans
    }
    propagate() {
        this.val += this.reserve * (this.hi - this.lo + 1)
        if (!this.leaf) {
            this.l.reserve += this.reserve
            this.r.reserve += this.reserve
        }
        this.reserve = 0
    }
}
