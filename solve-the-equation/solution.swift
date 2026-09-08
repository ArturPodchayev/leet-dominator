class Solution {
    func helper(_ str: String) -> (Int, Int) {
        let str = Array(str), c = str.count
        var a = 0, b = 0, num: Int? = nil, sign = 1
        for i in 0..<c {
            switch str[i] {
                case "+", "-": b += sign * (num ?? 0); num = nil; sign = Int(String(str[i]) + "1") ?? 1
                case "x": a += sign * (num ?? 1); num = nil
                default: num = (num ?? 0) * 10 + (Int(String(str[i])) ?? 0)
            }
        }
        return (a, b + sign * (num ?? 0))
    }
    func solveEquation(_ equation: String) -> String {
        let e = equation.split(separator: "="), (la, lb) = helper(String(e[0])), (ra, rb) = helper(String(e[1])), a = la - ra, b = rb - lb
        return a == 0 ? (b == 0 ? "Infinite solutions" : "No solution") : "x=\(b / a)"
    }
}
