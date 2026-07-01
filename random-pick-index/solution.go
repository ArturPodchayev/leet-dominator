type Solution struct {
    dp map[int][]int
}


func Constructor(nums []int) Solution {
    dp:=make(map[int][]int)
    n:=len(nums)
    for i:=0; i<n; i++{
        dp[nums[i]]=append(dp[nums[i]],i)
    }
    return Solution{dp:dp}
}


func (this *Solution) Pick(target int) int {
    arr:=this.dp[target]
    n:=len(arr)
    num:=rand.Intn(n)
    return arr[num]
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.Pick(target);
 */
