class OrderedStream {
  let n: Int
  var data: [String] = []
  var current = 1

  init(_ n: Int) {
    self.n = n
    for _ in 0...n { // one extra slot to reduse calculation
      data.append("")
    }
  }
  
  func insert(_ idKey: Int, _ value: String) -> [String] {
    data[idKey] = value
    if idKey == current {
      var i = current
      var result: [String] = []
      while(i < data.count && data[i] != "") {
        result.append(data[i])
        i += 1
      }
      current = i
      return result
    } else {
      return []
    }
  }
}
