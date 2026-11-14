func minimumSumSubarray(nums []int, l int, r int) int {
    minSum := math.MaxInt32
    found := false
    for i := l ; i <= r; i++ {
        for j := 0; j <= len(nums)-i; j++ {
            sub := nums[j:j+i]
            subSum := sum(sub)
            minVal := min(minSum, subSum)
            if minVal > 0 && minVal < minSum {
                minSum = minVal
                found = true
            }
        }
    }

    if !found {
        return -1
    }
    
    return minSum
}

func sum(arr []int) int {
    sumVal := 0
    for _, val := range arr {
        sumVal += val
    }
    return sumVal
}
