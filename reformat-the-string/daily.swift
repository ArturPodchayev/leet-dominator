class Solution {
  func minScore(_ n: Int, _ roads: [[Int]], _ groups:consuming [Int] = Array(0...100_000), _ find:(inout [Int], Int) -> Int = {(groups, x) in func find(_ x:Int)->Int {groups[x] = x != groups[x] ? find(groups[x]) : groups[x]; return groups[x]};return find(x)}) -> Int {
    roads.reduce(into:[Int](repeating: .max, count: n+1)) { minCosts, road in
      let (x,y) = [find(&groups, road[0]), find(&groups, road[1])].minAndMax()!
      groups[y] = x
      minCosts[x] = min(minCosts[x], minCosts[y], road[2])
    }[find(&groups, 1)]
  }
}
