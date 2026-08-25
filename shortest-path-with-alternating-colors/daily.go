func missingMultiple(nums []int, k int) int {
    // Create a set to store numbers from the array
    present := make(map[int]bool)
    for _, num := range nums {
        present[num] = true
    }
    
    // Start checking multiples of k
    multiple := k
    for {
            if !present[multiple] {
                return multiple
            }
            multiple += k
         }
    }
	return i
}
