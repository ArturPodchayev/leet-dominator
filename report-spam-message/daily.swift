class Solution {
  func busiestServers(_ k: Int, _ arrival: [Int], _ load: [Int]) -> [Int] {
    {(free:consuming Heap<Int>, busy:consuming Heap<Int>) in 
      {a in a.compactMap {[max = a.values.max()!] in $0.value == max ? $0.key : nil }.sorted()}(
        [Int:Int](zip(0...,arrival).compactMap { (i,t:Int)->(Int,Int)? in
          while (busy.min ?? .max) >> 17 <= t {
            free.insert(i + ((busy.removeMin() & ((1<<17)-1) - i) % k + k) % k)
          }
          busy.insert(free.isEmpty ? .max : (t + load[i])<<17 + free.min! % k)
          return free.isEmpty ? nil : (free.removeMin() % k, 1)
        }){$0+$1}
      )}(Heap(0..<k), Heap<Int>())
    }
}
