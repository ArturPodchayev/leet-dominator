class Solution {
    func maxSubarrayLength(_ nums: [Int], _ k: Int) -> Int {
        var maxLen = 0
		var freq: [Int: Int] = [:]
		var start = 0
		for idx in 0..<nums.count {
			freq[nums[idx], default: 0] += 1
			while freq[nums[idx], default: 0] > k {
				freq[nums[start], default: 0] -= 1
				start += 1
			}
			maxLen = max(maxLen, idx - start + 1)
		}
		return maxLen
    }
}
