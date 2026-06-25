function countMajoritySubarrays(nums: number[], target: number): number {
    let ans: number = 0

    if (!nums.includes(target)) return ans

    let dp: Map<number, number>[] = new Array()

    for (let i: number = 0; i < nums.length; i++) {
        let curr: Map<number, number> = new Map(dp[i - 1])
        curr.set(0, i + 1) //set 0 = subarrays length
        curr.set(nums[i], (curr.get(nums[i]) || 0) + 1)
        dp.push(curr)

        if ((curr.get(target) || 0) > curr.get(0) / 2) ans++
    }


    for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = i; j < nums.length; j++) {
            let curr: Map<number, number> = dp[j]

            curr.set(0, curr.get(0) - 1)

            curr.set(nums[i - 1], curr.get(nums[i - 1]) - 1)
            if ((curr.get(target) || 0) > curr.get(0) / 2) ans++
        }
    }



    return ans
};
