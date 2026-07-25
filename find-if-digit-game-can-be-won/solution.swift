class Solution {
    func canAliceWin(_ nums: [Int]) -> Bool {
            var singleDigit = nums
                .filter {$0 > 9}
                .reduce(0) {$0 + $1}

                var doubleDigit = nums.reduce(0) {$0 + $1} - singleDigit
                
                if singleDigit != doubleDigit {
                    return true
                } else {
                    return false
                }
    }
}
