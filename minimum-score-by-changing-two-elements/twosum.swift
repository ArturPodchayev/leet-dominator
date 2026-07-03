class Solution {
    func twoSum(_ n: [Int], _ t: Int) -> [Int] {
        var dict = [Int:Int]()
        for (i, n) in n.enumerated() {
            if let val = dict[t-n] { return [val, i] }
            dict[n] = i
        }
        return []
    }
}
