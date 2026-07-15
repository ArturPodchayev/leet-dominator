func valueAfterKSeconds(n int, k int) int {
    sum := make([]int, n)
    n--
    for i := 0; i <= n; i++ {
        sum[i] = 1
    }

    for ; k > 0; k-- {
        for j := 1; j <= n; j++ {
            sum[j] = (sum[j] + sum[j-1]) % 1000000007
        }
    }

    return sum[n]
}
