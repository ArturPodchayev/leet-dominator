
import (
	"slices"
)

// https://cp-algorithms.com/string/manacher.html
func manacher_odd(s []byte) (p []int) {
    n := len(s)
    p = make([]int, n)
    c, r := 0, 0
    for i:=0; i<n; i++ {
        p[i] = 1
        if i < r {
            p[i] = min(p[2*c-i], r-i)
        }
        for i-p[i] >= 0 && i+p[i] < n && s[i-p[i]] == s[i+p[i]] { p[i]++ }
        if i + p[i] > r {
            c, r = i, i + p[i]
        }
    }
    return p
}

// For each position find the maximum length of a maximal palindrome ending at that position.
// (Be careful to not allow palindromes to extend across the string boundary).
func maximalPalindromes(s []byte, ends [2]int) (l []int) {
    S := make([]byte, 2*len(s)+1)
    for i, c := range s { S[2*i+1] = c }
    l = make([]int, len(s))
    for i, r := range manacher_odd(S) {
        if r > 1 {
            end, len := (i+r-3)/2, r - 1
            if end >= ends[0] {
                len = min(len, end-ends[0]+1)
            }
            l[end] = max(l[end], len)
        }
    }
    l[ends[0]-1] = 0 
    return l
}

type Node struct {
    children [28]*Node // a-z and "{" and "|" as string ends.
    begin, end int // begin is inclusive, end is exclusive.
    parent, slink *Node

    // These fields are populated by 2 DFS after the tree is built.
    // Length of the string from the root to node end.
    depth int
    // First/second bit is set if there is a suffix of the first/second string among descendants of this node.
    descendantMask byte
}

// See https://cp-algorithms.com/string/suffix-tree-ukkonen.html#compressed-implementation 
func ukkonen(s []byte) *Node {
    root := &Node{ begin: -1 }
    root.slink = &Node{ begin: -1 }
    for i := range root.slink.children {
        root.slink.children[i] = root
    }
    node := root
    position := 0
    var missing_link *Node
    for i, c := range s {
        for {
            if node.end <= position {
                if node.children[c] == nil {
                    node.children[c] = &Node{
                        begin: i,
                        parent: node,
                        end: len(s),
                    }
                    node = node.slink
                    position = node.end
                    continue
                }
                node = node.children[c]
                position = node.begin
            }
            if position == -1 || c == s[position] {
                position++
                break
            } else {
                split := &Node{
                    begin: node.begin,
                    end: position,
                    parent: node.parent,
                }
                split.parent.children[s[split.begin]] = split
                split.children[s[position]] = node
                split.children[c] = &Node{
                    begin: i,
                    parent: split,
                    end: len(s),
                }
                if missing_link != nil {
                    missing_link.slink = split
                    missing_link = nil
                }
                node.begin = position
                node.parent = split

                node = split.parent.slink
                position = split.begin

                for position < split.end {
                    node = node.children[s[position]]
                    position += node.end - node.begin
                }

                if position == split.end {
                    split.slink = node
                } else {
                    missing_link = split
                }

                position = node.end - (position - split.end)
            }
        }
    }

    return root
}

// Populate node.depth and node.descendantMask for all internal nodes.
func (node *Node) dfsFill(ends [2]int, depth int) {
    if node.end == ends[1] {
        if node.begin < ends[0] {
            node.descendantMask = 1
        } else {
            node.descendantMask = 2
        }
    }
    node.depth = depth + node.end - max(node.begin,0)
    for _, child := range node.children {
        if child != nil {
            child.dfsFill(ends, node.depth)
            node.descendantMask |= child.descendantMask
        }
    }
}

// Populate the longest match for each suffix.
func (node *Node) suffixLongestMatch(ends [2]int, maxCommonDepth int, matches []int) {
    if node.descendantMask == 3 { maxCommonDepth = node.depth }
    if node.end == ends[1] {
        matches[node.end - node.depth] = maxCommonDepth
    }
    for _, child := range node.children {
        if child != nil {
            child.suffixLongestMatch(ends, maxCommonDepth, matches)
        }
    }
}

// Build generalized suffix tree for 2 strings and starting at each position in one of
// the strings calculate the longest common substring with the other.
func jointUkkonen(bytes []byte, ends [2]int) (matches []int) {
    tree := ukkonen(bytes)
    tree.dfsFill(ends, 0)
    matches = make([]int, len(bytes))
    tree.suffixLongestMatch(ends, 0, matches)
    return
}


func longestPalindrome(s string, t string) int {
    // We construct a string by joining reversed s and t, in that order.
    // If s = "abx" and t = "babxba", we want to construct "xba|babxba{".
    joined := s + "|" + t + "{"
    ends := [2]int{len(s)+1, len(joined)}
    joined_bytes := []byte(joined)
    for i, c := range joined_bytes { joined_bytes[i] = c-'a' }
    // Reverse the first string.
    slices.Reverse(joined_bytes[:ends[0]-1])

    maximalPalindromeAtPos := maximalPalindromes(joined_bytes, ends)
    longestCommonSubAtPos := jointUkkonen(joined_bytes, ends)

    // If s = "abx" and t = "babxba"
    // maximalPalindromeAtPos = [1 1 1 0 1 0 3 0 1 5 1]
    // longestCommonSubAtPos  = [3 2 1 0 2 1 1 3 2 1 0]

    // Note: the exact values for "longest palindrome ending at pos" should
    // be [1 1 1 0 1 1 3 1 3 5 1], but that doesn't matter, because
    // the "incorrect" values are dominated by the values to the right of them.
    
    best := 2*longestCommonSubAtPos[0]
    for i:=1; i<len(joined_bytes); i++ {
        best = max(best, 2*longestCommonSubAtPos[i]+maximalPalindromeAtPos[i-1])
    }

    return best
}
