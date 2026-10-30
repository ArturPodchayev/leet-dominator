func shortestPath(n int, edges [][]int, labels string, k int) int {
    if k < 1 {
        return -1
    }
    al := make([][][2]int, n)
    for _, e := range edges {
        al[e[0]] = append(al[e[0]], [2]int{e[1], e[2]})
    }
    // dist[v][c] = shortest distance to reach v with c trailing same-label chars
    dist := make([][]int, n)
    for i := range dist {
        dist[i] = make([]int, k+1)
        for j := range dist[i] {
            dist[i][j] = math.MaxInt32
        }
    }
    dist[0][1] = 0 // start from 1 trailing char (label of node 0)
    h := &pq{{0, 0, 1}} // {node, distance, trailing_count}
    for h.Len() > 0 {
        u := heap.Pop(h).([3]int)
        node, w, c := u[0], u[1], u[2]
        if w > dist[node][c] {     // stale heap entry
            continue
        }
        if node == n-1 {           // if we have finished
            return w
        }
        for _, e := range al[node] {
            v, ew := e[0], e[1]
            nc := 1 // color number (start over)
            if labels[node] == labels[v] { // if current color == next node color, update number of colors with +1
                nc = c + 1
            }
            if nc > k {            // reject before pushing (we can not preceed path with colors more then required)
                continue
            }
            nw := w + ew
            if nw < dist[v][nc] { // if weight is less, update dist; push to heap
                dist[v][nc] = nw
                heap.Push(h, [3]int{v, nw, nc})
            }
        }
    }
    return -1
}

// priority queue
type pq [][3]int
func (h pq) Len() int            { return len(h) }
func (h pq) Less(i, j int) bool  { return h[i][1] < h[j][1] }
func (h pq) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *pq) Push(x any)         { *h = append(*h, x.([3]int)) }
func (h *pq) Pop() any {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}
