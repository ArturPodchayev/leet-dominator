func assignTasks(servers []int, tasks []int) []int {
    q := &spq{} // preferable server queue
    b := &jpq{} // busy servers
    res := make([]int, len(tasks))
    for id, w := range servers { // add servers to preferable server priority queue
        heap.Push(q, &s{
            id: id,
            w: w,
        })
    }
    currentTime := 0
    for t := 0; t < len(tasks); t++ {
        if currentTime < t {
            currentTime = t
        }
        for b.Len() > 0 && (*b)[0].t <= currentTime { // if we have servers, which are finished their jobs, push them back to server queue
            fs := heap.Pop(b).(*s)
            fs.t = 0
            heap.Push(q, fs)
        }
        if q.Len() == 0 { // if there are no avalible servers, release all servers with earliest competition time (task: If there are no free servers and the queue is not empty, we wait until a server becomes free)
            currentTime = (*b)[0].t
            // Release all servers completed at this time.
            for b.Len() > 0 && (*b)[0].t <= currentTime {
                fs := heap.Pop(b).(*s)
                fs.t = 0
                heap.Push(q, fs)
            }
        }
        // Assign the task to the most preferable server.
        ns := heap.Pop(q).(*s)
        ns.t = currentTime + tasks[t]
        heap.Push(b, ns)
        res[t] = ns.id
    }
    return res
}




type s struct { // server
    id int // id
    w  int // weight
    t  int // job time
}

type spq []*s // server to job preferance by weight and id after
func (h spq) Len() int           { return len(h) }
func (h spq) Less(i, j int) bool {
    if h[i].w == h[j].w { return h[i].id < h[j].id }
    return h[i].w < h[j].w
}
func (h spq) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *spq) Push(x any) {
	*h = append(*h, x.(*s))
}
func (h *spq) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

type jpq []*s // busy server job (less time -> better)
func (h jpq) Len() int           { return len(h) }
func (h jpq) Less(i, j int) bool { return h[i].t < h[j].t }
func (h jpq) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *jpq) Push(x any) {
	*h = append(*h, x.(*s))
}
func (h *jpq) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
