class Solution {
    func maxSum(_ nums: [Int], _ k: Int) -> Int {
        let MOD = 1_000_000_007
        var bitCount = [Int](repeating: 0, count: 31)
        for num in nums {
            for b in 0..<31 where num & (1 << b) != 0 {
                bitCount[b] += 1
            }
        }
        var ans = 0
        for _ in 0..<k {
            var val = 0
            for b in stride(from: 30, through: 0, by: -1) where bitCount[b] > 0 {
                val |= (1 << b)
                bitCount[b] -= 1
            }
            ans = (ans + val * val) % MOD
        }
        return ans
    }
}
