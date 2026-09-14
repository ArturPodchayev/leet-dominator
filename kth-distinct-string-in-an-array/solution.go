func kthDistinct(arr []string, k int) string {
    count := make(map[string]int)
    
   
    for _, str := range arr {
        count[str]++
    }
    
   
    distinct := []string{}
    for _, str := range arr {
        if count[str] == 1 {
            distinct = append(distinct, str)
        }
    }
    
 
    if k > 0 && k <= len(distinct) {
        return distinct[k-1]
    }
    
    return ""
}
