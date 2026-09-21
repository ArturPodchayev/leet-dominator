func relocateMarbles(nums []int, moveFrom []int, moveTo []int) []int {
    maps := map[int]int{}
    for i := range nums{
        maps[nums[i]]++
    }
    for i := range moveFrom {
        if _, ok := maps[moveFrom[i]]; ok{
            delete(maps,moveFrom[i])
            maps[moveTo[i]]++
        }
    }
    arr := []int{}

    for k,_ := range maps{
        arr = append(arr,k)
    }
    sort.Ints(arr)
    return arr
}
