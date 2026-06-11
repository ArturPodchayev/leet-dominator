func assignEdgeWeights(edges [][]int) int {
	const MOD int64 = 1_000_000_007

	n := len(edges) + 1

	g := make([][]int, n+1)
	for _, e := range edges {
		u, v := e[0], e[1]
		g[u] = append(g[u], v)
		g[v] = append(g[v], u)
	}

	parent := make([]int, n+1)
	parent[1] = -1

	q := make([]int, 0, n)
	q = append(q, 1)

	maxDepth := -1

	for head := 0; head < len(q); {
		levelSize := len(q) - head
		maxDepth++

		for i := 0; i < levelSize; i++ {
			u := q[head]
			head++

			for _, v := range g[u] {
				if parent[v] == 0 {
					parent[v] = u
					q = append(q, v)
				}
			}
		}
	}

	return powMod2(maxDepth - 1)
}

func powMod2(exp int) int {
	const MOD int64 = 1_000_000_007

	var res int64 = 1
	var base int64 = 2

	for exp > 0 {
		if exp&1 == 1 {
			res = res * base % MOD
		}
		base = base * base % MOD
		exp >>= 1
	}

	return int(res)
}
