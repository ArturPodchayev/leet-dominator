func abs(val int) int {
    if val < 0 {
        return val * -1
    }
    return val
}

func minCost(nums []int, queries [][]int) []int {
    n       := len(nums)
    a       := make([]int, n)
    b       := make([]int, n)
    closest := make([]int, n)
    res     := make([]int, len(queries))
    for ind := range nums {
        if ind == 0 {
            closest[ind] = 1
        } else if ind == n - 1 || abs(nums[ind] - nums[ind - 1]) <= abs(nums[ind] - nums[ind + 1]){
            closest[ind] = ind - 1
        } else {
            closest[ind] = ind + 1
        }
    }

    for ind := range nums {
        if ind != 0 {
            a[ind] += a[ind - 1]
        }
        if ind != n - 1 {
            if closest[ind] == ind + 1 {
                a[ind] += 1
            } else {
                a[ind] += abs(nums[ind] - nums[ind + 1])
            }
        }
        ind = n - ind - 1
        if ind != n - 1 {
            b[ind] += b[ind + 1]
        }
        if ind != 0 {
            if closest[ind] == ind - 1 {
                b[ind] += 1
            } else {
                b[ind] += abs(nums[ind] - nums[ind - 1])
            }
        }
    }

    for ind, q := range queries {
        if q[0] == q[1] {
            res[ind] = 0
        } else if q[0] > q[1] {
            if q[0] < n - 1 {
                res[ind] -= b[q[0] + 1]
            }
            res[ind] += b[q[1] + 1]
        } else {
            if q[0] > 0 {
                res[ind] -= a[q[0] - 1]
            }
            res[ind] += a[q[1] - 1]
        }
    }

    return res
    // n closest
    // prefix sum from 0 to end (a)
    // end to 0 (b)
    // for any query you just find if
    // - find in array a or b 
    // - just use prefix sum range to find out 
}
