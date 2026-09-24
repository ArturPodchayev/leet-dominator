func smallestIndex(nums []int) int {
    for i, num := range nums {
        var sum int
        for num > 0 {
            sum += num%10
            num = num / 10
        }

        if sum == i {
            return i
        }
    }

    return -1
}
