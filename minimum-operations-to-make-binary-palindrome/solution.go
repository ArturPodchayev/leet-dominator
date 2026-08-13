func minOperations(nums []int) []int {
	ans := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		ans[i] = getAns(nums[i])
	}

	return ans
}

func getAns(x int) int {
	delta := 0
    front := false
    back := false
    ans := math.MaxInt32

    for !front && !back {
        f := x + delta
        b := x - delta

        if isPalindrome(f) {
            ans = min(ans, (f - x))
            front = true
        }

        if isPalindrome(b) {
            ans = min(ans, (x - b))
            back = true
        }

        delta++
    }

    return ans
}

func isPalindrome(x int) bool {
    nums := []int{}

	for x > 0 {
		nums = append(nums, x%2)
		x /= 2
	}

    i := 0
    j := len(nums)-1 

    for i <= j {
        if nums[i] != nums[j] {
            return false
        }

        i++
        j--
    }

    return true
}

func pow2(x int) int {
	val := 1
	for x > 0 {
		val *= 2
		x--
	}

	return val

}
