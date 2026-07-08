function maximumANDSum(nums: number[], numSlots: number): number {
    const n = nums.length

    let fullMask = 0
    for (let i = 0; i < numSlots; i++) {
        fullMask = (fullMask << 2) | 0b10
    }

    const dp = Array.from({ length: fullMask + 1 }, () => -1)

    return f(0, 0)

    function f(mask: number, i: number) {
        if (i === n || mask === fullMask) return 0

        if (dp[mask] !== -1) return dp[mask]

        let maxi = 0

        for (let slotNumber = 1; slotNumber <= numSlots; slotNumber++) {
            const slotIdx = (slotNumber - 1) * 2

            // Skip if slot is full
            const slotState = (mask >> slotIdx) & 0b11
            if (slotState === 2) continue

            const nextSlotState = slotState + 1
            const resetSlot = mask & ~(0b11 << slotIdx)
            const nextMask = resetSlot | (nextSlotState << slotIdx)
            const score = slotNumber & nums[i]
            
            maxi = Math.max(maxi, score + f(nextMask, i + 1))
        }

        return dp[mask] = maxi
    }
};
