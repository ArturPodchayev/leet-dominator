class Solution {
    func colorTheArray(_ n: Int, _ queries: [[Int]]) -> [Int] { 
        queries.reduce(into: ([Int](),Array(repeating: 0, count: n+2))) { d, q in let i=q[0]+1;func f(_ n:Int) -> Int {(n>0 && n==d.1[i-1] ? 1 : 0) + (n>0 && n==d.1[i+1] ? 1 : 0)};d.0+=[(d.0.last ?? 0)-f(d.1[i])+f(q[1])];d.1[i]=q[1]}.0
    }
}
