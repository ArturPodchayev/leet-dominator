class Solution {
  func maxNumOfSubstrings(_ s: String, _ h:consuming Int = -1) -> [String] {
    (0..<26)
    .compactMap {[
        a = s.utf8.map{Int($0)-97},
        f = zip(s.utf8.map{Int($0)-97},0...).grouped(by:\.0).mapValues{$0.map(\.1).minAndMax()!}
      ] (c:Int)->(Int,Int)? in
      guard var (l,r) = f[c] else { return nil }
      var i = l
      while i <= r {
        if f[a[i]]!.min < l { return nil }
        r = max(r, f[a[i]]!.max)
        i += 1
      }
      return (r,l)
    }
    .sorted(by: <)
    .reduce(into: [String]()) {[a=Array(s.utf8)] res, t in
      let (r,l) = t
      guard l > h else { return }
      res.append(String(decoding: a[l...r], as: UTF8.self))
      h = r
    }
  }
}
