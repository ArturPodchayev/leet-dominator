class Solution {
    func findOriginalArray(_ changed: [Int]) -> [Int] {
        guard changed.count % 2 == 0 else { return [] }
        
        var buffer = [Int]()
        var hashTable = [Int: Int]()
        
        for number in changed {
            hashTable[number, default: 0] += 1
        }
        
        for number in changed.sorted() {
            
            if hashTable[number] == 0 {
               continue
            }
            
            if let count = hashTable[number], count > 0 {
                
                if let doubleCounter = hashTable[number * 2], doubleCounter > 0 {
                    buffer.append(number)
                    
                    hashTable[number]! -= 1
                    hashTable[number * 2]! -= 1
                } else { return [] }
            }
            
        }
        
        
        return buffer
    }
}
