type TrieNode struct {
	ch    byte
	idx   int
	len   int
	child [26]*TrieNode
}

func newTrieNode(c byte, i int, l int) *TrieNode {
	return &TrieNode{
		ch:  c,
		idx: i,
		len: l,
	}
}

func insert(root *TrieNode, word string, curr int) {
	n := len(word)
	trv := root

	for i := n - 1; i >= 0; i-- {
		ch := word[i]
		idx := ch - 'a'

		if trv.child[idx] != nil {
			trv = trv.child[idx]
			if trv.len > n {
				trv.len = n
				trv.idx = curr
			}
		} else {
			newNode := newTrieNode(ch, curr, n)
			trv.child[idx] = newNode
			trv = newNode
		}
	}
}

func search(root *TrieNode, word string) int {
	n := len(word)
	res := -1
	trv := root

	for i := n - 1; i >= 0; i-- {
		ch := word[i]
		idx := ch - 'a'

		if trv.child[idx] == nil {
			return res
		}
		trv = trv.child[idx]
		res = trv.idx
	}
	return res
}

func stringIndices(wordsContainer []string, wordsQuery []string) []int {
	root := &TrieNode{}
	n := len(wordsContainer)
	minIdx := 0
	minLen := len(wordsContainer[0])

	for i := 0; i < n; i++ {
		insert(root, wordsContainer[i], i)
		currLen := len(wordsContainer[i])
		if minLen > currLen {
			minIdx = i
			minLen = currLen
		}
	}

	lenQuery := len(wordsQuery)
	res := make([]int, lenQuery)
	for i := 0; i < lenQuery; i++ {
		ans := search(root, wordsQuery[i])
		if ans == -1 {
			res[i] = minIdx
		} else {
			res[i] = ans
		}
	}
	return res
}
