class Solution {
    func minOperations(_ s: String) -> Int {
        s.chunked(by: <=).count == 1 ? 0 : s.count == 2 ? -1 : s
            .minAndMax()
            .map { min, max in
                s.first == min || s.last == max ? 1 : s
                    .dropFirst()
                    .dropLast()
                    .contains { $0 == min || $0 == max } ? 2 : 3
            } ?? 0

    }
}
