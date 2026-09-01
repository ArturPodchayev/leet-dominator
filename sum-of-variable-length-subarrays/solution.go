func subarraySum(nums []int) (r int) {
    x := 0
    for i := 0; i < len(nums); i++{
        if i - nums[i] < 0 {
            x = 0
        } else {
            x = i -  nums[i]
        }
        t := 0
        for j := x; j <= i; j++{
            t += nums[j]
        }
        r += t
    }
	return
}
