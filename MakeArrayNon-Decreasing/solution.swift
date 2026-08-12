class Solution {
    func maximumPossibleSize(_ nums: [Int]) -> Int {
        var count = 1
        var maxSofar = nums[0]
        for i in 1..<nums.count {
            if nums[i] >= maxSofar {
                count += 1
                maxSofar = nums[i]
            }
        }
        return count
    }
}
