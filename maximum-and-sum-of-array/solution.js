/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
    const len = nums.length
    const ub = 1 << len
    
    // fromJ, mask => outcome
    const memo = new Array(numSlots)
    for (const j of memo.keys())
        memo[j] = new Array(ub)
    
    function getPairs(indices) {
        const size = indices.length
        if (size < 2) {
            return []
        }

        const result = [], sizeMinus1 = size - 1
        for (let i = 0; i < sizeMinus1; i++) {
            const a = indices[i]
            for (let j = 1 + i; j < size; j++) {
                const b = indices[j]
                result.push([a, b])
            }
        }
        
        return result
    }

    function dp(fromJ, mask) {
        const rmg = numSlots - fromJ, capacity = rmg * 2
        let availCount = 0
        for (let i = 0, bit = 1; i < len; i++, bit <<= 1) {
            if ((mask & bit) === 0) {
                availCount++
            }
        }

        if (fromJ === numSlots) {
            return 0
        }
        
        const ext = memo[fromJ][mask]
        if (ext !== undefined)  return ext

        const indices = []
        for (let i = 0, bit = 1; i < len; i++, bit <<= 1) {
            if ((mask & bit) === 0) {
                indices.push(i)
            }
        }

        const fromJPlus1 = 1 + fromJ
        const nextCapacity = capacity - 2

        let outcomeWith0 = -Infinity
        if (availCount <= nextCapacity)
            outcomeWith0 = dp(fromJPlus1, mask)
        let outcomeWith1 = -Infinity
        if (availCount - 1 <= nextCapacity) {
            for (const index of indices) {
                const nextMask = (1 << index) | mask
                const val = nums[index]

                const subresult = dp(fromJPlus1, nextMask)
                const outcome = (fromJPlus1 & val) + subresult
                outcomeWith1 = Math.max(outcomeWith1, outcome)
            }
        }

        let outcomeWith2 = -Infinity
        for (const [indexA, indexB] of getPairs(indices)) {
            const nextMask = (1 << indexA) | (1 << indexB) | mask
            const valA = nums[indexA], valB = nums[indexB]

            const subresult = dp(fromJPlus1, nextMask)
            const outcome = ((fromJPlus1 & valA) + (fromJPlus1 & valB)) + subresult
            outcomeWith2 = Math.max(outcomeWith2, outcome)
        }

        const result = Math.max(outcomeWith0, outcomeWith1, outcomeWith2)
        return memo[fromJ][mask] = result
    }


    const result = dp(0, 0)
    return result
};
