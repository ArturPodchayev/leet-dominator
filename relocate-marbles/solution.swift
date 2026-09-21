class Solution {
    func relocateMarbles(_ nums: [Int], _ moveFrom: [Int], _ moveTo: [Int]) -> [Int] {
        var uniquePositions = Set<Int>()
        var numsLength = nums.count 
        var moveFromLength = moveFrom.count

        for iterator in 0..<numsLength {
            uniquePositions.insert(nums[iterator])
        }   

        for iterator in 0..<moveFromLength {
            if uniquePositions.contains(moveFrom[iterator]) {
                uniquePositions.remove(moveFrom[iterator])
                uniquePositions.insert(moveTo[iterator])
            }
        }

        var array = Array(uniquePositions)
        var sortedArray = array.sorted {
            return $0 < $1
        }

        return sortedArray
    }
}
