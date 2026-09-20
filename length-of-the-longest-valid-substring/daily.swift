class Solution {
    func reverseDegree(_ s: String) -> Int {
        zip(s.utf8.lazy.map{123-Int($0)},1...).map(*).reduce(0,+)
    }
}
