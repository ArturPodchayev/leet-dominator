class Solution {
    func minimumSubstringsInPartition(_ s: String) -> Int {
        let n = s.count
        let sArray = Array(s)
        
        // dp[i] will hold the minimum number of balanced substrings for the prefix ending at i
        var dp = Array(repeating: Int.max, count: n + 1)
        dp[0] = 0
        
        // Iterate through each end index of the substring
        for i in 1...n {
            var freq = Array(repeating: 0, count: 26)
            var maxFreq = 0
            
            // Iterate backwards to find the start index of the substring
            for j in (1...i).reversed() {
                let index = Int(sArray[j - 1].asciiValue! - Character("a").asciiValue!)
                freq[index] += 1
                maxFreq = max(maxFreq, freq[index])
                
                // Check if the current window is balanced
                if isBalanced(freq, maxFreq) {
                    dp[i] = min(dp[i], dp[j - 1] + 1)
                }
            }
        }
        
        return dp[n]
    }
    
    private func isBalanced(_ freq: [Int], _ maxFreq: Int) -> Bool {
        for f in freq {
            if f > 0 && f != maxFreq {
                return false
            }
        }
        return true
    }
}
