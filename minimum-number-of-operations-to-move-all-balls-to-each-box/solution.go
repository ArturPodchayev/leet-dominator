func minOperations(boxes string) []int {
    ans := make([]int, len(boxes))
    cnt := 0
    for i, b := range boxes {
        if i > 0 {
            ans[i] = cnt + ans[i-1]
        }
        if b == '1' {
            cnt++
        }
    }
    cnt = 0
    dist := 0
    for i := len(boxes)-1; i >= 0; i-- {
        ans[i] += dist
        if boxes[i] == '1' {
            cnt++
        }
        dist += cnt
    }
    return ans
}
