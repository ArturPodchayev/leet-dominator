class Solution {
    func getStrongest(_ arr: [Int], _ k: Int) -> [Int] {
        
        let m = arr.sorted()[(arr.count - 1) / 2]

        return Array(
            arr
                .sorted { abs($0 - m) > abs($1 - m) || (abs($0 - m) == abs($1 - m) && $0 > $1) }
                .prefix(k)
        )
    }
}
