func minArrivalsToDiscard(nums []int, w int, m int) int {
    n:=len(nums)
    l:=0
    r:=0
    len:=0
    ans:=0
    m1:=make(map[int]int)
    vis:=make([]int,n)
    for ;r<n;r++ {
       m1[nums[r]]++;
       vis[r]=1;
       len++;
       for ;len>w&&l<=r;{
        if vis[l]==1{
            m1[nums[l]]--;
        }
        l++;
        len--;
       }
       if m1[nums[r]]>m{
        ans++;
        m1[nums[r]]--;
        vis[r]=0;
       }
    }
    return ans;
}
