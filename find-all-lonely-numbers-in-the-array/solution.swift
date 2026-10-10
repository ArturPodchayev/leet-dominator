class Solution {
    func findLonely(_ nums: [Int]) -> [Int] {
        var lonelyArray: [Int] = []
        var hashDict: [Int: Int] = [:]
        
        for num in nums {
            if let value = hashDict[num] {
                hashDict[num] = value + 1
            }else {
                hashDict[num] = 1
            }
        }
        
        for (key, value) in hashDict {
            if value == 1 && hashDict[key-1] == nil && hashDict[key+1] == nil {
                lonelyArray.append(key)
            }
        }
        return lonelyArray
    }
}
