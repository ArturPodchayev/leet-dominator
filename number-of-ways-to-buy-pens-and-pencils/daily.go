func minCost(g [][]int) int {
    m, n := len(g), len(g[0])
    s := 1024 // 0 <= grid[i][j] <= 1023​ (xor will not produce new extra bits)

    mem := make([][][]int, m) // mem[y][x][current_xor_value_at_y_x]
    for y := 0; y < m; y++ {
        mem[y] = make([][]int, n)
        for x := 0; x < n; x++ {
            mem[y][x] = make([]int, s)
            for c := range mem[y][x] {
                mem[y][x][c] = -1
            }
        }
    }

    var dfs func(y, x, c int) int // dfs
    dfs = func(y, x, c int) int {
        if y >= m || x >= n { // out of bounds
            return math.MaxInt32
        }

        if mem[y][x][c] != -1 { // check memory
            return mem[y][x][c]
        }

        r := g[y][x] ^ c // xor current cell + previous result

        if y == m-1 && x == n-1 { // if we are at the button
            mem[y][x][c] = r
            return r
        }

        res := min(dfs(y+1, x, r), dfs(y, x+1, r)) // dfs fro move right or move down

        mem[y][x][c] = res // update mem
        return res
    }
    return dfs(0, 0, 0)
}
