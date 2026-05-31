//DFS Function
func dfs(v, w, mod int, graph *map[int][][]int, use *map[int]bool, counter *int) {
    // Skip if we been there
    if (*use)[v] {
        return
    }
    (*use)[v] = true
    // If, during the traversal of the tree, 
    // the distance traveled is divisible by signalSpeed, 
    // then this node satisfies the problem condition. 
    // Add +1 to the vertex counter 
    if w % mod == 0 {
        (*counter) = (*counter) + 1
    }
    for _, edge := range (*graph)[v] {
        nextV := edge[0]
        nextW := w + edge[1]
        // Next DFS call
        dfs(nextV, nextW, mod, graph, use, counter)
    }
}

func countPairsOfConnectableServers(edges [][]int, signalSpeed int) []int {
    // Graph building
    graph := make(map[int][][]int)
    for _, edge := range edges {
        graph[edge[0]] = append(graph[edge[0]], []int{edge[1], edge[2]})
        graph[edge[1]] = append(graph[edge[1]], []int{edge[0], edge[2]})
    }
    // Initian ans slice
    n := len(edges) + 1
    ans := make([]int, n)
    // Start main for, in which we will find the answer for each vertex
    for startV, nextVsInfo := range graph {
        // Initialize an array that will store the number of 
        // vertices satisfying the condition for each connected vertex.
        suitableVCountMsv := []int{}
        // For each edge (vertex) connected to the current one, 
        // we find this number. 
        for _, nextVInfo := range nextVsInfo {
            nextV := nextVInfo[0]
            startW := nextVInfo[1]
            suitableVCount := 0
            use := map[int]bool{
                startV: true,
            }
            // (Starting DFS)
            dfs(nextV, startW, signalSpeed, &graph, &use, &suitableVCount)
            // Append this number
            suitableVCountMsv = append(suitableVCountMsv, suitableVCount)
        }
        
        // Finding the answer for the vertex. 
        nEdges := len(suitableVCountMsv)
        for i := 0; i <= nEdges - 1; i++ {
            for j := i + 1; j <= nEdges - 1; j++ {
                ans[startV] += suitableVCountMsv[i] * suitableVCountMsv[j]
            }
        }
    }
    
    return ans
}
