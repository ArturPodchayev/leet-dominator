class Solution {
func minOperations(_ boxes: String) -> [Int] {
    var result = Array(repeating: 0, count: boxes.count)
    var operations = 0
    var prev = 0
    for (i, box) in boxes.dropLast().enumerated() {
        if box == "1" {operations += 1}
        prev = prev + operations
        result[i+1] = prev
    }
    prev = 0
    operations = 0
    for (i, box) in boxes.enumerated().dropFirst().reversed() {
        if box == "1" {operations += 1}
        prev = prev + operations
        result[i-1] += prev
    }
    return result
}
}
