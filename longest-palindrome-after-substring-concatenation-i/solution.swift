class Solution {

    func longestPalindrome(_ s: String, _ t: String) -> Int {
        var longest = 0 
        let tArr = Array(t)
        let sArr = Array(s)

        for i in 0...sArr.count {
            for j in 0...i {
                let sSubArr = Array(sArr[j..<i])
                
                for k in 0...tArr.count {
                    for l in 0...k {
                        let tSubArr = Array(tArr[l..<k])
                                                
                        let concat = sSubArr + tSubArr
                        if isPalindrome(concat) {
                            longest = max(longest, concat.count)
                        }
                    }
                }
            }
        }
        return longest
    }


    func isPalindrome(_ s: Array<Character>) -> Bool {
        var left = 0, right = s.count - 1
        while left < right {
            guard s[left] == s[right] else { return false }
            left += 1
            right -= 1
        }

        return true
    }

}
