func minimizeSum(nums []int) int {
    minHeap := [3]int{math.MaxInt, math.MaxInt, math.MaxInt}
    maxHeap := [3]int{math.MinInt, math.MinInt, math.MinInt}
    for _, num := range nums {
        if num < minHeap[0] {
            minHeap[0], minHeap[1], minHeap[2] = num, minHeap[0], minHeap[1]
        } else if num < minHeap[1] {
            minHeap[1], minHeap[2] = num, minHeap[1]
        } else if num < minHeap[2] {
            minHeap[2] = num
        }
        if num > maxHeap[0] {
            maxHeap[0], maxHeap[1], maxHeap[2] = num, maxHeap[0], maxHeap[1]
        } else if num > maxHeap[1] {
            maxHeap[1], maxHeap[2] = num, maxHeap[1]
        } else if num > maxHeap[2] {
            maxHeap[2] = num
        }
    }
    return min(maxHeap[2]-minHeap[0], maxHeap[1]-minHeap[1], maxHeap[0]-minHeap[2])
}
