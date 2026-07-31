class Solution {
    func minimumPushes(_ word: String) -> Int {
        var pushes = 0, dict = [Character : Int]()
        for c in word {
            dict[c] = (dict[c] ?? 0) + 1
        }
        var arr = [Int]()
        for (k,v) in dict {
            arr.append(v)
        }
        // count sort
        var sArr = arr.sorted()
        var i = 1, j = 0
        while !sArr.isEmpty {
            let v = sArr.removeLast()
            j += 1
            if j > 8 {
                i += 1
                j = 1
            }
            pushes += i * v
        }
        return pushes
    }
}
