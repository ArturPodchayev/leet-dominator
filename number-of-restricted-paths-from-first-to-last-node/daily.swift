class Solution {
    func arrayRankTransform(_ arr: [Int]) -> [Int] {
        var sArr = arr.sorted()
        var map:[Int:Int] = [:]
        for item in sArr{
            if map[item] == nil{ map[item] = map.count + 1 }
        }
        var res:[Int] = []
        for item in arr{
            res.append(map[item]!)
        }
        return res
    }
}
