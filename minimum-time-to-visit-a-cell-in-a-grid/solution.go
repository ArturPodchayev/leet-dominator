type Item struct {
	i int
    j int
	priority int
	index int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x any) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() any {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}

func offset(a int, b int) int {
    if a%2 != b%2 {
        return 1
    }
    return 0
}

func minimumTime(grid [][]int) int {
    vis := make([][]bool, len(grid))
    for i:=0; i<len(vis); i++ {
        vis[i] = make([]bool, len(grid[0]))
    }

    pq := make(PriorityQueue, 0)
    heap.Init(&pq)
    heap.Push(&pq, &Item{i: 0, j: 0, priority: 0})

    for len(pq) > 0 {
        s := heap.Pop(&pq).(*Item)
        i := s.i
        j := s.j
        if vis[i][j] {
            continue
        }
        vis[i][j] = true

        if i == len(grid)-1 && j == len(grid[0])-1 {
            return s.priority
        }

        if (i-1>=0 && s.priority + 1 >= grid[i-1][j]) || (i+1<len(grid) && s.priority + 1 >= grid[i+1][j]) || (j-1>=0 && s.priority + 1 >= grid[i][j-1]) || (j+1<len(grid[0]) && s.priority + 1 >= grid[i][j+1]) {
            if i-1>=0 {
                heap.Push(&pq, &Item{i: i-1, j: j, priority: max(s.priority+1, grid[i-1][j]+offset(grid[i-1][j], s.priority+1))})
            }
            if i+1 < len(grid) {
                heap.Push(&pq, &Item{i: i+1, j: j, priority: max(s.priority+1, grid[i+1][j]+offset(grid[i+1][j], s.priority+1))})
            }
            if j-1>=0 {
                heap.Push(&pq, &Item{i: i, j: j-1, priority: max(s.priority+1, grid[i][j-1]+offset(grid[i][j-1], s.priority+1))})
            }
            if j+1 < len(grid[0]) {
                heap.Push(&pq, &Item{i: i, j: j+1, priority: max(s.priority+1, grid[i][j+1]+offset(grid[i][j+1], s.priority+1))})
            }
        }

    }

    return -1
}
