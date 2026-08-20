class Solution {
    func resultArray(_ nums: [Int]) -> [Int] {
        
        var a = [nums[0]]
        var b = [nums[1]]

        for i in 2..<nums.count {
            if a.last! > b.last! { a.append(nums[i]) }
            else { b.append(nums[i]) }
        }

        return a + b
    }
}
