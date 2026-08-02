class Solution {
    func countTestedDevices(_ batteryPercentages: [Int]) -> Int {
        var count = 0

        for i in 0..<batteryPercentages.count {
            if batteryPercentages[i] - count > 0 {
                count += 1
            }
        }
        return count
    }
}
