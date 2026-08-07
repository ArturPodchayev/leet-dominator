class Solution {
    func smallestNumber(_ num: String, _ t: Int) -> String {
        func gcd(_ a: Int, _ b: Int) -> Int {
            guard b != 0 else { return a }
            return gcd(b, a % b)
        }
        var temp = t
        for i in (2...9).reversed() {
            while temp % i == 0 {
                temp /= i
            }
        }
        guard temp == 1 else { return "-1" }
        let n = num.count
        var rem = Array(repeating: 0, count: n + 1)
        rem[0] = t
        var pos = n - 1
        var chars = Array(num.utf8)
        for i in 0..<n {
            if chars[i] == 48 { // "0"
                pos = i
                break
            }
            let digit = Int(chars[i] - 48)
            rem[i + 1] = rem[i] / gcd(rem[i], digit)
        }
        if rem[n] == 1 {
            return num
        }
        for i in stride(from: pos, through: 0, by: -1) {
            while chars[i] < 57 {
                chars[i] += 1
                let digit = Int(chars[i] - 48)
                var tNow = rem[i] / gcd(rem[i], digit)
                var k = 9
                for j in stride(from: n - 1, through: i + 1, by: -1) {
                    while tNow % k != 0 {
                        k -= 1
                    }
                    tNow /= k
                    chars[j] = UInt8(k + 48)
                }
                if tNow == 1 {
                    return String(bytes: chars, encoding: .utf8)!
                }
            }
        }
        var ans: [UInt8] = []
        var originalT = t
        for i in stride(from: 9, through: 2, by: -1) {
            while originalT % i == 0 {
                ans.append(UInt8(i + 48))
                originalT /= i
            }
        }
        let padding = max(n + 1 - ans.count, 0)
        ans.append(contentsOf: repeatElement(49, count: padding))
        return String(bytes: ans.reversed(), encoding: .utf8)!
    }
}
