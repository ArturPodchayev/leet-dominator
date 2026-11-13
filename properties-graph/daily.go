func countNonDecreasingSubarrays(nums []int, k int) int64 {
    var ans, cost int64
    dq := []int{}
    j := len(nums) - 1
    for i := len(nums) - 1; i >= 0; i-- {
        num := nums[i]
        for len(dq) > 0 && nums[dq[len(dq)-1]] < num {
            l := dq[len(dq)-1]
            dq = dq[:len(dq)-1]
            r := j + 1
            if len(dq) > 0 {
                r = dq[len(dq)-1]
            }
            cost += int64(r-l) * int64(num-nums[l])
        }
        dq = append(dq, i)
        for cost > int64(k) {
            cost -= int64(nums[dq[0]] - nums[j])
            if dq[0] == j {
                dq = dq[1:]
            }
            j--
        }
        ans += int64(j - i + 1)
    }
    return ans
}
