class Solution {
    func maxPalindromes(_ s: String, _ k: Int) -> Int {
        //since we cannot overlap strings, so decision taken earlier depends on the next set of strings chosen 
        // this is classic dp - overlapping subproblems
        if s.count < k { return 0 }
        var memo = [Int: Int]()
        var s = Array(s)

        func checkPalindrome(_ i: Int, _ j: Int) -> Bool {
            var left = i, right = j 
            while left < right {
                guard s[left] == s[right] else { return false }
                left += 1 
                right -= 1
            }
            return true
        }

        func maxPalindromesHelper(_ i: Int) -> Int {
            //termination case 
            if i >= s.count { return 0 }

            if let cache = memo[i] {
                return cache
            }

            //case 1: dont include character at i and start from i + 1
            var result = maxPalindromesHelper(i + 1)

            if (i + k - 1) < s.count {
                for j in (i + k - 1)..<s.count where checkPalindrome(i, j) {
                    //case 2: 
                    result = max(result, 1 + maxPalindromesHelper(j + 1)) //1 for i to j and maxPalindromesHelper( j + 1)
                }
            }

            memo[i] = result
            return result
        }

        //start from 0 till end
        return maxPalindromesHelper(0)
    }
}
