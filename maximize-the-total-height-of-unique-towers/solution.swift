class Solution {
    func maximumTotalSum(_ maximumHeight: [Int]) -> Int {
        let n = maximumHeight.count
        let maximumHeight = maximumHeight.sorted()
        var result: [Int] = Array(repeating: 0, count: n)
        result[n-1] = maximumHeight[n-1]
        for i in (0 ..< n-1).reversed() {
            if maximumHeight[i] < result[i+1] {
                result[i] = maximumHeight[i]
            } else {
                result[i] = result[i+1]-1
            }
        }
        return result[0] <= 0 ? -1 : result.reduce(0, +)
    }
}
