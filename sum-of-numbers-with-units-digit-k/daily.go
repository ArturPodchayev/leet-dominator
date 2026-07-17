
func gcdValues(nums []int, queries []int64) []int {
    m := 0

    for _, v := range nums {
        if v > m {
            m = v
        }
    }

    gcdCount := make([]int, m+1)
    divisors := make([]int, m+1)

    for _, v := range nums {
        for i := 1; i <= int(math.Sqrt(float64(v))); i++ {
            if v%i == 0 {
                divisors[i]++
                if v/i != i {
                    divisors[v/i]++
                }
            }
        }
    }

    for i := m; i >= 1; i-- {
        n := divisors[i]
        paircount := (n * (n - 1)) / 2
        multiple := i * 2
        for multiple <= len(gcdCount)-1 {
            paircount -= gcdCount[multiple]
            multiple += i
        }
        gcdCount[i] = paircount
    }

    intervals := [][]int{}
    for i := range gcdCount {
        val := gcdCount[i]
        if val > 0 {
            if len(intervals) == 0 {
                intervals = append(intervals, []int{0, val - 1, i})
            } else {
                top := intervals[len(intervals)-1]
                intervals = append(intervals, []int{top[1] + 1, top[1] + val, i})
            }
        }
    }
    res := make([]int, len(queries))
    for idx, q := range queries {
        left := 0
        right := len(intervals) - 1 
        for left <=  right {
            mid := left + (right - left)/2
            inter := intervals[mid] 
            if int(q) >= inter[0] && int(q) <= inter[1] {
                res[idx] = inter[2]
                break 
            } else if int(q) < inter[0] {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }


    return res
}
