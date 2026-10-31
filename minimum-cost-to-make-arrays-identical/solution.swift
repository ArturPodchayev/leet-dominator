class Solution {
    func minCost(_ arr: [Int], _ brr: [Int], _ k: Int) -> Int {
        // since sorting the array costs k; we will see the cost in add / subtract prior to and post sorting
        let sortedCost =  zip(arr.sorted(), brr.sorted()).map { abs($0 - $1) }.reduce(0,+) + k
        let unsortedCost = zip(arr, brr).map{ abs($0 - $1) }.reduce(0, +)
        return min(sortedCost, unsortedCost)
    }
}
