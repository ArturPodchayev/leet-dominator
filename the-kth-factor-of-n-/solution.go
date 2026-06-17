func kthFactor(n int, k int) int {
    for i:=1; i<=n/2+1; i++{
        if n%i==0{
            k--
        }
        if k==0{
            return i
        }
    }
    if k==1{
        return n
    }
    return -1
}
