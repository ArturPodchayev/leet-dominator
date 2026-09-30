func longestEqualSubarray(nums []int, k int) int {
   left := 0
   right := 0
   max := 0
   maps := map[int]int{}
   resMax := 0
   for right < len(nums){
       maps[nums[right]]++
       max = maxi(max,maps[nums[right]])
       if right - left + 1 - max > k{
           maps[nums[left]]--
           left++
       } 
       resMax = maxi(resMax,max)
    //    fmt.Println(resMax)
       right++
   }
   return resMax
}

func maxi(a,b int)int{
    if a > b{
        return a
    }
    return b
}
