class Solution {
    func sumAndMultiply(_ s: String, _ queries: [[Int]]) -> [Int] {
        [10, 1]
            .map { [digits = s.compactMap(\.wholeNumberValue)] t in
                (
                    digits.reductions(0) { $1 == 0 ? $0 : ($0 * t + $1) % 1000000007 },
                    Array(repeating: t, count: digits.count).reductions(1) { $0 * $1 % 1000000007 }
                )
            }
            .map { [counts = s.map { $0 == "0" ? 0 : 1 }.reductions(0, +)] (nums: [Int], pow: [Int]) -> [Int] in
                queries
                    .map {
                        nums[$0[1] + 1] - nums[$0[0]] * pow[counts[$0[1] + 1] - counts[$0[0]]]
                    }
                    .map {
                        $0 % 1000000007 + 1000000007
                    }
            }
            .reduce(Array(repeating: 1, count: queries.count)) {
                zip($0, $1)
                    .map { $0 * $1 % 1000000007 }
            }
    }
}
