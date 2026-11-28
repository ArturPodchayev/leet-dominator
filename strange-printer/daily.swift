class Solution {
  func maximumSaleItems(_ items: [[Int]], _ budget: Int, _ dp:consuming [Int] = [0]+Array(repeating: .min/2, count: 100001), _ v:consuming Int = 0, _ reach:[Int]! = nil, _ N:Int = Int.min / 2) -> Int {
    reach == nil
    ? maximumSaleItems(items, budget, dp,v,(1...(items.count+1)).reduce(into: Array(repeating:0, count:items.count+1)) {[cn = [Int:Int](items.map{($0[0],1)}){$0+$1}] a,b in
      cn[b] != nil ? stride(from:b, through:items.count+1, by:b).forEach{a[b]+=cn[$0] ?? 0}: ()
    })
    : {2*$0.1+$0.0/$0.2}((items.indices.sorted{items[$0][1]<items[$1][1]}.reduce((budget,0,0)) {[pMin = items.map{$0[1]}.min()!] t, i in
        items[i][1] > 2 * pMin ? t:{(t.0-$0*items[i][1],t.1+$0,pMin)}(min(reach[items[i][0]]-1,t.0/items[i][1]))
      }))
  }
}
