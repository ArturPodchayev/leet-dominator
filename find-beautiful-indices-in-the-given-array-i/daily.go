func getDivisors(n int) []int {
    res := []int{}
    for i := 1; i*i <= n; i++ {
        if n%i == 0 {
            res = append(res, i)
            if i != n/i {
                res = append(res, n/i)
            }
        }
    }
    return res
}

func check(nums []int, k int) bool {
    n := len(nums)
    last := -1000000000

    for i := 0; i < n; i += k {
        cnt, mn, mx := 0, 1000000000, -1000000000

        for j := i; j < i+k; j++ {
            if nums[j] < mn { mn = nums[j] }
            if nums[j] > mx { mx = nums[j] }

            nxt := nums[i]
            if j != i+k-1 {
                nxt = nums[j+1]
            }

            if nums[j] > nxt { cnt++ }
        }

        if cnt > 1 || last > mn {
            return false
        }
        last = mx
    }
    return true
}
