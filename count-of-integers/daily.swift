class Solution {
    func minMoves(_ nums: [Int]) -> Int {
        nums.max()! * nums.count - nums.reduce(0, +)
    }
}
