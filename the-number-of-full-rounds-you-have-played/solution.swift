class Solution {
    private func timeStr2Int(_ time: String) -> Int {
        let split = time.split(separator: ":")
        return (Int(split[0]) ?? 0) * 60 + (Int(split[1]) ?? 0)
    }
    func numberOfRounds(_ startTime: String, _ finishTime: String) -> Int {
        var s = timeStr2Int(startTime), f = timeStr2Int(finishTime)
        if f < s { f += 24 * 60 }
        var result = 0
        for t in s...f where t % 15 == 0 && f-t >= 15 { result += 1 }
        return result
    }
}
