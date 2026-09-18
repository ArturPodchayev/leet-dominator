import Foundation

class Solution {
    func minGroups(_ intervals: [[Int]]) -> Int {
        let n = intervals.count
        var startTimes = [Int](repeating: 0, count: n)
        var endTimes = [Int](repeating: 0, count: n)

        // Extract start and end times
        for i in 0..<n {
            startTimes[i] = intervals[i][0]
            endTimes[i] = intervals[i][1]
        }

        // Sort start and end times
        startTimes.sort()
        endTimes.sort()

        var endPtr = 0
        var groupCount = 0

        // Traverse through the start times
        for start in startTimes {
            if start > endTimes[endPtr] {
                endPtr += 1
            } else {
                groupCount += 1
            }
        }

        return groupCount
    }
}
