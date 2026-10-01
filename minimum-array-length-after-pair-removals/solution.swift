class Solution {
    func minLengthAfterRemovals(_ nums: [Int]) -> Int {
        var maxStreak = 1
        var previousNumber = nums[0]
        let numsLength = nums.count
        var currentStreak = 1
        for iterator in 1..<numsLength {
            if nums[iterator] == previousNumber {
                currentStreak = currentStreak + 1
                maxStreak = max(maxStreak,currentStreak)
            } else {
                currentStreak = 1
                previousNumber = nums[iterator]
            }
        }
        
        if maxStreak > numsLength/2 {
            let leftOut = numsLength - ((numsLength - maxStreak) * 2)
            return leftOut
        }

        return (numsLength%2 == 0) ? 0 : 1
    }
}
