class Solution {
    func kWeakestRows(_ mat: [[Int]], _ k: Int) -> [Int] {
        var rows: [Int: Int] = [:]

        for i in 0..<mat.count {
            var count = 0
            for j in 0..<mat[i].count {
                if mat[i][j] == 1 {
                    count += 1
                }
            }
            rows[i] = count
        }
        let result = rows
            .sorted(by: { $0.key < $1.key })
            .sorted(by: { $0.value < $1.value })
            .map{ $0.key }[0..<k]
        return Array(result)
    }
}
