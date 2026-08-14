func maximumLengthSubstring(s string) int {
    a := make([]int, len(s))
    
    for i := 0; i < len(s); i++ {
        a[i] = int(s[i])
    }

    // reuse the solution of "2958. Length of Longest Subarray With at Most K Frequency"
	return maxSubarrayLength(a, 2)
}

func maxSubarrayLength(nums []int, k int) int {
	// Very similar to "424. Longest Repeating Character Replacement",
	// we also can skip shrinking the window from left until the perfect condition
	// and just move the window of currentMaxSize.

	// However, the data will not be stale here.
	// If the window expands, we will not shrink it from left, i.e. its size will increase.

	// Notably, since our window always remains at max size, we don't need to track its size separately.
	// After right ends with the array, we can just return
	// (len - 1) - left + 1  = len - left.

	freq := make(map[int]int) // here elements are int, not byte chars
	totalCharsOverK := 0

	//maxWindowSize := 1 // since k >= 1, we'll always have 1 element array

	left := 0

	for right := range nums {
		rightNum := nums[right]
		freq[rightNum]++

		if freq[rightNum] == k+1 { // we've increased from K to K+1 -> one more new num with (frequency > K)
			totalCharsOverK++
		}

		// !!! if we don't have numbers K, the window will increase on right and not shrink from left,
		// i.e. we will grow to the next maxWindowSize
		if totalCharsOverK > 0 {
			// shrink from left, but just on 1 char, so we keep the window at currentMaxWindowSize

			leftNum := nums[left]
			freq[leftNum]--

			if freq[leftNum] == k { // we've decreased from K+1 to K -> one less num with frequency > K
				totalCharsOverK--
			}

			left++
		}

		//maxWindowSize = max(maxWindowSize, right-left+1)
	}

	// since our window is of max size, we can just return ( len(nums) - left ) (it is len - 1 - left + 1 )
	//return maxWindowSize
	return len(nums) - left
}
