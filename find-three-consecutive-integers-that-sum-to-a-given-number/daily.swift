class Solution {
    func countMajoritySubarrays(_ nums: [Int], _ target: Int) -> Int {
        let n = nums.count
        var count = 0
        var presumArr = Array(repeating: 0, count: n)
        for (i, num) in nums.enumerated() {
            if num == target {
                count += 1
            }
            presumArr[i] = count
        }
        for end in 1..<n {
            for start in 0..<end {
                if (presumArr[end] - (start > 0 ? presumArr[start-1] : 0)) * 2 > (end - start+1) {
                    count += 1
                }
            }
        }
        return count
    }
}
