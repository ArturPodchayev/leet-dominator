class Solution {
    func buildArray(_ target: [Int], _ n: Int) -> [String] {
        var result: [String] = []

        if target.count == target.last {
            for _ in 0..<target.count {
                result.append("Push")
            }
        } else {
            let last = target.last!
            for i in 1...last {
                result.append("Push")
                if !target.contains(i) {
                    result.append("Pop")
                }
            }
        }
        return result
    }
}
