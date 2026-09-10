package main
import "container/heap"

func maximumScore(scores []int, binary string) int64 {
    maxHeap := PriorityQueue{}
    var maximumScore int64 = 0

    for i := range binary {
        heap.Push(&maxHeap, scores[i])
        if binary[i] == '1' {
            maximumScore += int64(heap.Pop(&maxHeap).(int))
        }
    }
    return maximumScore
}

type PriorityQueue []int

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first] > pq[second]
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
}

func (pq *PriorityQueue) Push(object any) {
    value := object.(int)
    *pq = append(*pq, value)
}

func (pq *PriorityQueue) Pop() any {
    value := (*pq)[pq.Len() - 1]
    *pq = (*pq)[0 : pq.Len() - 1]
    return value
}
