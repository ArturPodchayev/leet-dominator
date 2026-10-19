class Solution {
    func targetIndices(_ nums: [Int], _ target: Int) -> [Int] {
        var nums = nums.filter { $0 <= target }.sorted()
        var result: [Int] = []
        for i in stride(from: 0, to: nums.count, by: 1) {
            if nums[i] == target { result.append(i) }
        }
        return result
    }
}
