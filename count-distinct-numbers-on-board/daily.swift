class Solution {
  func pathExistenceQueries(_ n: Int, _ nums: [Int], _ maxDiff: Int, _ queries: [[Int]]) -> [Bool] {
    queries.map { q in 
      q.minAndMax().map {i,j in
       (i...j).adjacentPairs().allSatisfy {a,b in
         nums[b]-nums[a] <= maxDiff 
      }}!
    }
  }
}
