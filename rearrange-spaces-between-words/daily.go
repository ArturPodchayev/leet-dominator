func pivotArray(nums []int, pivot int) []int {
    ltCount, eqCount, gtCount := 0, 0, 0
    for i := 0; i < len(nums); i++ {
        if nums[i] < pivot {
            ltCount++
            nums[i] += ltCount*1e12 + 1e6
        } else if nums[i] == pivot {
            eqCount++
            nums[i] += eqCount*1e12 + 1e6
        } else {
            gtCount++
            nums[i] += gtCount*1e12 + 1e6
        }
    }

    for i := 0; i < len(nums); i++ {
        num := nums[i]
        for num > 1e6 {
            val := num % 1e12 - 1e6
            shift := (num - val)/1e12

            var pos int
            if val < pivot {
                pos = shift - 1
            } else if val == pivot {
                pos = ltCount + shift - 1
            } else {
                pos = ltCount + eqCount + shift - 1
            }

            num, nums[pos] = nums[pos], val
        }
    }

    return nums
}
