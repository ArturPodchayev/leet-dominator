class Solution {
    func kthDistinct(_ arr: [String], _ k: Int) -> String {
        var dict = [String : Int]()
        for s in arr {
            dict[s] = (dict[s] ?? 0) + 1
        }
        var k1 = 1
        for s in arr {
            if dict[s] == 1 && k1 == k {
                return s
            } 
            else if dict[s] == 1 {
                k1 += 1
            }
        }
        return ""
    }
}
