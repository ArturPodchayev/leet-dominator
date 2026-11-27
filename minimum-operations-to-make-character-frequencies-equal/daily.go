func maximumSaleItems(items [][]int, startBudget int) int {
    minPrice := items[0][1]
    bonus := make([]int, len(items)) // the bonus one could obtain for each item
    for i := 0; i < len(items); i++ {
        minPrice = min(minPrice, items[i][1]) // calculate for later to use the remaining budget with it
        for j := 0; j < len(items); j++ {
            if i == j {
                continue
            }
            if items[j][0] % items[i][0] == 0 {
                bonus[i]++
            }
        }
    }
    
    memo := make([][]int, len(items))
    for i := range memo {
        memo[i] = make([]int, startBudget+1)
        for j := range memo[i] {
            memo[i][j] = -1
        }
    }
    var dfs func(idx int, budget int) int
    dfs = func(idx int, budget int) int {
        if idx == len(items) { 
            return budget / minPrice // use all remaining budget
        }
        if memo[idx][budget] != -1 {
            return memo[idx][budget]
        }

        take := 0
        if diff := budget - items[idx][1]; diff >= 0 {
           take = 1 + bonus[idx] + dfs(idx+1, budget - items[idx][1])
        }
         
        skip := dfs(idx+1, budget)

        memo[idx][budget] = max(take, skip)
        return max(take, skip)
    }

    return dfs(0, startBudget)
}
