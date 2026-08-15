class Solution {
    func decompressRLElist(_ nums: [Int]) -> [Int] {
        nums
        .chunks(ofCount:2)
        .flatMap{a in Array(repeating:a.last!, count:a.first!)}
    }
}
