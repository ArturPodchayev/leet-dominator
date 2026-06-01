class Solution {
  func minimumCost(_ cost: [Int]) -> Int {
    cost
    .sorted(by:>)
    .chunks(ofCount:3)
    .reduce(0){r,a in 
        r + a.prefix(2).reduce(0,+)
    } 
  }
}
