class Solution {
    func partitionArray(_ nums: [Int], _ k: Int) -> Bool {
        guard nums.count % k == 0 else { return false }
        var freqMap: [Int: Int] = [:]
        var maxFreq: Int = 0
        let groupCount: Int = nums.count / k

        for num in nums {
            freqMap[num, default: 0] += 1 
            guard freqMap[num, default: 0] <= groupCount else { return false }
        }

        return true
    }
}
