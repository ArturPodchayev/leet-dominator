class Solution {
   func canSplitArray(_ nums: [Int], _ m: Int) -> Bool {
    var sum = 0
    var arr = nums
    if arr.count == 1{
        return true
    }
    if (arr.last! + arr[arr.count-2]) < (arr[0] + arr[1])   {
        for i in 0...arr.count-2{
            sum += arr[i]
            guard i == arr.count-2 else{continue}
            if sum >= m || arr.count == 2{
                if !(canSplitArray(arr.dropLast(), m)){
                    return false
                }
                
            }
            else{
                return false
            }
        }
    }
    else{
        for j in stride(from: arr.count-1, to: 0, by: -1) {
            sum += arr[j]
            guard j == 1 else{continue }
            if sum >= m || arr.count == 2{
                if !(canSplitArray(Array(arr.dropFirst()), m)){
                    return false
                }
            }
            else{
                return false
            }
        }
    }
    return true
   }
}
