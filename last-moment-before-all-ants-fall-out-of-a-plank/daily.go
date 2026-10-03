func longestValidParentheses(s string) int {
    stack := []int{-1}
    maxLen := 0

    for i, c := range s {
        if c == '(' {
            stack = append(stack, i)
        } else { // c == ')'
            stack = stack[:len(stack)-1]
            if len(stack) > 0 {
                maxLen = max(maxLen, i-stack[len(stack)-1])
            } else {
                stack = append(stack, i)
            }
        }
    }

    return maxLen
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
