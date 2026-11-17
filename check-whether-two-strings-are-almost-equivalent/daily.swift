class Solution {
    func minimumChanges(_ s: String, _ k: Int) -> Int {
        let n = s.count, s = Array(s)
        var changes = Array(repeating: Array(repeating: 0, count: n), count: n)
        for i in s.indices { 
            var j = i + 1
            while j < s.count { 
                changes[i][j] = minChanges(s, i, j) 
                j += 1 
            }
        }

        var mem = Array(repeating: Array(repeating: -1, count: k + 1), count: n)
        func dp(at i: Int,_ k: Int) -> Int { 
            if k == 0 { return i == s.count ? 0 : 10_000_000 }
            if i == s.count { return 10_000_000 }
            if mem[i][k] != -1 { return mem[i][k] }

            var best = 10_000_000 
            // top down partition dp, try each possible j in s[i...j], then dp again j + 1
            for j in (i + 1)..<n { 
                best = min(best, dp(at: j + 1, k - 1) + changes[i][j] )
            }
            //print(i, j, best)
            mem[i][k] = best 
            return best
        }

        return dp(at: 0, k)
    }

    // calculate the min cost to make a string from s[i...j] a "semi palindrome" (wtf???) by brute forcing each potential `d` 
    private func minChanges(_ s: [Character],_ i: Int,_ j: Int) -> Int {
        let length = j - i + 1
        var ans = Int.max / 2 
        for d in 1..<length where length % d == 0 { 
            var c = 0 
            for off in 0..<d { 
                var left = i + off
                var right = (i + off) + (((length / d) - 1) * d)
                //print(left, right)
                while left < right { 
                    if s[left] != s[right] { c += 1 }
                    left += d; right -= d;
                }
            }
            ans = min(ans, c)
        }
        return ans
    }

}
