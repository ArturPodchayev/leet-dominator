class Solution {
    func recoverOrder(_ order: [Int], _ friends: [Int]) -> [Int] {
        order.filter { friends.contains($0) }
    }
}
