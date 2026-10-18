class Solution {
    func numOfWays(_ nums: [Int]) -> Int {
        let MOD = Int(1e9+7)

        // `dp` is Pascal's triangle which a permutation lookup
        let dp = (1..<nums.count).reduce(into: [[1]]) { dp, i in
            let row = (1 ..< (i+2)/2).reduce(into:[1]) { row, j in
                row.append(dp[i-1][j-1...j].lazy.reduce(0,+) % MOD)
            }
            dp.append(row + row[...(dp.last!.count-row.count)].reversed())
        }

        func dfs(_ a:[Int]) -> Int {
            // if only one element other than pivot, return 1
            a.count < 3 ? 1 : 
            // for all elements but pivot
            a[1...]
            // sort into two arrays: < pivot and > pivot
            .reduce(into: [[Int](),[Int]()]) { d,n in d[a[0]>n ? 1:0].append(n)}
            // number the arrays
            .enumerated()
            // map arrays to `dfs()` and multiply. for left array (first), also multiply by permutation
            .reduce(1) {$0 * (($1.0==0 ? dp[a.count-1][$1.1.count] : 1) * dfs($1.1)) % MOD } % MOD
        }

        return dfs(nums) - 1 // subtract 1 to remove original `nums` from consideration
    }
}
