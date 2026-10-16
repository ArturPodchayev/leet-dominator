import "container/heap"


func getOrder(tasks [][]int) []int {
	for i := 0; i < len(tasks); i++ {
		tasks[i] = append(tasks[i], i)
	}

	sort.SliceStable(tasks, func(i, j int) bool {
		return tasks[i][0] < tasks[j][0]
	})

	time := 0
	index := 0
	queue := &IntHeap{}
	var order []int
	for queue.Len() > 0 || index < len(tasks) {
		for ; index < len(tasks) && tasks[index][0] <= time; index++ {
			heap.Push(queue, tasks[index])
		}
		if queue.Len() > 0 {
			current_task := heap.Pop(queue).([]int)
			time += current_task[1]
			order = append(order, current_task[2])
		} else if index < len(tasks) {
			time = tasks[index][0]
		}
	}
	return order
}

// https://pkg.go.dev/container/heap
type IntHeap [][]int

func (h IntHeap) Len() int { return len(h) }
func (h IntHeap) Less(i, j int) bool {
	if h[i][1] == h[j][1] {
		return h[i][2] < h[j][2]
	}
	return h[i][1] < h[j][1]
}
func (h IntHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.([]int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
