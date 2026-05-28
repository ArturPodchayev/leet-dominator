final class Solution {
    func maxProduct(_ nums: [Int]) -> Int {
        if nums.isEmpty {
            return 0
        }
        var max1: Int?
        for (i, num) in nums.enumerated() {
            if max1 == nil {
                max1 = i
            } else {
                if nums[max1!] < num {
                    max1 = i
                }
            }
        }
        var max2: Int?
        for (i, num) in nums.enumerated() where i != max1! {
            if max2 == nil {
                max2 = i
            } else {
                if nums[max2!] < num {
                    max2 = i
                }
            }
        }
        return (nums[max1!] - 1) * (nums[max2!] - 1)
    }
}
