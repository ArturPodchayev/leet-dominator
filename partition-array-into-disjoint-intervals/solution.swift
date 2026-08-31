class Solution {
    func partitionDisjoint(_ nums: [Int]) -> Int {
        let n = nums.count
        var helper = nums
        for i in stride(from: n - 2, to: 0, by: -1) {
            helper[i] = min(nums[i], helper[i + 1])
        }
        guard helper[0] > helper[1] else { return 1 }
        for i in 1..<(n - 1) {
            helper[i] = max(nums[i], helper[i - 1])
            if helper[i] <= helper[i + 1] {
                return i + 1
            }
        } 
        return n
    }
}
