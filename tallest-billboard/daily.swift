class Solution {
    func countServers(_ n: Int, _ logs: [[Int]], _ x: Int, _ queries: [Int]) -> [Int] {
        // Step 1: Sort logs by time
        let sortedLogs = logs.sorted { $0[1] < $1[1] }

        // Step 2: Pair queries with their original indices and sort by query time
        let indexedQueries = queries.enumerated().sorted { $0.element < $1.element }

        var result = Array(repeating: 0, count: queries.count)
        var serverCount = [Int: Int]()       // Server ID -> number of logs in current window
        var activeServers = Set<Int>()       // Servers with at least one log in the current window
        var left = 0, right = 0              // Sliding window pointers

        // Step 3: Process each query in increasing order of time
        for (index, time) in indexedQueries {
            let startTime = time - x

            // Expand the right side of the window to include logs ≤ current time
            while right < sortedLogs.count && sortedLogs[right][1] <= time {
                let serverId = sortedLogs[right][0]
                serverCount[serverId, default: 0] += 1
                if serverCount[serverId] == 1 {
                    activeServers.insert(serverId)
                }
                right += 1
            }

            // Shrink the left side to exclude logs < startTime
            while left < sortedLogs.count && sortedLogs[left][1] < startTime {
                let serverId = sortedLogs[left][0]
                serverCount[serverId]! -= 1
                if serverCount[serverId]! == 0 {
                    activeServers.remove(serverId)
                }
                left += 1
            }

            // Store the number of inactive servers
            result[index] = n - activeServers.count
        }

        return result
    }
}
