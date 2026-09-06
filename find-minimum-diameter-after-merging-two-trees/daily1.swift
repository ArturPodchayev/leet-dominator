class Solution {
    func numDistinct(_ s: String, _ t: String) -> Int {
        let mod = 1_000_000_007
        let arrS = Array(s)
        let arrT = Array(t)
        
        var memo = Array(repeating: 0, count: arrT.count + 1)
        memo[0] = 1
        
        for i in 1...arrS.count {
            for j in stride(from: arrT.count, through: 1, by: -1) {
                if arrS[i - 1] == arrT[j - 1] {
                    memo[j] = (memo[j - 1] + memo[j]) % mod
                }
            }
        }
        
        return memo[arrT.count]
    }
}
