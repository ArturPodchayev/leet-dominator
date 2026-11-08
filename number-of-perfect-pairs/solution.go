
import (
    "fmt"
    "slices"
)

func perfectPairs(nums []int) int64 {
    for i, v := range nums{
        if v < 0 {
            nums[i] = abs(v)
        }
    }
    slices.Sort(nums)
    numPFPs := int64(0)
    n := len(nums)
    for i:=0; i<n-1; i++{
        a := nums[i]
        // no need lower bounds, due to sorted-positive nums
        upper := a << 1
        right := findLastLTE(nums, upper)
        if right == -1 || right <= i{
            continue
        }
        numPFPs = numPFPs + int64(right - i)
    }
    return numPFPs
}

func findLastLTE(
    nums []int, 
    value int, 
) int {
    // bin search to get last LTE index inclusive
    // ASSUMES nums is sorted. Not re-sorting due to LC.
    // if not found, return -1
    // eg nums=[1,1,5,5,5,5,11,11]
    // LTE 5 -> 5 (nums[5] is last LTE 5)
    // LTE 7 -> 5
    // LTE 0 -> -1
    // LTE 20 -> 7
    n := len(nums)
    // find the boundary where left + 1 = right 
    // and nums[left] OK, nums[right] NOT OK
    left, right := 0, n-1
    // early return check
    if nums[left] > value {
        return -1
    }
    var m int // midpoint
    for left <= right {
        m = ((right - left) >> 1) + left
        if nums[m] <= value{
            if m == n-1 {
                return m    
            }
            if nums[m+1] > value {
                return m
            }
        }
        switch{
        case nums[m] > value:
            right = m
        case nums[m+1] <= value:
            left = m+1
        }
    }
    return -1
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
