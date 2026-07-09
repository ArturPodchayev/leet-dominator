func root(u int, pa []int) int{
    if pa[u] == u {
        return u
    }
    return root(pa[u], pa)
}

func merge(u int, v int, pa []int) {
    u = root(u, pa);
    v = root(v, pa);
    if u > v {
        u, v = v, u
    }
    pa[v] = u
}

func binarySearch(arr []int, target int) int {
    left, right := 0, len(arr)-1
    for left <= right {
        mid := left + (right-left)/2
        if arr[mid] <= target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
}

func pathExistenceQueries(n int, nums []int, maxDiff int, queries [][]int) []bool {
    pa := make([]int, n)
    for i := 0; i < n; i++ {
        pa[i] = i
    }
    for i := 0; i < n; i++ {
        idx := binarySearch(nums, nums[i] + maxDiff)
        for j := i + 1; j <= idx; j++ {
            merge(j, j - 1, pa)
        }
        if idx > i {
            i = idx - 1
        } else {
            i = idx
        }
    }
    m := len(queries)
    answer := make([]bool, m)
    for i := 0; i < m; i++ {
        u := queries[i][0]
        v := queries[i][1]
        if root(u, pa) == root(v, pa) {
            answer[i] = true
        } else {
            answer[i] = false
        }
    }
    return answer
}
