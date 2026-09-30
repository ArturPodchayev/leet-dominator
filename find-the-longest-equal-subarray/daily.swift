class Solution {
    func maxDepthAfterSplit(_ seq: String) -> [Int] {
        
        var ds = [Int]()
        var d = 0

        for c in seq {
            if c == "(" {
                d += 1
                ds.append(d)
            }
            else {
                ds.append(d)
                d -= 1
            }
        }

        let m = (ds.min()! + ds.max()!) / 2

        return ds.map { $0 > m ? 1 : 0 }
    }
}
