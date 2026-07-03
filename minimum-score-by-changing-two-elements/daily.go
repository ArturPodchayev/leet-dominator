func findMaxPathScore(edges [][]int, o []bool, k int64) int {
    al := make([][][2]int, len(o)) // adjacency list, [2]{edge, cost}
    mc := 0
    for _, e := range edges {
        if !o[e[0]] || !o[e[1]] { continue } // filter blocked (offline) edges
        al[e[0]] = append(al[e[0]], [2]int{e[1], e[2]})
        mc = max(mc, e[2]) // get max cost between edges for binary search
    }
    l, r := 0, mc + 1 // start binary search, 0, max cost + 1
    for l < r {
        m := (l + r)/2
        if dij(m, k, al) { // if optimal path with limitation of edge cost == m (middle value) and total cost not exeeding k exist, we could try better value
            l = m + 1
        } else {
            r = m // if no optimap path with constraints exist, try to reduce limitations
        }
    }
    if l == 0 { // if no path exist
		return -1
	}
	return l - 1 // because everything <= l is ok for us, l+1 is first not OK value of minimum edge cost
}



func dij(c int, k int64, al [][][2]int) bool { // dijkstra
	n := len(al)
	ds := make([]int64, n) // path costs
	for i := range ds {
		ds[i] = math.MaxInt64
	}
	ds[0] = 0
	pq := &ih{{0, 0}} // int heap
	heap.Init(pq)
	for pq.Len() > 0 {
		cur := heap.Pop(pq).([2]int)
		u, du := cur[0], int64(cur[1])
		if du > ds[u] { // if next edge is not optimal
			continue
		}
		for _, e := range al[u] {
			v, w := e[0], int64(e[1])
			if w >= int64(c) && du+w < ds[v] { // if next cost better then current optimal
				ds[v] = du + w // update cost
				heap.Push(pq, [2]int{v, int(ds[v])}) // push edge to heap
			}
		}
	}
	return ds[n-1] <= k // if we have reached end of graph, check if we exeeded maximum avalible path cost (k)
}

type ih [][2]int // int heap ([2]int{edge, cost})
func (h ih) Len() int           { return len(h) }
func (h ih) Less(i, j int) bool { return h[i][1] < h[j][1] }
func (h ih) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *ih) Push(x any) { *h = append(*h, x.([2]int)) }
func (h *ih) Pop() any   { x := (*h)[len(*h)-1]; *h = (*h)[:len(*h)-1]; return x }
