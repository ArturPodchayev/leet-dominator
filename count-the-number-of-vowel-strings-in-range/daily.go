import "math/bits"

func countCompleteComponents(n int, edges [][]int) int {
    graph := make([]uint64, n)
    for i := range graph {
        graph[i] = 1 << i // Initialize with self
    }

    for _, e := range edges {
        a, b := e[0], e[1]
        graph[a] |= 1 << b
        graph[b] |= 1 << a
    }

    freq := make(map[uint64]int)
    for _, mask := range graph {
        freq[mask]++
    }

    count := 0
    for mask, cnt := range freq {
        if bits.OnesCount64(mask) == cnt {
            count++
        }
    }

    return count
}
