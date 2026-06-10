func canArrange(arr []int, k int) bool {
    mp := make(map[int]int, 0)
    for _, n := range arr {
        remainder := n % k
        if remainder < 0 {
            remainder += k // Make remainder positive
        }
        mp[remainder] += 1
    }
    for kk, v := range mp {
        if kk == 0 && v%2 != 0 {
            return false
        } else if kk != 0 && mp[kk] != mp[k - kk] {
            return false
        }
    }
    return true
}
