func buildArray(target []int, n int) []string {
    res := []string{}
    stack := []int{}
    targetIdx := 0

    for i := 1; i <= n; i++ {
        res = append(res, "Push")
        stack = append(stack, i)

        if targetIdx < len(target) && stack[len(stack)-1] == target[targetIdx] {
            targetIdx++
        } else {
            stack = stack[:len(stack)-1]
            res = append(res, "Pop")
        }

        if targetIdx == len(target) {
            break
        }
    }

    return res
}
