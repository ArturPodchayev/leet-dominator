class Solution {
    func sortableIntegers(_ nums: [Int]) -> Int {
        let n = nums.count
        var total = 0
        for k in 1...n where n % k == 0 {
            var ok = true
            var prevMax = Int.min
            var start = 0
            while start < n && ok {
                var drops = 0
                var lo = Int.max, hi = Int.min
                for i in 0..<k {
                    let a = nums[start + i]
                    let b = nums[start + (i + 1) % k]
                    if a > b { drops += 1 }
                    lo = min(lo, a); hi = max(hi, a)
                }
                if drops > 1 || lo < prevMax { ok = false }
                prevMax = hi
                start += k
            }
            if ok { total += k }
        }
        return total
    }
}
