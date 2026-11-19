func canSplitArray(nums []int, m int) bool {
	n:=len(nums)
	if n<=2{
		return true
	}
	for i:=0; i<len(nums)-1; i++{
		if nums[i]+nums[i+1]>=m{
			return true
		}
	}
	return false
}
