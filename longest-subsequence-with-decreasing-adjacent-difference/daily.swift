class Solution {
    func minChanges(_ s: String) -> Int {
    var subsstring = [Character]()
    var result = 0
    
    for i in s {
        subsstring.append(i)
        if subsstring.count == 2 {
            if subsstring[0] != subsstring[1] {
                result += 1
            }
            subsstring = []
        }
    }
    
    
    return result
}
}
