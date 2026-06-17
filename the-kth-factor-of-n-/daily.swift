class Solution {
  func processStr(_ s: String, _ k: consuming Int) -> Character {
    zip(
        s+".", 
        (s+".").reduce(into:[0]) { r, c in
          var len = r.last!
          switch c {
          case "*": if len > 0 { len -= 1 }
          case "#": len *= 2
          case "%": break
          default: len += 1
          }
          r.append(len)
        }
        .adjacentPairs()
      )
      .reversed()
    .first { (c,t) in
        let (prevLen, curLen) = t
        switch c {
        case "*": break
        case "#": k -= k >= max(0,prevLen) ? prevLen:0
        case "%": k = prevLen > 0 ? curLen - 1 - k : k
        default:  return k >= curLen - 1
        }
        return false
    }?.0 ?? "."
  }
}
