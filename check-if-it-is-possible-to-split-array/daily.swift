class Solution {
    func minimizeSum(_ nums: [Int]) -> Int {
        let nums = nums.sorted()
        return min(
            nums.dropFirst(2).score,
            nums.dropLast(2).score,
            nums.dropFirst().dropLast().score
        )
    }
}

extension ArraySlice where Element == Int {
    var score: Int {
        (last ?? 0) - (first ?? 0)
    }
}
