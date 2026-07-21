class Solution {
    func maxActiveSectionsAfterTrade(_ s: String) -> Int {
        let count = s.filter { $0 == "1" }.count
        if s.length < 3 {
            return count
        }
        guard count > 0 else { return 0 } // no active trade
        var modifiedArr = Array(s) + ["1"]
        var blockCount = [Int]()
        var prevChar: Character = "1"
        var currentCount = 0
        for item in modifiedArr {
            if item == prevChar {
                currentCount += 1
            } else {
                blockCount.append(currentCount)
                currentCount = 1
            }
            prevChar = item
        }
        blockCount.append(currentCount - 1)
        var prefixSum = Array(repeating: 0, count: blockCount.count)
        prefixSum[0] = blockCount[0]
        for i in 1..<blockCount.count {
            if i % 2 == 0 {
                prefixSum[i] = prefixSum[i-1] + blockCount[i]
            } else {
                prefixSum[i] = prefixSum[i-1]
            }
        }
        var maxVal = count
        for index in stride(from: 2, to: blockCount.count, by: 2) {
            if index + 1 < blockCount.count {
                var trade = 0
                trade += prefixSum[index - 1] + blockCount[index - 1] + blockCount[index] + blockCount[index+1]
                trade += prefixSum[blockCount.count - 1] - prefixSum[index + 1]
                maxVal = max(maxVal, trade)
            }
        }
        return maxVal
    }
}
