class Solution {
    func processStr(_ s: String) -> String {
        var res = ""

        for char in s {
            if char == "*" {
                if res.count > 0 {
                    res.removeLast()
                }
            } else if char == "#" {
                res += res
            } else if char == "%" {
                res = String(res.reversed())
            } else {
                res += "\(char)"
            }
        }

        return res
    }
}
