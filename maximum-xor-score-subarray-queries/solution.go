func maximumSubarrayXor(nums []int, queries [][]int) []int {

    precompute := make([][]int , len(nums))

    for i := range(precompute) {
        precompute[i] = make([]int,  len(nums))
    }

    for i := range(nums) {
        precompute[i][i] = nums[i]
    }
    // fill from bottom row 
    for r := len(precompute) - 1 ; r >= 0 ; r -- {
        for c := r + 1 ; c < len(precompute) ; c ++ {
            precompute[r][c] =  precompute[r][c - 1] ^ precompute[r + 1][c]
        }
    }

    best := make([][]int, len(nums))
    
    for i := range(best) {
        best[i] = make([]int, len(nums))
    }
    for i := range(nums) {
        best[i][i] = nums[i]
    }
    // fill from bottom row 
    for r := len(best) - 1 ; r >= 0 ; r -- {
        for c := r + 1 ; c < len(best) ; c ++ {
            best[r][c] =  max(best[r][c - 1],best[r + 1][c])
            best[r][c] = max(best[r][c] , precompute[r][c])
        }
    }



    res := []int{}
    for _,v := range(queries) {
        res = append(res,  best[v[0]][v[1]])
    }
    return res
    

}




func max(a,b int) int {
    if a > b {
        return a
    }
    return b 
}
// what a way to think how to see this we 
