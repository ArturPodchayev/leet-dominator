func getMaxGridHappiness(m int, n int, introvertsCount int, extrovertsCount int) int {
    dp := [25][7][7][64][64]int{}
    return dfs(m, n, 0, introvertsCount, extrovertsCount, 0, 0, &dp)
}

func dfs(m int, n int, p int, in int, ex int, mask_in int, mask_ex int, dpp *[25][7][7][64][64]int) int {
    i, j := p / n, p % n
    if i >= m {
        return 0
    }
    
    if dpp[p][in][ex][mask_in][mask_ex] > 0 {
        return dpp[p][in][ex][mask_in][mask_ex]
    }
    n_mask_in, n_mask_ex := (mask_in << 1) & 63, (mask_ex << 1) & 63
    res := dfs(m, n, p+1, in, ex, n_mask_in, n_mask_ex, dpp)
    
    if in > 0 {
        diff := 120 + nCost(m, n, i, j, mask_in, mask_ex, -30)
        res = max(res, diff + dfs(m, n, p+1, in-1, ex, n_mask_in+1, n_mask_ex, dpp))
    }
    
    if ex > 0 {
        diff := 40 + nCost(m, n, i, j, mask_in, mask_ex, 20)
        res = max(res, diff + dfs(m, n, p+1, in, ex-1, n_mask_in, n_mask_ex+1, dpp))
    }
    
    dpp[p][in][ex][mask_in][mask_ex] = res
    return res
}

func nCost(m int, n int, i int, j int, mask_in int, mask_ex int, d int) int {
    diff, up := 0, (1 << (n-1))
    if j > 0 && (mask_in & 1) > 0 {
        diff += d - 30
    }
    if i > 0 && (mask_in & up) > 0 {
        diff += d - 30
    }
    if j > 0 && (mask_ex & 1) > 0 {
        diff += d + 20
    }
    if i > 0 && (mask_ex & up) > 0 {
        diff += d + 20
    }
    return diff
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
