func maxValue(n int, index int, maxSum int) int {
    return sort.Search(maxSum, func(t int) bool {
        s := t * t 
        if a := t - index; a > 1 {
            s -= (a - 1) * a / 2
        }
        if b := t - (n - 1 - index); b > 1 {
            s -= (b - 1) * b / 2
        }
        return s > maxSum - n
    })
}
