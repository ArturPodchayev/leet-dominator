class Solution {
    func uniqueXorTriplets(_ nums: [Int]) -> Int {
        let n = nums.count
        guard n > 2 else {
            return n
        }

        var answer = 1
        while answer <= n {
            answer <<= 1
        }
        return answer
    }
}
