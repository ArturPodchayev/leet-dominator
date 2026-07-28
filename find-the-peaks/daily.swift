class Solution {
func findPeaks(_ mountain: [Int]) -> [Int] {
  var peaks = [Int]()
  for index in 0..<mountain.count-1 {
    guard index != 0 && index != mountain.count-1 else { continue }
    if mountain[index] > mountain[index + 1] && mountain[index] > mountain[index - 1] {
      peaks.append(index)
    }
  }
  return peaks
}
}
