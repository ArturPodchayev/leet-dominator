class Solution {
    func getLastMoment(_ n: Int, _ left: [Int], _ right: [Int]) -> Int {
        let mergedArray: [Int] = (left + right.map({ n - $0 })).sorted()
        return mergedArray.last ?? 0
    }
}
