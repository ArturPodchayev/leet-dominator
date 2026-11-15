func numOfSubarrays(arr []int) int {
    var sum,odd,res int
    for i,a:=range arr{
        sum=(sum+a)%2
        if sum==0{
            res+=odd
        }else{
            odd++
            res+=(i+1-odd)+1 // +1 for single 'a' number ex) [1],[3],[5] for arr=[1,3,5]
        }
    }
    return res%(1e9+7)
}
