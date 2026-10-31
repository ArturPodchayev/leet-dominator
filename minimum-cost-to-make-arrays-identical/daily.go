func uniquePaths(grid [][]int) int {
    m,n := len(grid), len(grid[0])
    modulo := int(1e9) + 7
    right,down := 0,1
    memo := make([][][]int, m+1)
    for i := range memo {
        memo[i] = make([][]int, n+1)
        for j := range memo[i] {
            memo[i][j] = []int{-1,-1}
        }
    }
    var dfs func(i,j,prevMove int) int
    dfs = func(i,j,prevMove int) int {
        if i < 0 || j < 0 || i >= m || j >= n {
            return 0
        }
        if i == m-1 && j == n-1 {
            return 1
        }
        if memo[i][j][prevMove] != -1 {
            return memo[i][j][prevMove]
        }
        res := 0
        if grid[i][j] == 1 {
            if prevMove == down {
                res = dfs(i,j+1,right)
            } else {
                res = dfs(i+1,j,down)
            }
        } else {
            res = dfs(i+1,j,down) + dfs(i,j+1,right) 
        }

        memo[i][j][prevMove] = res % modulo
        return res % modulo
    }

    return dfs(0,0,0)
}
