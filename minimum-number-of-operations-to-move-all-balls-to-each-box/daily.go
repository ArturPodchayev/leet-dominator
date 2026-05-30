func getResults(queries [][]int) []bool {
	obs := make([]int, 0, 1<<5)
	res := make([]bool, 0, len(queries))
	st := NewSegmentTreeWithMap[int](5*1e4)
	for _, q := range queries {
		idx, _ := slices.BinarySearch(obs, q[1])
		switch q[0] {
		case 1: // place obs
			obs = slices.Insert(obs, idx, q[1])
			prevObs := 0
			if idx > 0 {
				prevObs = obs[idx-1]
			}
			st.Update(obs[idx], obs[idx]-prevObs)
			if idx < len(obs)-1 {
				st.Update(obs[idx+1], obs[idx+1]-obs[idx])
			}
		case 2:
			maxGap := q[1]
			if idx > 0 {
				maxGap = max(q[1]-obs[idx-1], st.Query(0, obs[idx-1]))
			}
			res = append(res, maxGap >= q[2])
		}
	}
	return res
}

type segmentTreeWithMap[T ~int] struct {
	data             map[int]T
	size             int
}

type SegmentTree[T ~int] interface {
	Query(lo, hi int) T
	Update(pos int, val T)
}

func NewSegmentTreeWithMap[T ~int](size int) SegmentTree[T] {
	return &segmentTreeWithMap[T]{
		data:             make(map[int]T),
		size:             size,
	}
}

func (st *segmentTreeWithMap[T]) Query(lo, hi int) T {
	lo += st.size
	hi += st.size
	res := st.data[hi]
	for lo < hi {
		if lo&1 != 0 {
			res = max(res, st.data[lo])
			lo++
		}
		if hi&1 != 0 {
			hi--
			res = max(res, st.data[hi])
		}
		lo >>= 1
		hi >>= 1
	}
	return res
}

func (st *segmentTreeWithMap[T]) Update(pos int, val T) {
	pos += st.size
	st.data[pos] = val
	for pos > 1 {
		pos >>= 1
		st.data[pos] = max(st.data[2*pos], st.data[2*pos+1])
	}
}
