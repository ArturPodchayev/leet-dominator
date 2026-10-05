func shortestSubstrings(arr []string) []string {
    n:=len(arr)
    ans:=make([]string,n)
    for i:=0; i<n; i++ {
        ans[i]=check(arr[i],i,n,arr)
    }
    return ans
}
func check(str string, index,n int,arr []string) string{
    var strs []string
    for k:=0; k<len(str); k++{
        str1:=str[k:]
        for i:=1; i<=len(str1); i++{
            s:=str1[:i]
            j:=0
            for ;j<n; j++ {
                if j!=index && strings.Contains(arr[j],s){
                    break
                }
            }
            if j==n{
                strs=append(strs,s)
            }
        }
    }
    if len(strs)==0{
        return ""
    }
    sort.Slice(strs,func(i,j int)bool{
        if len(strs[i])==len(strs[j]){
            return strs[i]<strs[j]
        }
        return len(strs[i])<len(strs[j])
    })
    return strs[0]
}
