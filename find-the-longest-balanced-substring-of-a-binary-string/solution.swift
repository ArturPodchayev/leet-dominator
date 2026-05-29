class Solution {
    func findTheLongestBalancedSubstring(_ s: String) -> Int {
        
        var z = 0
        var o = 0
        var res = 0

        for c in s {
            switch (c, z, o) {
            case ("0", _, 0): z += 1
            case ("0", _, _): z = 1; o = 0
            default: o += 1
            }

            res = max(res, min(z, o) * 2)
        }

        return res
    }
}
