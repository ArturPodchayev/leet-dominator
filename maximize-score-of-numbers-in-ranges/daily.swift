class Solution {
    func maximumLength(_ nums: [Int]) -> Int {
        guard !nums.isEmpty else {
            return -1
        }

        var maxSubset = 1
        let numsFreq = nums.reduce(into: [Int: Int]()) { dict, num in 
            dict[num, default: 0] += 1
        }

        for num in numsFreq.keys {
            // Special case needed to be handled for '1' as 1 * 1 = 1
            if num == 1, let numCount = numsFreq[num] {
                maxSubset = max(maxSubset, numCount % 2 == 0 ? numCount-1 : numCount )
                continue
            }

            var num = num
            var subsets = 0
            var numsFreq = numsFreq

            while let count = numsFreq[num], count > 0 {
                num *= num
                if count == 1 || numsFreq[num] == nil {
                    subsets += 1
                    break
                } else {
                    subsets += 2
                }
            }

            // Extra check -> Subsets are only valid if subset count is ODD
            if subsets % 2 == 1 {
                maxSubset = max(maxSubset, subsets)
            }
        }

        return maxSubset
    }
}
