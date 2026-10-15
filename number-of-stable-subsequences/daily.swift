class Solution {
func sumCounts(_ nums: [Int]) -> Int {
    var ans : [[Int]] = []
    for i in 0..<nums.count {
        var arr : [Int] = []
        for j in i..<nums.count {
            arr.append(nums[j])
            ans.append(arr)
        }
    }
    var arrCount = ans.compactMap {
        (Set($0).count)*(Set($0).count)
    }.reduce(0, +)
    return arrCount
}
}
