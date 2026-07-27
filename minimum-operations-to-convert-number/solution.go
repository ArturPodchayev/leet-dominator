func minimumOperations(nums []int, start int, goal int) int {
    seen := make(map[int]bool)
    q := []int{goal}
    cnt := 0

    for len(q) > 0 {
        cnt++
        var q1 []int
        for _, x := range q {
            for _, n := range nums {
                for _, xn := range []int{x + n, x - n, x ^ n} {
                    if xn >= 0 && xn <= 1000 && !seen[xn] {
                        if xn == start {
                            return cnt
                        }
                        seen[xn] = true
                        q1 = append(q1, xn)
                    }
                }
            }
        }
        q = q1
    }

    return -1
}
