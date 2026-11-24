class Solution {
    func maxLength(_ nums: [Int]) -> Int {
        let n = nums.count
        var res = 2
        for i in 0..<n {
            var (a, b, c, d) = (0, 0, 0, 0)
            for j in i..<n {
                if nums[j] % 2 == 0 {
                    if a == 0 { a = 1 } else { break }
                }
                if nums[j] % 3 == 0 {
                    if b == 0 { b = 1 } else { break }
                }
                if nums[j] % 5 == 0 {
                    if c == 0 { c = 1 } else { break }
                }
                if nums[j] % 7 == 0 {
                    if d == 0 { d = 1 } else { break }
                }
                res = max(res, j - i + 1)
            }
        }
        return res
    }
}
