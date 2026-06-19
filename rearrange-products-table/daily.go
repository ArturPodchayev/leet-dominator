func largestAltitude(gain []int) int {
    var sum, result int
    for _,v := range gain {
        sum += v
        if sum > result {result = sum}
    }
    return result
}
