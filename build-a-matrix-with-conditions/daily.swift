class Solution {
    func findMissingElements(_ nums: [Int]) -> [Int] {
        let count = nums.count
        var sortedNums = nums.sorted() // O(n log n)

        var missingElements: [Int] = []

        // O(n) 
        for i in 0..<count-1 { // count-1: to not include the max!
            let diff = sortedNums[i+1] - sortedNums[i]
            for j in 1..<diff {
                missingElements.append(sortedNums[i]+j)
            }
        }

        return missingElements
    }
}
