class Solution {
    func firstPalindrome(_ words: [String]) -> String {
        for word in words{
            if isPalindrome(s:word){
                return word
            }
        }
        return ""
    }

    func isPalindrome(s: String) -> Bool{
        return String(s.reversed()) == s
    }
}
