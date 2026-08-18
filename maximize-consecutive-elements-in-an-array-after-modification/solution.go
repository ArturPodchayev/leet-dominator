func maxSelectedElements(nums []int) int {
    slices.Sort(nums)
    
    //This will store what is the maximum size we may achieve ending on this element
    // for example, values would be like
    // 7 -> 5, which means that the there exist a consecutive sequqnce ending on 7 with size 5 {3,4,5,6,7}
    until := make(map[int]int)

    until[nums[0]] = 1
    until[nums[0]+1] = 1

    res := 1
    for i := 1; i < len(nums); i++ {
        curr := nums[i]
        incr := curr+1
        
        if val, ok := until[incr-1]; ok {
            until[incr] = val+1
            res = int(math.Max(float64(res), float64(val+1)))
        } else {
            until[incr] = 1
        }

        if val, ok := until[curr-1]; ok {
            until[curr] = val+1
            res = int(math.Max(float64(res), float64(val+1)))
        } else {
            until[curr] = 1
        }
    }

    return res
}
