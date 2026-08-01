class Solution {
    func PredictTheWinner(_ nums: [Int]) -> Bool {
        
        func move(_ l: Int = 0, _ r: Int = nums.count - 1) -> (s1: Int, s2: Int) {

            guard l <= r else { return (0, 0) }
            guard l < r else { return (nums[l], 0) }

            guard l < r - 1 else {
                return (
                    max(nums[l], nums[r]),
                    min(nums[l], nums[r])
                )
            }

            if let c = cache[l << 5 + r] { return c }

            let o1 = nums[l]
            let m1 = move(l + 1, r)

            let o2 = nums[r]
            let m2 = move(l, r - 1)

            let res =
                (o1 + m1.s2 > o2 + m2.s2)
                    ? (o1 + m1.s2, m1.s1)
                    : (o2 + m2.s2, m2.s1)

            cache[l << 5 + r] = res

            return res
        }

        var cache = [Int: (Int, Int)]()
        let res = move()

        return res.s1 >= res.s2
    }
}
