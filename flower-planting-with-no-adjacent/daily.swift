class Solution {
    func gardenNoAdj(_ N: Int, _ paths: [[Int]]) -> [Int] {
        if paths.count == 0 { return Array(repeating: 1, count: N) }
        var adjacentPaths: [Int:[Int]] = [:]

         for path in paths {
            adjacentPaths[path[0], default:[]].append(path[1])
            adjacentPaths[path[1], default:[]].append(path[0])
         }

        var result = Array(repeating: 0, count: N)

        for i in 1 ... N {
            var possibleValues = Set(Range(1...4))
            for neighbor in adjacentPaths[i, default: []] {
                possibleValues.remove(result[neighbor-1])
            }
            result[i - 1] = possibleValues.popFirst()!
        }
        return result
     }
}
