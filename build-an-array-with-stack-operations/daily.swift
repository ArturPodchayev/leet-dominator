class Solution {
    func gcdSum(_ nums: [Int]) -> Int {
        let n = nums.count
        var prefixGcd = Array(repeating:1, count: n)
        var maxTillN = 0
        for i in 0..<n {
            maxTillN = max(maxTillN, nums[i])
            if maxTillN == nums[i] {
                prefixGcd[i] = nums[i]
            } else {
                prefixGcd[i] = GCD(maxTillN, nums[i])
            }
        }
        prefixGcd.sort()
        var i = 0
        var j = n-1
        var sum = 0
        while i < j {
            sum += GCD(prefixGcd[j], prefixGcd[i])
            i += 1
            j -= 1
        }
        return sum
    }

    func GCD(_ x: Int, _ y: Int) -> Int {
        
        var x = x
        var y = y

        while y != 0 {
            var temp = x
            x = y
            y = temp%y
        }

        return x
    }
}
