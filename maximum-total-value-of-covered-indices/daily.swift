class Solution {
    func minOperations(_ nums: [Int], _ x: Int) -> Int {
        var (l,r) = (0,0)
        var sum = nums.reduce(0,+)
        var result = -1
        
        for (r,num) in nums.enumerated() {
            sum -= num
            while sum < x && l <= r {
                sum += nums[l]
                l += 1
            }
            if sum == x {
				result = max(result, r-l+1)
			}
        }
        
        return result == -1 ? result : nums.count - result
    }
}
