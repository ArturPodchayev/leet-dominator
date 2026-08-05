func remainingMethods(n int, k int, invocations [][]int) []int {
	adjList := make(map[int][]int)
	for _, inv := range invocations {
		adjList[inv[0]] = append(adjList[inv[0]], inv[1])
	}
	visited := make(map[int]bool)
	var dfs func(node int)
	dfs = func(node int) {
		if visited[node] {
			return
		}
		visited[node] = true
		for _, nei := range adjList[node] {
			dfs(nei)
		}
	}
	dfs(k)
	if len(visited) == n {
		return []int{}
	}
	var res []int
	for _, inv := range invocations {
		if !visited[inv[0]] && visited[inv[1]] {
			for i := range n {
				res = append(res, i)
			}
			return res
		}
	}
	for i := 0; i < n; i++ {
		if !visited[i] {
			res = append(res, i)
		}
	}
	return res
}
