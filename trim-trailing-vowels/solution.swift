class Solution {
    func trimTrailingVowels(_ s: String) -> String {
        let vow = Set("aeiou")
        var res = s
        while !res.isEmpty, vow.contains(res.last!) {
            res.removeLast()
        }
        return res
    }
}
