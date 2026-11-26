func minChanges(nums []int, k int) int {
    line := map[int]int{} 
    n := len(nums)
    for i := 0; i < n/2; i++ {
        a,b := nums[i], nums[n-1-i]
        minDiff,maxDiff,currDiff := 0, max(a-0,b-0,abs(a-k), abs(b-k)), abs(a-b)
        
        line[minDiff]++
        line[currDiff]-- 
        line[currDiff+1]++ 
        line[maxDiff+1]+=1 
    }
    
    curr,res := 0,math.MaxInt
    for i := 0; i <= int(1e5); i++ {
        curr+= line[i]
        res = min(res,curr)
    }
    return res
}

func abs(x int) int {
    if x > 0 { return x}
    return -x
}
