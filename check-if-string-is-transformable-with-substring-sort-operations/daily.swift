class Solution {
    func longestMonotonicSubarray(_ nums: [Int]) -> Int {
        var ans = 1
        var count_inc = 1
        var count_dec = 1

        for i in 1..<nums.count{
            if nums[i] > nums[i - 1]{
                //strictly increasing
                count_inc += 1
                count_dec = 1
            } else if nums[i] < nums[i - 1]{
                //strictly decreasing
                count_inc = 1
                count_dec += 1
            } else {
                // ==
                count_inc = 1
                count_dec = 1
            }

            ans = max(ans, count_inc, count_dec)
        }

        return ans
    }
}
