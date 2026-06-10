import (
	"sort"
)

type SumStack struct {
	stack     []StackItem
	prefixSum []int64
}

type StackItem struct {
	Val int
	Idx int
}

func NewSumStack(capacity int) *SumStack {
	return &SumStack{
		stack:     make([]StackItem, 0, capacity),
		prefixSum: make([]int64, 1, capacity+1),
	}
}

func (s *SumStack) Push(val, idx int, prevIdx int) {
	s.stack = append(s.stack, StackItem{Val: val, Idx: idx})
	term := int64(val) * int64(idx-prevIdx)
	s.prefixSum = append(s.prefixSum, s.prefixSum[len(s.prefixSum)-1]+term)
}

func (s *SumStack) Pop() {
	s.stack = s.stack[:len(s.stack)-1]
	s.prefixSum = s.prefixSum[:len(s.prefixSum)-1]
}

func (s *SumStack) Top() StackItem {
	return s.stack[len(s.stack)-1]
}

func (s *SumStack) IsEmpty() bool {
	return len(s.stack) == 0
}

func (s *SumStack) GetVal(idx int) int {
	i := sort.Search(len(s.stack), func(i int) bool {
		return s.stack[i].Idx >= idx
	})
	return s.stack[i].Val
}

func (s *SumStack) QuerySum(endIdx int) int64 {
	if endIdx < 0 {
		return 0
	}
	i := sort.Search(len(s.stack), func(i int) bool {
		return s.stack[i].Idx >= endIdx
	})

	res := s.prefixSum[i]
	prevIdx := -1
	if i > 0 {
		prevIdx = s.stack[i-1].Idx
	}
	res += int64(s.stack[i].Val) * int64(endIdx-prevIdx)
	return res
}

func maxTotalValue(nums []int, k int) int64 {
	n := len(nums)

	solver := func(V int) (int64, int64) {
        var count, sum int64
        stMax := NewSumStack(n)
        stMin := NewSumStack(n)

        l := 0
        for r := 0; r < n; r++ {
            prevIdxMax := -1
            for !stMax.IsEmpty() && stMax.Top().Val <= nums[r] {
                stMax.Pop()
            }
            if !stMax.IsEmpty() {
                prevIdxMax = stMax.Top().Idx
            }
            stMax.Push(nums[r], r, prevIdxMax)

            prevIdxMin := -1
            for !stMin.IsEmpty() && stMin.Top().Val >= nums[r] {
                stMin.Pop()
            }
            if !stMin.IsEmpty() {
                prevIdxMin = stMin.Top().Idx
            }
            stMin.Push(nums[r], r, prevIdxMin)

            for l <= r && stMax.GetVal(l)-stMin.GetVal(l) >= V {
                l++
            }

            b := l
            count += int64(b)
            if b > 0 {
                sum += stMax.QuerySum(b-1) - stMin.QuerySum(b-1)
            }
        }
        return count, sum
    }

	low, high := 0, 1_000_000_001
	ansV := 0
	for low <= high {
		mid := low + (high-low)/2
		if mid < 0 {
			mid = 0
		}
		count, _ := solver(mid)
		if count >= int64(k) {
			ansV = mid
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	count_gt, sum_gt := solver(ansV + 1)
	result := sum_gt
	remaining_k := int64(k) - count_gt
	result += remaining_k * int64(ansV)

	return result
}
