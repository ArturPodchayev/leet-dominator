func findIndices(nums []int, indexDifference int, valueDifference int) []int {
    n := len(nums)
    minVal, maxVal := nums[0], nums[0]
    minIdx, maxIdx := 0, 0
    for j := indexDifference; j < n; j++ {
        i := j - indexDifference
        if nums[i] < minVal {minVal = nums[i];minIdx = i}
        if nums[i] > maxVal {maxVal = nums[i];maxIdx = i}
        if nums[j]-minVal >= valueDifference {return []int{minIdx, j}}
        if maxVal-nums[j] >= valueDifference {return []int{maxIdx, j}}
    }
    return []int{-1, -1}
}
