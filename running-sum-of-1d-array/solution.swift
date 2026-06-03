class Solution {
    func runningSum(_ nums: [Int]) -> [Int] {
        var numbers = nums
        for i in 1..<numbers.count {
            numbers[i] += numbers[i - 1]
        }
        return numbers
    }
}
