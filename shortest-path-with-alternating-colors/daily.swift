class Solution {
    func missingMultiple(_ nums: [Int], _ k: Int) -> Int {
        let nums = Set(nums)
        var res = k
        while nums.contains(res) {
            res += k
        }
        return res
    }
}
