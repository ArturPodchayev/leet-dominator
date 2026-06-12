const MAXN = 100_000
const LOG = 17
const MOD = 1_000_000_007

var up [LOG][MAXN]uint32
var pow2, depth [MAXN]uint32

var offset, ptr [MAXN + 1]uint32
var adj [MAXN]uint32

func init() {
	pow2[1] = 1
	for i := 2; i < MAXN; i++ {
		pow2[i] = pow2[i-1] * 2 % MOD
	}
}

func assignEdgeWeights(edges [][]int, queries [][]int) []int {
	n := uint32(len(edges) + 1)
	// Compressed Sparse Row (CSR)
	clear(offset[:n+1])
	for _, e := range edges {
		offset[min(e[0], e[1])]++
	}
	for i := range n {
		offset[i+1] += offset[i]
	}
	copy(ptr[:n+1], offset[:n+1])
	for _, e := range edges {
		u, v := uint32(min(e[0], e[1])-1), uint32(max(e[0], e[1])-1)
		adj[ptr[u]] = v
		ptr[u]++
	}
	// Greedily process the depth of the nodes and initialize binary lifting
	depth[0] = 1
	up[0][0] = 0
	for u := range n {
		for i := offset[u]; i < offset[u+1]; i++ {
			v := adj[i]
			depth[v] = depth[u] + 1
			up[0][v] = u
		}
	}
	blocks := bits.Len32(n)
	for k := 1; k < blocks; k++ {
		for v := range n {
			up[k][v] = up[k-1][up[k-1][v]]
		}
	}
	// LCA query, O(log(n))
	lca := func(u, v uint32) uint32 {
		if depth[u] < depth[v] {
			u, v = v, u
		}
		diff := depth[u] - depth[v]
		for k := range blocks {
			if (diff>>k)&1 == 1 {
				u = up[k][u]
			}
		}
		if u == v {
			return u
		}
		for k := blocks - 1; k >= 0; k-- {
			if up[k][u] != up[k][v] {
				u, v = up[k][u], up[k][v]
			}
		}
		return up[0][u]
	}

	result := make([]int, len(queries))
	for i, q := range queries {
		u, v := uint32(q[0]-1), uint32(q[1]-1)
		path := depth[u] + depth[v] - 2*depth[lca(u, v)]
		result[i] = int(pow2[path])
	}
	return result
}
