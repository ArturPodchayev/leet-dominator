class Solution {
  func shortestBeautifulSubstring(_ s: String, _ k: Int) -> String {
    (k...s.count)
    .lazy
    .compactMap { [s=s.utf8.map{Int($0)&1}, m=[Character("0"),"1"]] w in
      var onesCount = s.prefix(w-1).reduce(0,+)
      return (0 ... s.count-w).reduce(into: String?.none) {res, l in
        onesCount += s[l+w-1]
        res = onesCount == k ? min(res ?? "2", String(s[l..<(l+w)].map{m[$0]})) : res
        onesCount -= s[l]
      }
    }.first ?? ""
  }
}
