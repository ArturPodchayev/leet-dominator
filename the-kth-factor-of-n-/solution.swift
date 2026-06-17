class Solution {
    func kthFactor(_ n: Int, _ k: Int) -> Int {
        var small = [Int]()
        var large = [Int]()

        let sqrtN = Int(Double(n).squareRoot())

        for i in 1...sqrtN {
            if n % i == 0 {
                small.append(i)
                if i != n / i {
                    large.insert(n / i, at: 0)
                }
            }
        }

        let allFactors = small + large
        return k <= allFactors.count ? allFactors[k - 1] : -1
    }
}
