func findWinningPlayer(skills []int, k int) int {
    lo,hi,count := 0,1,0
    for ;hi < len(skills) && count < k; hi++ {
        if skills[lo] > skills[hi] {
            count++
        } else {
            count,lo = 1,hi
        }
    }
    return lo
}
