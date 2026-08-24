class Solution {
    func stoneGameVIII(_ stones: [Int]) -> Int {

        var sum = stones.reduce(0, +)
        var dp = sum

        for i in (0..<stones.count - 2).reversed() {
            sum -= stones[i + 2]
            dp = max(dp, sum - dp)
        }

        return dp
    }
}3
