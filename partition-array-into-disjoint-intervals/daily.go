func nodesBetweenCriticalPoints(head *ListNode) []int {
    temp := []int{}
    for head != nil {
        temp = append(temp, head.Val)
        head = head.Next
    }
    ans := []int{-1, -1}
    left, mostLeft := -1, -1
    for i := 1; i < len(temp) - 1; i++ {
        if (temp[i - 1] < temp[i] && temp[i + 1] < temp[i]) || (temp[i - 1] > temp[i] && temp[i + 1] > temp[i]) {
            if mostLeft < 0 {
                mostLeft = i
                left = i
            } else {
                ans[1] = i - mostLeft
                if i - left < ans[0] || ans[0] == -1 {
                    ans[0] = i - left
                }
                left = i
            }
        }
    }

    return ans
}
