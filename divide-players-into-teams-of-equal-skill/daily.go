func maxSumOfSquares(num int, sum int) string {
    if sum > 9*num {
        return ""
    }

    res := make([]byte, num)
    rem := sum

    for i := 0; i < num; i++ {
        digit := rem
        if digit > 9 {
            digit = 9
        }
        res[i] = byte('0' + digit)
        rem -= digit
    }
    return string(res)
}
