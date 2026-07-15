class Solution {
    func valueAfterKSeconds(_ n: Int, _ k: Int) -> Int {
        
        var arr = Array(repeating: 1, count: n)

        for _ in 1...k {
            for i in 1..<n {
                arr[i] = (arr[i - 1] + arr[i]) % 1000_000_007
            }
        }

        return arr.last!
    }
}
