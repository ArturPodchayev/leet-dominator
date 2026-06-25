class Solution {
    func sumOfThree(_ num: Int) -> [Int] {
        if num % 3 != 0 {
            return []
        }

        var division = num / 3
        return [division-1, division, division+1]
    }
}
