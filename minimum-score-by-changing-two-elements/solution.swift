class Solution 
{
    func minimizeSum(_ nums: [Int]) -> Int 
    {
        let n = nums.count
        let sortedNums = nums.sorted()
        var high = Int.max
        high = min(high, sortedNums[n - 2] - sortedNums[1])
        high = min(high, sortedNums[n - 3] - sortedNums[0])
        high = min(high, sortedNums[n - 1] - sortedNums[2])
        return high
    }
}
