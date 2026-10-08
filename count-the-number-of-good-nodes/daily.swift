class Solution {
  func removeOuterParentheses(_ s: String) -> String {
    var r = ""
    var isInside = false
    var a = 0
    var b = 0
    for ch in s {
      if ch == "(" {
        a += 1
      } else {
        b += 1
      }
      if a == b {
        isInside = false
      }

      if isInside == false {
        if ch == "(" {
          isInside = true
        }
      } else {
        r.append(ch)
      }
    }
    return r
  }
}
