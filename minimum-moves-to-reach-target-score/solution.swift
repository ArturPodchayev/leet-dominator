class Solution {
    func minMoves(_ target: Int, _ maxDoubles: Int) -> Int {
        var res = 0
        helper(target, 0, maxDoubles)

        func helper(_ cur: Int, _ count: Int, _ maxDoubles: Int) {
            if cur == 0 { 
                res = count - 1
                return
            }
            if maxDoubles > 0 {
                if cur % 2 == 0 {
                    helper(cur / 2, count + 1, maxDoubles - 1)
                } else {
                    helper(cur - 1, count + 1, maxDoubles)
                }
            } else {
                res = count + cur - 1
            }
        }

        return res
    }
}
