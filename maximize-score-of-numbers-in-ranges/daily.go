func maximumLength(nums []int) int {
    nm := map[int]int{}
    for _, n := range nums {
        nm[n] ++
    }
    res := 0
    for x := range nm {
        res = max(res, pl(x, nm))
    }
    return res
}

func pl(x int, m map[int]int) int {
    if x == 1 {
        if m[1] < 3 { return 1 }
        if m[1] % 2 == 0 { return m[1] - 1}
        return m[1]
    }
    if m[x] <= 1 {
        return 1
    }
    r := 1
    x = x * x
    _, ok := m[x]
    for ok {
        if m[x] < 2 { r++; break }
        x = x * x; r += 2
        _, ok = m[x]
    }
    if r % 2 > 0 || r == 1 {
        return r
    }
    return r + 1
}
