func maxPalindromes(s string, k int) int {
    var list [][2]int
    for i := 0; i < len(s); i++ {
        for j := 0; j < len(s); j++ {
            if j * 2 + 2 >= k && isPali(s, i - j, i + 1 + j) {
                list = append(list, [2]int{i - j, i + 1 + j})
                break
            }
        }
        for j := 0; j < len(s); j++ {
            if j * 2 + 1 >= k && isPali(s, i - j, i + j) {
                list = append(list, [2]int{i - j, i + j})
                break
            }
        }
    }

    sort.Slice(list, func(i int, j int) bool {
        if list[i][0] == list[j][0] {
            return list[i][1] < list[j][1]
        }
        return list[i][0] < list[j][0]
    })

    memo := make([]int, len(list) + 1)
    for i := 0; i < len(memo); i++ {
        memo[i] = -1
    }
    return dfs(list, memo)
}

func dfs(list [][2]int, memo []int) int {
    if len(list) == 0 {
        return 0
    }

    if memo[len(list)] != -1 {
        return memo[len(list)]
    }

    res := dfs(list[1:], memo)
    index := sort.Search(len(list), func(i int) bool {
        return list[i][0] > list[0][1]
    })
    res = max(res, 1 + dfs(list[index:], memo))

    memo[len(list)] = res
  //  fmt.Println(list, res)
    return res
}

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}

func isPali(s string, a int, b int) bool {
    if a < 0 || b >= len(s) {
        return false
    }
    for a < b {
        if s[a] != s[b] {
            return false
        }
        a++
        b--
    }
    return true
}
