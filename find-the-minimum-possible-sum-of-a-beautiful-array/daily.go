import (
	"fmt"
	"sort"
)

func sumOfDigits(num int) int {
	sum := 0
	for num > 0 {
		sum += num % 10
		num /= 10
	}
	return sum
}

func minSwaps(nums []int) int {
	numsLen := len(nums)

	type Pair struct {
		value    int
		index    int // original index
		digitSum int // sum of digits
	}

	original := make([]Pair, numsLen)
	for i := 0; i < numsLen; i++ {
		original[i] = Pair{
			value:    nums[i],
			index:    i,
			digitSum: sumOfDigits(nums[i]),
		}
	}

	sorted := make([]Pair, numsLen)
	copy(sorted, original)

	sort.Slice(sorted, func(i, j int) bool {
		if sorted[i].digitSum < sorted[j].digitSum {
			return true
		} else if sorted[i].digitSum > sorted[j].digitSum {
			return false
		} else {
			return sorted[i].value < sorted[j].value
		}
	})

	pos := make([]int, numsLen)
	isAllSame := true           // fast path
	for i := 0; i < numsLen; i++ {
		pos[sorted[i].index] = i
		if isAllSame && sorted[i].index != i {
			isAllSame = false
		}
	}

	if isAllSame {
		return 0
	}

	visited := make([]bool, numsLen)
	swaps := 0

	for i := 0; i < numsLen; i++ {
		if visited[i] || pos[i] == i {
			continue
		}
		cycleLen := 0
		j := i
		for !visited[j] {
			visited[j] = true
			j = pos[j]
			cycleLen++
		}
		if cycleLen > 0 {
			swaps += cycleLen - 1
		}
	}

	return swaps
}
