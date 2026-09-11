class Solution {
    func totalNumbers(_ digits: [Int]) -> Int {

        var nums = Set<Int>()

        for i1 in digits.indices where digits[i1] != 0 {
            for i2 in digits.indices where i1 != i2 {
                for i3 in digits.indices where (i1 != i3) && (i2 != i3) && (digits[i3] % 2 == 0) {
                    let n = digits[i1] * 100 + digits[i2] * 10 + digits[i3]
                    nums.insert(n)
                }
            }
        }

        return nums.count
    }
}
