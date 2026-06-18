class Solution {
    func simplifiedFractions(_ n: Int) -> [String] {
        var res = [String]()

        var k = 1
        while k < n {
            for i in 2...n {
               let d = gcd(i, k);
               let i2  = i / d;
               let k2 = k / d;

               if res.contains("\(k2)/\(i2)") || k >= i { continue }
               res.append("\(k2)/\(i2)")
            }
            k += 1
        }

        return res
    }

    func gcd(_ a: Int, _ b: Int) -> Int {
       let r = a % b
       if r != 0 {
          return gcd(b, r)
       } else {
          return b
       }
    }
}
