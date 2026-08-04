func buildMatrix(k int, rowConditions [][]int, colConditions [][]int) [][]int {
	rowOrder := toposortKahnAlgo(k, rowConditions)
	if len(rowOrder) != k {
		return [][]int{}
	}
	colOrder := toposortKahnAlgo(k, colConditions)
	if len(colOrder) != k {
		return [][]int{}
	}
	result := make([][]int, k)
	colIndex := make([]int, k+1)
	for j := range colOrder {
		colIndex[colOrder[j]] = j
	}
	for i := 0; i < k; i++ {
		if result[i] == nil {
			result[i] = make([]int, k)
		}
		result[i][colIndex[rowOrder[i]]] = rowOrder[i]
	}
	return result
}

func toposortKahnAlgo(k int, con [][]int) []int {
	parentCnt := make([]int, k+1)
	childrenList := make([][]int, k+1)
	for i := range con {
		parentCnt[con[i][1]]++
		if childrenList[con[i][0]] == nil {
			childrenList[con[i][0]] = make([]int, 0, 1)
		}
		childrenList[con[i][0]] = append(childrenList[con[i][0]], con[i][1])
	}
	res := make([]int, 0, k)
	q := NewQueue()
	for i := 1; i <= k; i++ {
		if parentCnt[i] == 0 {
			q.Push(i)
		}
	}
	for q.Len() > 0 {
		t := q.Pop()
		res = append(res, t)
		for i := range childrenList[t] {
			parentCnt[childrenList[t][i]]--
			if parentCnt[childrenList[t][i]] == 0 {
				q.Push(childrenList[t][i])
			}
		}
	}
	return res
}

type Queue []int

func NewQueue() Queue {
	return make([]int, 0)
}

func (q *Queue) Push(v int) {
	*q = append(*q, v)
}

func (q *Queue) Pop() int {
	old := *q
	x := old[0]
	*q = old[1:]
	return x
}

func (q *Queue) Len() int {
	return len(*q)
}
