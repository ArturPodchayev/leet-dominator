class Solution {
    func missingInteger(_ nums: [Int]) -> Int {
        var arr = [nums[0]]
        for i in 0..<nums.count - 1 {
            if nums[i] == nums[i + 1] - 1 {
                arr.append(nums[i+1])
            } else {
                break
            }
        }
        var answer = arr.reduce(0) {$0 + $1}

        while true {
            if nums.contains(answer) {
                answer += 1
            } else {
                break
            }
        }
        return(answer)
    }
}
