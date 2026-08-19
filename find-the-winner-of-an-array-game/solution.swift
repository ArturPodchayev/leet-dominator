class Solution {
    func getWinner(_ arr: [Int], _ k: Int) -> Int {
        var currPointer = 0
        var targetPointer = 1
        var count = 0

        while count < k && currPointer < arr.count - 1 {
            guard count != k else {
                break
            }
            
            let num = arr[currPointer]
            let numToCompare = arr[targetPointer]
            
            if num > numToCompare {
                count += 1
                targetPointer = (targetPointer + 1) > (arr.count - 1) ? currPointer + 1 : targetPointer + 1
            } else {
                currPointer = targetPointer
                targetPointer = (targetPointer + 1) > (arr.count - 1) ? 0 : targetPointer + 1
                count = 1
            }
        }

        return arr[currPointer]
    }
}
