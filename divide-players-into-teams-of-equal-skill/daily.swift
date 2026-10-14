class Solution {
    func maxSumOfSquares(_ num: Int, _ sum: Int) -> String {
        guard num * 9 >= sum else { return "" }

        var sum = sum
        var res: [Character] = Array(repeating: "0", count: num)
        for i in 0 ..< num {
            if sum >= 9 {
                res[i] = "9"
                sum -= 9
            } else {
                res[i] = Character("\(sum)")
                sum = 0
            }
        }

        return String(res)
    }
}
