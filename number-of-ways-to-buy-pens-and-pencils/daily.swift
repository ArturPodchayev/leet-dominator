class Solution {
    func minCost(_ grid: [[Int]]) -> Int {
        grid
            .reduce(into: grid[0].indices.map { $0 == 0 ? [0] : [] }) { (xors: inout [Set<Int>], row: [Int]) in
                xors
                    .indices
                    .forEach { i in
                        xors[i] = Set(
                            xors[i]
                                .union(i == 0 ? [] : xors[i - 1])
                                .map { $0 ^ row[i] }
                        )
                    }
            }
            .last?.min() ?? 0
    }
}
