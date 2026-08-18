func largestInteger(nums []int, k int) int {
    start := 0
    set := make(map[int]int)
    newSet := make(map[int]int)
    for i := 0; i < len(nums); i++ {
        set[nums[i]]++
        if i >= k-1 {
            for num := range set {
                newSet[num]++
            }
            set[nums[start]]--
            if set[nums[start]] == 0 {
                delete(set, nums[start])
            }
            start++
        }
    }

    res := -1
    for num, cnt := range newSet {
        if cnt == 1 {
            res = max(res, num)
        }
    }

    return res
}
